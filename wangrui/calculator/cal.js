var num1 = "", num2 = "", operator= "", result = "", lastoperator = "";
var txt = document.getElementById("show");
var isPercentage = false; //百分比转换
var isPressEqual = false; //纪录是否按下“＝”

//百分制互换
function percentage() {
    if(isPercentage) {
        txt.value = Math.round(txt.value.substring(0,txt.value.length-1)*(1e19))/(1e17);
        //txt.value = (txt.value.substring(0,txt.value.length-1))*100;
        isPercentage = false;
        isPressEqual = true;
    }
    else {
        txt.value = (Math.round(txt.value*(1e17))/(1e19)) + "%";
        // txt.value = txt.value/100 + "%";
        isPercentage = true;
        isPressEqual = true;
    }
}

//强行重置
function reset() {
    txt.value = "";
    operator = "";
    num1 = "";
    num2 = "";
    isPercentage = false;
    isPressEqual = false;
    isPressOperator = false;
}

//只针对显示屏上数字退格
function withdraw() {
    txt.value = txt.value.substring(0,txt.value.length-1);
}

//输入数据及情形判断
function inputNum(data) {
    var txt = document.getElementById("show");
//一旦输入数据之前的百分号清零
    isPercentage = false;
//已经进行过计算则清空方框重新计算
    if (isPressEqual) {
        txt.value = "";
        isPressEqual = false;
    }
//初始输入连续为0显示一个
    if (txt.innerHTML == "0") {
        if (data == "0") {
            txt.value == "0";
        }
    }
//若已有运算符号则重新记录输入的数值
    if (operator != "") {
        txt.value = data;
        operator = "";
    }
    else{
//输入一个0之后变为输入的数值
        if (txt.value == "0") {
            txt.value = data;
        }
        else
            txt.value += data;
    }
}

//输入小数点且重复输入无效
function inputDot() {
    if (isPressEqual) {
        txt.value = ".";
        isPressEqual = false;
    }
//连续输入小数点原显示值不变
    else if (txt.value.indexOf('.') > -1) {
        txt.value = txt.value;
    }
    else
        txt.value = txt.value + ".";
}

//输入操作符
function Operate(sign) {
//不允许连续输入运算符
    if (operator != "") {
        txt.value = "error";
        operator = "";
    }
//运算符按键将字符串转换为第一个数值
    else {
        num1 = parseFloat(txt.value);
        operator = sign;
        lastoperator = operator;
    }

}

//加减乘除计算
function count() {
//第一种情况是没有输入操作符直接输入等号
    if (lastoperator == "") {
        txt.value = txt.value;
    }
//第二种情况是等号将显示的字符串转换为第二个数值   
    else {
        num2 = parseFloat(txt.value);
        switch(lastoperator){
            case '+':
            result = num1+num2;break;
            case '-':
            result = num1-num2;break;
            case '*':
            result = num1*num2;break;
            case '/':
            result = num1/num2;break;
            default:
            break;
        }
        if (num2 == "0" && lastoperator == "/") {
            txt.value = "error";
        }
        else
            // txt.value = Math.round(result*(1e18))/(1e18);
            txt.value = result;
    }
    isPressEqual = true; 
    operator = "";
    lastoperator = "";
}

