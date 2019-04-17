// JavaScript Document 
//表达式状态
var flag1;//输入第一个数字
var flag2;//输入第一个数字+运算符
var flag3;//输入第一个数字+运算符+第二个数字

var operator;//运算符
var result1;//存储第一个数字
var result2;//存储第二个数字

window.onload = function() {
    result = document.getElementById("result");
    result.value = null; 
    var clicked_btn = document.getElementsByClassName("click_event");
    for (var i = 0 ; i < clicked_btn.length; i++) {
    	clicked_btn[i].addEventListener('click', myfunction, false ) ; 
    }
    flag1 = false;
    flag2 = false;
    flag3 = false;
}

function clear() {
    result.value=null;
    result1 = null;
    result2 = null;
    flag1 = false;
    flag2 = false;
    flag3 = false;	
}
function myfunction() {
	var num_id = event.currentTarget.id;
    //输入数字
    if (num_id==0 
    	|| num_id==1 || num_id==2 || num_id==3 
    	|| num_id==4 || num_id==5 || num_id==6 
    	|| num_id==7 || num_id==8 || num_id==9
    ) {
	result.value = result.value + num_id;
	if (!flag3 && !flag2) {//输入第一个数字
	    result1 = result.value;
	    flag1 = true;
	}
	else if (flag1 && flag2) {//输入第二个数字
	    result2 = result.value;
            if(result2 == 0) {
            	alert("输入非法");
                clear();
            }
	    else flag3 = true;
	}
    }
    //输入小数点
    else if (num_id == ".") {
        if (result.value.indexOf(".") != -1){//输入多个小数点，报错
	    alert("输入多个小数点！");
	    clear();
	}
        else
	    result.value = result.value + num_id;
        if (!flag3) result1 = result.value;//第一个数字
	else if (flag1 && flag2 && !flag3) result2 = result.value;//输入第二个数字
	}
    //输入为运算符号
    else if (num_id == "+" || num_id == "-" || num_id == "*" || num_id == "/" || num_id == "%") {
        if (!flag1 && !flag2 && !flag3) {//没有数字输入时，报错
	    alert("请先输入数字！");
	    clear();
	}
	else {
	    operator = num_id;//记录运算符
    	    result.value = null;//清空屏幕
    	    flag2 = true;
	}		
    }
    //输入为等号
    else if (num_id == "=") {
	//若表达式正确：输入数字+运算符+数字+“=”
	if (flag1 && flag2 && flag3) {
	    if (operator == "+") {
    	    result.value = parseFloat(result1) + parseFloat(result2);
    	}
    	else if (operator == "-") {
    	    result.value = parseFloat(result1) - parseFloat(result2)
    	}
    	else if (operator == "*") {
    	    result.value = parseFloat(result1) * parseFloat(result2)
    	}
    	else if (operator == "/") {
    	    result.value = parseFloat(result1) / parseFloat(result2)
    	}
    	else if (operator == "%") {
        	result.value = parseFloat(result1) % parseFloat(result2)
    	}
    	//将结果作为第一个数字，更新表达式状态
    	result1 = result.value;
    	result2 = null;
    	flag1 = true;
    	flag2 = false;
    	flag3 = false;
	}	
	else {
        	alert("等号输入错误！");
    	    clear();
	}
    }
    else if (num_id == "AC") {
        clear();	
    }
}