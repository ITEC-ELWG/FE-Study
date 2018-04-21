var num1 = 0;//操作数1
var num2 = 0;//操作数2
var num = 0;
var disp = document.getElementsByTagName("input")[0];
disp.value = "0";
var opeType = 0;//操作类型
var opePress = 0;//操作符是否按下
var dotPress = 0;//小数点是否按下

for (var i = 0; i < 10; i++) {
    document.getElementsByClassName("num")[i].onclick = function () {
        var data = this.innerHTML;
        if (opePress == 0) {
            if (disp.value == "0") {
                num = data;//屏幕中只有一个0，则重新显示
                disp.value = num;
            }
            else {
                num += data;
                disp.value = num;
            }
            num1 = num;
        }
        else {
            num += data; 
            num2 = num;//操作符按下，则显示的为操作数2
            disp.value += data;
        }
    }
}

document.getElementsByClassName("dot")[0].onclick = function () {
    if (dotPress == 0) {//判断小数点是否按下
        num += this.innerHTML;
        disp.value += this.innerHTML;
    }
    else return false;
    dotPress = 1;
}

/*求百分比*/
document.getElementsByClassName("percent")[0].onclick = function () {
    var result = Number(num1)/100;
    disp.value = String(result);
    num1 = disp.value;
}

/*全部清除*/
document.getElementsByClassName("clear")[0].onclick = function () {
    num1 = 0;
    num2 = 0;
    num = 0;
    disp.value = 0;
    opeType = 0;
    opePress = 0;
    dotPress = 0;
}

document.getElementsByClassName("add")[0].onclick = function () {
    if (opePress == 1) {
        if (num2 != "") calculate();
        else return false;
    }
    opeType = 1;
    opePress = 1;
    disp.value += this.innerHTML;
    dotPress = 0;
    num = "";
}

document.getElementsByClassName("sub")[0].onclick = function () {
    if (opePress == 1) {
        if (num2 != "") calculate();
        else return false;
    }
    opeType = 2;
    opePress = 1;
    disp.value += this.innerHTML;
    dotPress = 0;
    num = "";
}

document.getElementsByClassName("mul")[0].onclick = function () {
    if (opePress == 1) {
        if (num2 != "") calculate();
        else return false;
    }
    opeType = 3;
    opePress = 1; 
    disp.value += this.innerHTML;
    dotPress = 0;
    num = "";
}

document.getElementsByClassName("divid")[0].onclick = function () {
    if (opePress == 1) {
        if (num2 != "") calculate();
        else return false;
    }
    opeType = 4;
    opePress = 1;
    disp.value += this.innerHTML;
    dotPress = 0;
    num = "";
}

/*等号按下时进行计算*/
document.getElementsByClassName("equ")[0].onclick = function () {
    calculate();
}

function calculate() {
    if (!opePress) return false;
    var result;
    switch(opeType) {
		case 1:
		result = Number(num1)+Number(num2);
		break;
		case 2:
		result = Number(num1)-Number(num2);
		break;
		case 3:
		result = Number(num1)*Number(num2);
		break;
		case 4:
		result = Number(num1)/Number(num2);
		default:
		break;
    }
    disp.value = String(result); 
    opePress = 0;
    dotPress = 0;
    num1 = disp.value;
}