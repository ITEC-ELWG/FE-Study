//定义初始数组以及随机后的数组
var arr = [1,2,3,4,5,6,7,8,""];
var newarr;

function Reset(){
	newarr = arr.sort(randomsort);
	function randomsort(a,b){
        return Math.random()>.5 ? -1:1;
        //Math.random()函数生成0-1之间的随机数与0.5比较，返回－1或者1
    }
    //将新的数组赋值给每一个td
    for (var i=0; i<newarr.length; i++) {
        $("td").eq(i).text(newarr[i]);
    }
    for (var i=0; i<newarr.length; i++) {
        if ($("td").eq(i).text() == "") {
            $("td").eq(i).css("background-color","#DCDCDC");//数值为空则初始为灰色
        }
        else{
            $("td").eq(i).css("background-color","#48D1CC");//数值不空则初始为蓝色
        }
    }
}

//点击移动方块
$(document).ready(function(){
	$("td").click(function(){

//获取点击元素的位置row排col列
	    var col= $(this).prevAll().length + 1;
	    var row= $(this).parent().prevAll().length + 1;
	    var num= $(this).text(); 
//查找数值为空的td
	    for(var i=0; i<newarr.length; i++){
	    	if ($("td").eq(i).text() == "") {
	    		var target= $("td").eq(i);
	    	}
	    } 
	    var aimcol= target.prevAll().length + 1;
        var aimrow= target.parent().prevAll().length + 1;
        var aimnum= target.text();	       
	    if ((col==aimcol && Math.abs(row-aimrow)==1) || (row==aimrow && Math.abs(col-aimcol)==1)) {
//交换td的数值	    	
            target.text(num);
            $(this).text(aimnum);
//交换背景颜色
            target.css("background-color","#48D1CC");
            $(this).css("background-color","#DCDCDC");
	    }
//判断是否获胜
        for(var j=0; j<newarr.length-1; j++){
        	if ($("td").eq(j).text()-1 != j) return;
        }
        alert("Well Done!/n Click the RESET button to start again!");
    })
})



