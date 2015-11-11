var num1 = 0;
var num2 = 0;
var disp = document.getElementsByClassName("disp-block")[0];
var calPress = 0;//如果有运算符被按下
var calType = 0;//计算符+-*/
var quit = 0;//防止重复按键

for (var i = 0; i < 10; i++) {
    document.getElementsByClassName("num")[i].onclick = function () {
        if (disp.value == "0" || disp.value == ""|| quit == 1) {//如果屏幕中只有一个0，或有计算符号被按下，则屏幕重新显示
            disp.value = this.innerHTML;
            quit = 0;
        }
        else {//否则，屏幕中的字符串继续
            disp.value = disp.value + this.innerHTML;
        }
    }
}

document.getElementsByClassName("dot")[0].onclick = function () {//按下小数点
    if (checkdot()) {
        if (disp.value == "") {
            disp.value = "0" + ".";//如果屏幕上什么字符都没有，则在左侧自动补一个0
        }
        else {
            disp.value = disp.value + ".";
        }
    }
    else {
        return false;//否则直接返回false，不做任何其他处理
    }
}

document.getElementsByClassName("clear")[0].onclick = function () {//全部初始化
    num1 = 0;
    num2 = 0;
    num1 = 0;
    disp.value = 0;
    calPress = 0;
    calType = 0;
}

document.getElementsByClassName("add")[0].onclick = function () {
    calculator();
    calType = 1;
    calPress = 1;
}

document.getElementsByClassName("sub")[0].onclick = function () {
    calculator();
    calType = 2;
    calPress = 1;
}

document.getElementsByClassName("mul")[0].onclick = function () {
    calculator();
    calType = 3;
    calPress = 1;
}

document.getElementsByClassName("divid")[0].onclick = function () {
    calculator();
    calType = 4;
    calPress = 1;
}

document.getElementsByClassName("percent")[0].onclick = function () {
    if (calPress == 0) {
        disp.value = String(Number(disp.value) / 100);
    }
    else {
        return false;
    }
}

document.getElementsByClassName("equ")[0].onclick = function () {
    calculator();
    calType = 0;
    num1 = 0;


}

function calculator() {
    dotPress = 0;
    if (calType == 0) {
        num1 = Number(disp.value);
    }
    else if (quit == 0) {//第二次进入此函数时，执行上一次操作
        switch(calType) {
            case 1:
                num1 = num1 + Number(disp.value);
                break;
            case 2:
                num1 = num1 - Number(disp.value);
                break;
            case 3:
                num1 = num1 * Number(disp.value);
                break;
            case 4: {
                    if (Number(disp.value) == 0) {
                        disp.value = String(num1);
                        document.getElementsByClassName("messege")[0].innerHTML = "被除数不能为0";
                        setTimeout("document.getElementsByClassName('messege')[0].innerHTML = ''",3000);
                    }
                    else {
                        num1 = num1 / Number(disp.value);
                    }
                }
                break;
        }
        disp.value = String(num1);    }
    quit = 1;
}

function checkdot () {
    for(var i=0; i <= disp.value.length; i++) {//判断是否已经有一个点号
        if(disp.value.substr(i, 1) == ".") 
            return false;   //如果有则不再插入
    }
    return true;
}