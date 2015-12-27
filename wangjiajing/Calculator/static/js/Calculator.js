var buttons = document.getElementsByClassName("button");
var input = document.getElementsByClassName("input");
var symbol = document.getElementsByClassName("symbol");
var equal = document.getElementsByClassName("equal");
var str = "";
var btnLen = buttons.length;
var inputLen = input[0].value.length;
var inputArr = new Array("", "");
var sign = "";
var sign2 = "";

//显示
//判断是否只有一个小数点
var adot = function() {
    for (var i = 0; i < input[0].value.length; i++) {
        if (input[0].value[i] == ".") {
            return true;
        }
    }
    return false;
}

//实现不在数字前面显示 0，如不会显示 0023这样的数字，即使输入 0023，也只显示 23
var link = function() {
    str += this.innerHTML.toString();
    var strLen = str.length;
    if (this.innerHTML == "." && adot()) {
        str = str.substring(0, strLen - 1);
        input[0].value = str;
    } else {
        for (var i = 0; i < strLen; i++) {
            if (str[i] == 0 && str[i + 1] >= 0 && str[i + 1] <= 9) {
                continue;
            } else {
                str = str.substring(i, strLen);
                input[0].value = str;
                return;
            }
        }
    }
}

var show = function() {
    for (var i = 0; i < btnLen; i++) {
        if (buttons[i].innerHTML >= 0 && buttons[i].innerHTML <= 9 || buttons[i].innerHTML == ".") {
            buttons[i].onclick = link;
        }
    }
}
show();

//清零
var clear = function() {
    input[0].value = 0;
    str = "";
    sign = "";
    sign2 = "";
    inputArr[0] = "";
    inputArr[1] = "";
}

var clearAct = function() {
    symbol[1].onclick = clear;
}
clearAct();

//百分比
var percent = function() {
    if (isNaN(input[0].value)) {
        alert("请输入一个数字！");
    } else {
        str = input[0].value * 100 + buttons[0].innerHTML;
        input[0].value = str;
    }
    str = "";
    sign = "";
    inputArr[0] = "";
    inputArr[1] = "";
}

var percentAct = function() {
    buttons[0].onclick = percent;
}
percentAct();

//不可以不输入数字就输入乘除号，但可以输入正负号，且一次计算两个数
for (var i = 2; i < 6; i++) {
    symbol[i].onclick = function() {
        if (str == "" && sign2 == "") {
            sign = this.innerHTML;
            if (inputArr[0] == "" && this.innerHTML == symbol[4].innerHTML) {
                input[0].value = "-";
                str = "-";
            } else if (inputArr[0] == "" && this.innerHTML == symbol[5].innerHTML) {
                input[0].value = "+";
                str = "+";
            } else if ((this.innerHTML == symbol[2].innerHTML || this.innerHTML == symbol[3].innerHTML) && inputArr[0] == "") {
                alert("请输入正确的表达式！");
            }
        } else if (str == "") {
            sign2 = this.innerHTML;
        } else if (sign == "" && sign2 == "") {
            inputArr[0] = input[0].value;

            if (inputArr[0] == "" && this.innerHTML == symbol[4].innerHTML) {
                input[0].value = "-";
                str = "-";
            } else if (inputArr[0] == "" && this.innerHTML == symbol[5].innerHTML) {
                input[0].value = "+";
                str = "+";
            } else if ((this.innerHTML == symbol[2].innerHTML || this.innerHTML == symbol[3].innerHTML) && inputArr[0] == "") {
                alert("请输入正确的表达式！");
            } else {
                sign = this.innerHTML;
                str = "";
            }
        } else {
            if (inputArr[0] == "") {
                inputArr[0] = input[0].value;

                if (inputArr[0] == "" && this.innerHTML == symbol[4].innerHTML) {
                    input[0].value = "-";
                    str = "-";
                } else if (inputArr[0] == "" && this.innerHTML == symbol[5].innerHTML) {
                    input[0].value = "+";
                    str = "+";
                } else if ((this.innerHTML == symbol[2].innerHTML || this.innerHTML == symbol[3].innerHTML) && inputArr[0] == "") {
                    alert("请输入正确的表达式！");
                } else {
                    sign = this.innerHTML;
                    str = "";
                }
            } else if (inputArr[1] == "") {
                inputArr[1] = input[0].value;

                if (inputArr[0] == "" && this.innerHTML == symbol[4].innerHTML) {
                    input[0].value = "-";
                    str = "-";
                } else if (inputArr[0] == "" && this.innerHTML == symbol[5].innerHTML) {
                    input[0].value = "+";
                    str = "+";
                } else if ((this.innerHTML == symbol[2].innerHTML || this.innerHTML == symbol[3].innerHTML) && inputArr[0] == "") {
                    alert("请输入正确的表达式！");
                } else {
                    sign2 = this.innerHTML;
                    str = "";
                }
                calculate();
            } else {
                inputArr[1] = input[0].value;

                if (inputArr[0] == "" && this.innerHTML == symbol[4].innerHTML) {
                    input[0].value = "-";
                    str = "-";
                } else if (inputArr[0] == "" && this.innerHTML == symbol[5].innerHTML) {
                    input[0].value = "+";
                    str = "+";
                } else if ((this.innerHTML == symbol[2].innerHTML || this.innerHTML == symbol[3].innerHTML) && inputArr[0] == "") {
                    alert("请输入正确的表达式！");
                } else {
                    sign = sign2;
                    sign2 = this.innerHTML;
                    str = "";
                }
                calculate();
            }
        }
    }
}

//两个数的基本运算
var calculate = function() {
    inputArr[1] = input[0].value;
    if (sign2 != "" && this.innerHTML == "=") {
        sign = sign2;
    }
    switch (sign) {
        case symbol[2].innerHTML:
            if (inputArr[1] == 0) {
                alert("除数不能为0！");
            } else {
                str = (inputArr[0] / inputArr[1]).toString();
            }
            break;
        case symbol[3].innerHTML:
            str = (inputArr[0] * inputArr[1]).toString();
            break;
        case symbol[4].innerHTML:
            str = (inputArr[0] - inputArr[1]).toString();
            break;
        case symbol[5].innerHTML:
            str = (parseFloat(inputArr[0]) + parseFloat(inputArr[1])).toString();
            break;
    }
    inputArr[0] = str;
    input[0].value = inputArr[0];
    str = "";
    sign = "";
    if (this.innerHTML == "=") {
        inputArr[1] = "";
        sign2 = "";

    }

}

var calculateAct = function() {
    equal[0].onclick = calculate;
}
calculateAct();
