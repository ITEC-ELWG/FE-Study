var n;
var m;
$(document).ready(function(){
//确认输入事件
    $(".confirm").click(function(){
//必须先清上一次的数值对容器的影响
        $(".container").empty();
        if ($("#num").value != "") {
            n = $("#num")[0].value;
            m = 300/n-2;
        }
        $(".box").css("width",m+"px"); //含字母的表达
        $(".box").css("height",m+"px");
//:first保证每一次克隆是在第一次的基础上,且克隆之后设为可见
        for (var i=0; i<(n*n); i++) {
            $(".container").append($(".box:first").clone(true) .css("visibility","visible"));
        }

//从服务器获取随机数组
        var  num= {"m" : n};        
        $.post("../puzzle2.0/n_random.php",num,function(data,status){
            if (status == "success") { 
                //alert(data);              
                for (var i=0; i<(n*n); i++) {
                    if (data[i] == 0) {
                        var aimbox = $(".box").eq(i);
                        aimbox.addClass("target");
                    }
                    else{
                        $(".box").eq(i).text(data[i]).css({
                            "text-align": "center",
                            "font-size": 100/n + "px",
                            "line-height": 300/n + "px"
                        // "padding-top": 100/n + "px"
                        });
                    }
                }
            }
        },"json")          
    })

//点击事件
    $(".box").click(function(){
        var location = $(this).prevAll().length;
//x为取整的横坐标（去floor入ceil）y为纵坐标
        var x = Math.floor(location/n);
        var y = location - x*n;
        var up = n*(x-1)+y;
        var down = n*(x+1)+y;
        var left = n*x+y-1;
        var right = n*x+y+1;

        for (var i=0; i<(n*n); i++) {
            if( (i == up || i==down || (i==left && (left+1)%n !=0 ) || (i==right && i%n !=0)) && $(".box").eq(i).hasClass("target")){
//交换target类
                $(".box").eq(i).removeClass("target");
                $(this).addClass("target"); 
//交换数值              
                var label = $(this).text();
                $(this).text("");
                $(".box").eq(i).text(label).css({
                    "text-align": "center",
                    "font-size": 100/n + "px",
                    "line-height": 300/n + "px"
                    // "padding-top": 100/n + "px"
                });
                // $(this).animate({top:'-=100px'});         
            }
        }
        for (var j=0; j<(n*n-1); j++) {
            if($(".box").eq(j).text()-1 != j) return;
        }
        alert("Congratulations! You win!\n Input number again to start!");
    })

//键盘监听事件    
    function keyDown(e){
        // var e = event || window.event || arguments.callee.caller.arguments[0];
        for (var i=0; i<(n*n); i++) {
            if ($(".box").eq(i).hasClass("target")) {
                var coordinate = $(".box").eq(i).prevAll().length;
                var a = Math.floor(coordinate/n);
                var b = coordinate - a*n;
                var upSec = n*(a-1)+b;
                var downSec = n*(a+1)+b;
                var leftSec = n*a+b-1;
                var rightSec = n*a+b+1; 
//37向左移动
                if (rightSec>=0 && rightSec<(n*n) && rightSec%n !=0 && e.which == 37) {
                    $(".box").eq(i).removeClass("target");
                    $(".box").eq(rightSec).addClass("target");              
                    var content = $(".box").eq(rightSec).text();
                    $(".box").eq(rightSec).text("");
                    $(".box").eq(i).text(content).css({
                    "text-align": "center",
                    "font-size": 100/n + "px",
                    "line-height": 300/n + "px"
                    }); 
                    for (var j=0; j<(n*n-1); j++) {
                        if($(".box").eq(j).text()-1 != j) return;
                    }
                    alert("Congratulations! You win!\n Input number again to start!");
                break;                  
                }
//39向右移动
                if (leftSec>=0 && leftSec<(n*n) && (leftSec+1)%n !=0 && e.which == 39) {
                    $(".box").eq(i).removeClass("target");
                    $(".box").eq(leftSec).addClass("target");              
                    var content = $(".box").eq(leftSec).text();
                    $(".box").eq(leftSec).text("");
                    $(".box").eq(i).text(content).css({
                    "text-align": "center",
                    "font-size": 100/n + "px",
                    "line-height": 300/n + "px"
                    });
                    for (var j=0; j<(n*n-1); j++) {
                        if($(".box").eq(j).text()-1 != j) return;
                    }
                    alert("Congratulations! You win!\n Input number again to start!"); 
                break;                  
                }  
//38向上移动
                if (downSec>=0 && downSec<(n*n) && e.which == 38) {
                    $(".box").eq(i).removeClass("target");
                    $(".box").eq(downSec).addClass("target");               
                    var content = $(".box").eq(downSec).text();
                    $(".box").eq(downSec).text("");
                    $(".box").eq(i).text(content).css({
                    "text-align": "center",
                    "font-size": 100/n + "px",
                    "line-height": 300/n + "px"
                    }); 
                    for (var j=0; j<(n*n-1); j++) {
                        if($(".box").eq(j).text()-1 != j) return;
                    }
                    alert("Congratulations! You win!\n Input number again to start!");
                break;                  
                }
//40向下移动 
                if (upSec>=0 && upSec<(n*n) && e.which == 40) {
                    $(".box").eq(i).removeClass("target");
                    $(".box").eq(upSec).addClass("target");              
                    var content = $(".box").eq(upSec).text();
                    $(".box").eq(upSec).text("");
                    $(".box").eq(i).text(content).css({
                    "text-align": "center",
                    "font-size": 100/n + "px",
                    "line-height": 300/n + "px"
                    });
                    for (var j=0; j<(n*n-1); j++) {
                        if($(".box").eq(j).text()-1 != j) return;
                    }
                    alert("Congratulations! You win!\n Input number again to start!");
                break;                  
                } 
            }
        }
    }document.onkeydown = keyDown;
  
})





