/*
计算器

功能：
1.点击“C”清空
2.可连续进行加、减、乘、除、取模二则运算（变量内不能有多个小数点，除数不为0）
3.特殊处理：
依次输入变量-运算符-等号，输出变量；
无左侧变量时，默认为0；
连续输入运算符时，用后一运算符替换前一运算符
连续输入等号-变量/小数点，重新开始一个表达式；连续输入等号-运算符，则继续计算
*/
var isWarned = false; //输入框内是否为警告信息
var isFinished = false; //输入框内是否为=计算的结果
var isDot = false; //当前数中是否有小数点

function getValue(input) {
    var last_input;
    output = document.getElementById("output"); //获取输出框
    if (isWarned === true) { //如果输入框内原本显示警告或=输出的结果，先清空
        output.value = "";
        isWarned = false;
    }

    if (input === "C") { //点击“C”则清除表达式
        output.value = "";
        isFinished = false;
        isDot = false;
    } else if (input === "=") { //点击“=”则计算表达式
        isFinished = true;
        isDot = false; //因为对于紧接着的数、小数点，该结果相当于空
        //output.value = eval(output.value);
        if (output.value !== "" && (isNaN(output.value))) { //对所有计算考虑表达式为空、数、左侧数及运算符、运算表达式4种情况
            last_input = output.value.charAt(output.value.length - 1);
            if (isNaN(last_input) && (last_input !== ".")) { //如果上一输入为运算符
                output.value = output.value.substring(0, output.value.length - 1);
            } else {
                output.value = calculate(output.value);
            }
        }
    } else if (isNaN(input) && (input !== ".")) { //点击运算符
        //output.value = eval(output.value);
        isFinished = false;
        isDot = false;
        if (output.value === "") { //如果表达式开始为运算符，默认左侧变量为0
            output.value = "0" + input;
        } else if (!isNaN(output.value)) { //如果当前表达式为一个数
            output.value = output.value + input;
        } else {
            last_input = output.value.charAt(output.value.length - 1);
            if (isNaN(last_input) && (last_input !== ".")) { //如果上一输入为运算符，替换为当前运算符
                output.value = output.value.substring(0, output.value.length - 1);
                output.value = output.value + input;
            } else {
                output.value = calculate(output.value);
                if (isWarned === false) {
                    output.value = output.value + input;
                }
            }
        }
    } else if (input === ".") { //点击小数点
        if (isFinished === true) { //如果输入框内为=的结果，重建表达式
            output.value = "";
        }
        if (isDot === false) {
            output.value = output.value + input;
            isDot = true;
        } else {
            output.value = "当前数不合法";
            isWarned = true;
            isDot = false;
        }
        isFinished = false;
    } else { //点击数字
        if (isFinished === true) {
            output.value = input;
        } else {
            output.value = output.value + input;
        }
        isFinished = false;
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
            isWarned = true;
            return "除数不能为0";
        } else return num1 / num2;
        break;
    case "%":
        if (num2 === 0) {
            isWarned = true;
            return "除数不能为0";
        } else return num1 % num2;
        break;
    }
}