calculator = new Object();
calculator.isWarned = false; //输出是否为警告信息   
calculator.isFinished = false; //输出是否为=计算的结果    
calculator.isDot = false; //当前数中是否有小数点       
calculator.output = document.getElementById("output"); //获取输出框 

//NUM_OPTR：左侧数及运算符；EXP：二元运算表达式
expState = {
    NULL = 0,
    NUM = 1,
    NUM_OPTR = 2,
    EXP = 3
};

//计算器面板点击事件的响应函数
function getValue(input) {
    clearIfWarned(); //如果上一输出为警告，先清空
    switch (input) {
    case "C":
        clear();
        break;
    case "=":
        equalClicked();
        break;
    case ".":
        dotClicked();
        break;
    default:
        if (!isNaN(input)) { //输入为数字
            numClicked(input);
        } else { //输入为运算符
            operatorClicked(input);
        }
    }
}

//如果上一输出为警告，先清空
function clearIfWarned() {
    if (calculator.isWarned === true) {
        calculator.output.value = "";
        calculator.isWarned = false;
    }
}

//“C”点击事件的响应函数
//清空输出，并重置flags。
function clear() {
    calculator.output.value = "";
    calculator.isFinished = false;
    calculator.isDot = false;
}

//"="点击事件的响应函数
//重置flags，并根据表达式的状态分别处理
function equalClicked() {
    calculator.isFinished = true;
    var expression = calculator.output.value;
    var state = judgeState(expression);
    if (state === expState.NUM_OPTR) { //若为左侧数及运算符，结果为左侧数
        calculator.output.value = expression.substring(0, expression.length - 1);
    } else if (state === expState.EXP) { //若为二元运算表达式，则计算
        calculator.output.value = calculate(expression); 
    }
}

//"."点击事件的响应函数
function dotClicked() {
    if (calculator.isFinished === true) { //如果上一输出为=计算的结果，重建表达式
        calculator.output.value = ".";
        calculator.isFinished = false;
        calculator.isDot = true;
    } else {
        if (calculator.isDot === false) {
            calculator.output.value = calculator.output.value + ".";
            calculator.isDot = true;
        } else {
            calculator.output.value = "当前数不合法";
            calculator.isWarned = true;
            calculator.isDot = false;
        }
    }
}

//数字点击事件的响应函数
function numClicked(input) {
    if (calculator.isFinished === true) {
        calculator.output.value = input;
        calculator.isFinished = false;
        calculator.isDot = false;
    } else {
        calculator.output.value = calculator.output.value + input;
    }
}

//运算符点击事件的响应函数
function operatorClicked(input) {
    //calculator.output.value = eval(calculator.output.value);
    calculator.isFinished = false;
    calculator.isDot = false;
    var expression = calculator.output.value;
    var state = judgeState(expression);
    switch (state) {
    case expState.NULL:
        calculator.output.value = "0" + input; //默认左侧变量为0
        break;
    case expState.NUM:
        calculator.output.value = expression + input;
        break;
    case expState.NUM_OPTR:
        //替换为当前运算符
        calculator.output.value = expression.substring(0, expression.length - 1) + input;
        break;
    case expState.EXP:
        calculator.output.value = calculate(expression);
        if (calculator.isWarned === false) {
            calculator.output.value = calculator.output.value + input;
        }
        break；
    }
}

//判断当前表达式的状态（空、数字、左侧数及运算符、二元运算表达式）
function judgeState(expression) {
    if (expression === "") {
        return expState.NULL;
    } else if (!isNaN(expression)) {
        return expState.NUM;
    } else {
        var last_input = expression.charAt(expression.length - 1);
        if (isNaN(last_input) && (last_input !== ".")) { //上一输入为运算符
            return expState.NUM_OPTR;
        } else {
            return expState.EXP;
        }
    }
}

//仅实现二元运算的加、减、乘、除功能
function calculate(expression) { //解析表达式并计算
    //寻找运算符
    for (var i = 0; i < expression.length; i++) {
        var char_i = expression.charAt(i);
        if (isNaN(char_i) && (char_i !== ".")) {
            var operator = char_i;
            var index = i;
            break;
        }
    }
    //确定变量
    var num1 = parseFloat(expression.substring(0, index));
    var num2 = parseFloat(expression.substring(index + 1));
    //计算
    switch (operator) {
    case "+":
        return num1 + num2;
        break;
    case "-":
        return num1 - num2;
        break;
    case "*":
        return num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            calculator.isWarned = true;
            return "除数不能为0";
        } else return num1 / num2;
        break;
    case "%":
        if (num2 === 0) {
            calculator.isWarned = true;
            return "除数不能为0";
        } else return num1 % num2;
        break;
    }
}