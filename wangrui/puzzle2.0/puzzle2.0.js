var n;
var m;
$(document).ready(function(){
//确认输入事件
    $(".confirm").click(function(){
//必须先清上一次的数值对容器的影响
        $(".container").empty();
	    if ($("#num").value != "") {
		    n = $("#num")[0].value;//为什么添加一个［0］就不会显示undifined
		    m = 300/n-2;
		}
// alert(m);测试边长
		$(".box").css("width",m+"px"); //含字母的表达
        $(".box").css("height",m+"px");
//repeat不能对box实现重复的效果：$("#box").css("background-repeat","repeat")
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
                            "font-size": 100/n + "px"
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
            if((i == up || i==down || i==left || i==right) && $(".box").eq(i).hasClass("target")){
//交换target类
                $(".box").eq(i).removeClass("target");
                $(this).addClass("target"); 
//交换数值              
                var label = $(this).text();
                $(this).text("");
                $(".box").eq(i).text(label).css({
                    "text-align": "center",
                    "font-size": 100/n + "px"
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
  
})





