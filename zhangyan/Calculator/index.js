function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout('startTime()', 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
var OPERATE_STATE_INPUT = 0;
var OPERATE_STATE_CALCULATE = 1;
/*像operate、calcul、quit这类标志性的变量，用0或1等数字会让可读性变差，
像C++一样定义一些常量（JS中没有常量，只能用人为约束的不去修改的变量来模拟）*/
var num = 0,
    result = 0,
    numshow = "0";
var operate = OPERATE_STATE_INPUT; //判断输入状态的标志
var calcul = OPERATE_STATE_INPUT; //判断计算状态的标志
var quit = OPERATE_STATE_INPUT; //防止重复按键的标志
var screen_var = document.calculator.numScreen;
/*JS代码中对document.calculator.numScreen进行了很多次引用，
如果后面对numScreen换了名字，后面各处代码都要一一修改，建议在最前面用一个变量去引用*/
function command(num) {
    var str = String(screen_var.value); //获得当前显示数据
    str = (str != "0") ? ((operate == OPERATE_STATE_INPUT) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
    str = str + String(num); //给当前值追加字符
    screen_var.value = str; //刷新显示
    operate = OPERATE_STATE_INPUT; //重置输入状态
    quit = OPERATE_STATE_INPUT; //重置防止重复按键的标志
}

function dzero() {
    var str = String(screen_var.value);
    str = (str != "0") ? ((operate == 0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0";
    screen_var.value = str;
    operate = OPERATE_STATE_INPUT;
}

function dot() {
    var str = String(screen_var.value);
    str = (str != "0") ? ((operate == OPERATE_STATE_INPUT) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入
    }
    str = str + ".";
    screen_var.value = str;
    operate = OPERATE_STATE_INPUT;
}

function del() { //退格
    var str = String(screen_var.value);
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    screen_var.value = str;
}

function clearscreen() { //清除数据
    num = 0;
    result = 0;
    numshow = "0";
    calcul = OPERATE_STATE_INPUT;
    quit = OPERATE_STATE_INPUT;
    screen_var.value = "0";
}

function plus() { //加法
    calculate(); //调用计算函数
    operate = OPERATE_STATE_CALCULATE; //更改输入状态
    calcul = 1; //更改计算状态为加
}

function minus() { //减法
    calculate();
    operate = OPERATE_STATE_CALCULATE;
    calcul = 2;
}

function times() { //乘法
    calculate();
    operate = OPERATE_STATE_CALCULATE;
    calcul = 3;
}

function divide() { //除法
    calculate();
    operate = OPERATE_STATE_CALCULATE;
    calcul = 4;
}

function persent() { //求百分数
    numshow = Number(screen_var.value);
    result = numshow * 0.01;
    umshow = String(result);
    screen_var.value = String(numshow * 0.01);
    num = result; //存储当前值
    quit = OPERATE_STATE_CALCULATE;
}

function equal() {
    calculate(); //等于
    operate = OPERATE_STATE_CALCULATE;
    num = 0;
    result = 0;
    numshow = "0";
}

function calculate() {
    numshow = Number(screen_var.value);
    if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态
        switch (calcul) { //判断要输入状态
            case 1:
                result = num + numshow;
                break; //计算"+" 
            case 2:
                result = num - numshow;
                break; //计算"-"
            case 3:
                result = num * numshow;
                break;
            case 4:
                if (numshow != 0) {
                    result = num / numshow;
                } else {
                    screen_var.value = "除数不能为零";
                    return;
                }
                break;
        }
        quit = OPERATE_STATE_CALCULATE; //避免重复按键
    } else {
        result = numshow;
    }
    numshow = String(result);
    screen_var.value = numshow;
    num = result; //存储当前值
    calcul = OPERATE_STATE_INPUT;
}