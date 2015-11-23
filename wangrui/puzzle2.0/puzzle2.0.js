var n;//定义输入的数值

//生成小方块
function boxCreating(length) {
    var length;
    //必须先清上一次的数值对容器的影响
    $(".container").empty();       
    $(".box").css({
        "width": length + "px",
        "height": length + "px"
    });
    for (var i = 0; i < (n*n); i++) {
        $(".container").append($(".box:first").clone(true) .css("visibility","visible"));
    }
}

//为每个方块生产随机数组
function boxAddnumber(array) {
    var array;
    for (var i = 0; i < (n*n); i++) {
        if (array[i] == 0) {
            var aimbox = $(".box").eq(i);
            aimbox.addClass("target");
        }
        else {
            $(".box").eq(i).text(array[i]).css({
                "font-size": 168/n + "px",
                "line-height": 504/n + "px"
            });
        }
    }
}

//计算上下左右的坐标
function coordCalculate(box) {
    var box;   
    //x为取整的横坐标（去floor入ceil）y为纵坐标
    var coord = box.prevAll().length;  
    var x = Math.floor(coord/n);
    var y = coord - x*n;
    var position = new Array (4);
    position[0] = parseInt(n*(x-1)+y);
    position[1] = parseInt(n*(x+1)+y);
    position[2] = parseInt(n*x+y-1);
    position[3] = parseInt(n*x+y+1);
    return position;
}

//交换方块
function boxExchange(block,order) {
    var block;
    var order;
    //交换target类
    $(".box").eq(order).removeClass("target");
    block.addClass("target"); 
    //交换数值              
    var label = block.text();
    block.text("");
    $(".box").eq(order).text(label).css({
        "font-size": 168/n + "px",
        "line-height": 504/n + "px"
    });        
}

//判断是否赢得游戏
function gameJudge() {
    for (var j = 0; j < (n*n-1); j++) {
            if($(".box").eq(j).text()-1 != j) return;
    }
    alert("Congratulations! You win!\nInput number again to start!");
}

$(document).ready(function() {

    //确认输入事件
    $(".confirm").click(function() {
        //输入检测
        n = parseInt($("#num")[0].value);
        if (n < 2 || n > 10 || isNaN(n)) {
            alert ("请输入 2～10 之间的整数");
            return ;
        }
        //定义边长
        var m = 504/n-2;
        boxCreating(m);
        //从服务器获取随机数组
        var  num = {"m" : n};        
        $.post("../puzzle2.0/n_random.php",num,function(data,status) {
            if (status == "success") {
                boxAddnumber(data);
            }               
        },"json")          
    })

    //点击事件
    $(".box").click(function() {
        var boxclicking = $(this);
        var position = coordCalculate(boxclicking);
        // alert (position);
        for (var i = 0; i < (n*n); i++) {
            if( (i == position[0] || i == position[1] || (i == position[2] && (position[2]+1)%n != 0 ) || (i == position[3] && i%n != 0)) && $(".box").eq(i).hasClass("target")){               
                boxExchange(boxclicking,i);       
            }
        }
        gameJudge();
    })

    //键盘监听事件    
    function keyDown(e) {
        // var e = event || window.event || arguments.callee.caller.arguments[0];
        for (var i = 0; i < (n*n); i++) {
            if ($(".box").eq(i).hasClass("target")) {
                var location = coordCalculate($(".box").eq(i));
                //37向左移动
                if (location[3] >= 0 && location[3] < (n*n) && location[3]%n != 0 && e.which == 37) {
                    var blockmoving = $(".box").eq(location[3]);
                    boxExchange(blockmoving,i);
                    gameJudge();
                    break;                 
                }
                //39向右移动
                if (location[2] >= 0 && location[2] < (n*n) && (location[2]+1)%n != 0 && e.which == 39) {
                    var blockmoving = $(".box").eq(location[2]);
                    boxExchange(blockmoving,i);
                    gameJudge();
                    break;                 
                }  
                //38向上移动
                if (location[1] >= 0 && location[1] < (n*n) && e.which == 38) {
                    var blockmoving = $(".box").eq(location[1]);
                    boxExchange(blockmoving,i);
                    gameJudge();
                    break;                  
                }
                //40向下移动 
                if (location[0] >= 0 && location[0] < (n*n) && e.which == 40) {
                    var blockmoving = $(".box").eq(location[0]);
                    boxExchange(blockmoving,i);
                    gameJudge();
                    break;                  
                } 
            }
        }
    }document.onkeydown = keyDown; 
})





