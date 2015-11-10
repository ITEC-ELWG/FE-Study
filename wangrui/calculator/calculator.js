var num1 = "", num2 = "", operator= "", result = "", lastoperator = "";
var txt = document.getElementById("show");
var isPercentage = false; //百分比转换
var isPressEqual = false; //纪录是否按下“＝”
var isInputnum = false; //纪录是否输入第二个数值

//百分制互换
function percentage() {
    if(isPercentage) {
        txt.value = Math.round(txt.value.substring(0,txt.value.length-1)*(1e21))/(1e19);
        //txt.value = (txt.value.substring(0,txt.value.length-1))*100;
        isPercentage = false;
        isPressEqual = true;
    }
    else {
        txt.value = Math.round(txt.value*(1e19))/(1e21) + "%";
        //txt.value = txt.value/100 + "%";
        isPercentage = true;
        isPressEqual = true;
    }
}
//强行重置
function reset() {
    txt.value = 0;
    operator = "";
    lastoperator = "";
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
    //输入数据百分号纪录清零
    isPercentage = false;

    //已经进行过计算且不连续运算时候清零
    if (isPressEqual && lastoperator == "") {
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
        isInputnum = true;
        txt.value = data;
        operator = "";
    }
    else {
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
    //已含小数点再输入无效
    else if (txt.value.indexOf('.')> -1) {
        txt.value = txt.value;
    }
    else {
        txt.value = txt.value + ".";
    }
}

//输入操作符
function Operate(sign) {
    if (num1 != "" && lastoperator != "" && isInputnum) {
        num2 = parseFloat(txt.value);
    }
    else {
        num1 = parseFloat(txt.value);
    }
    //第一种情况要连续运算 
    if (lastoperator != "" && num1 != "" && num2 != "") {
        // lastoperator = operator;
        switch(lastoperator) {
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
        txt.value = Math.round(result*(1e19))/(1e19);
        num1 = parseFloat(txt.value);
        num2 = "";
        isInputnum = false;
        operator = sign;
        lastoperator = operator;
    }
    //其他情况直接赋值给运算符号
    else {
        operator = sign;
        lastoperator = operator;
    }
}

//加减乘除计算
function count() {
    //第一种情况是没有输入操作符直接输入等号
    if (operator == "" && lastoperator == "") {
        txt.value = txt.value;
    }
    //第二种情况是等号将显示的字符串转换为第二个数值   
    else {
        num2 = parseFloat(txt.value);
        switch(lastoperator) {
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
       txt.value = Math.round(result*(1e19))/(1e19);
    }
    isPressEqual = true; 
    isInputnum = false;
    operator = "";
    lastoperator = "";
}

