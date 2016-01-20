window.onload = function () {
    var displayIn = document.getElementById('displayIn');
    var displayOut = document.getElementById('displayOut');//显示结果
    var equal = document.getElementById('equal');//等号按键
    var AC = document.getElementById('AC');//清零按键
    var del = document.getElementById('del');//删除输入按键
    var plus = document.getElementById('plus');//+按键
    var minus = document.getElementById('minus');//-按键
    var multiply = document.getElementById('multiply');//*按键
    var divide = document.getElementById('divide');//除号按键
    var percent = document.getElementById('percent');
    var point = document.getElementById('point');
    var turnOn = document.getElementById('on');
    var num = document.getElementsByClassName('btn_in num');//数字按键
    var buttons = document.getElementsByTagName('button');
    var cal = document.getElementsByClassName('btn_in cal');
    var str = "";//控制displayout的显示，输入的数字和最终结果
    var numA = null;//保存输入的操作数1
    var calMAKE = null;//保存输入的操作数2
    var numB = null;//保存输入的运算符
    var equation = "";//控制displayin的显示，控制算式的输出
    displayIn.value = str;
    displayOut.value = equation;
    turnOn.onclick = function () {
        displayOut.value = '0';
        displayIn.value = '';
        str = '';
        equation = '0';
        numA = null;
        calMAKE = null;
        numB = null;
    }
    del.onclick = function () {
        equation = equation.substr(0, equation.length - 1);
        displayOut.value = equation;
    }
    AC.onclick = function () {
        displayOut.value = '0';
        displayIn.value = '';
        str = '';
        equation = '0';
        numA = null;
        calMAKE = null;
        numB = null;
    }
    percent.onclick = function () {
        if (!isNaN(parseFloat(equation))) {
            equation = parseFloat(equation) / 100;
            equation = equation.toString();
            displayOut.value = equation;

        }
    }
    for (var i = num.length - 1; i >= 0; i--) {
        num[i].onclick = function () {
            if (equation.indexOf('.') != -1 && this.innerHTML == '.')return;
            if (equation == '' && this.innerHTML == '.') {
                equation = '0.';
                displayOut.value = equation;
                return;
            }
            if (numA != null && calMAKE == null) numA = null;
            equation = equation + this.innerHTML;
            displayOut.value = equation;
        }
    }
    ;
    //绑定运算符的点击事件
    for (var i = cal.length - 1; i >= 0; i--) {
        cal[i].onclick = function () {
            //事件一：numA,calMAKE,numB为空
            if (numA == null && calMAKE == null && numB == null) {
                numA = parseFloat(equation);
                calMAKE = this.innerHTML;
                str = equation + calMAKE;
                displayIn.value = str;
                equation = '';
            }
            //事件二：输入了numA,calMAKE,等待numB的输入，在displayIn中显示已输入的算式
            else if (numA != null && calMAKE != null && numB == null && isNaN(parseFloat(equation))) {
                equation = this.innerHTML;
                str = str.substr(0, str.length - 1) + calMAKE;
                displayIn.value = str;
            }
            else if (numA !=null && calMAKE!=null && numB == null){
                numB = parseFloat(equation);
                str = str + equation;
                switch (calMAKE){
                    case "+" : equation = numA + numB; break;
                    case "-" : equation = numA - numB; break;
                    case "*" : equation = numA * numB; break;
                    case "/" : equation = numA / numB; break;
                }
               displayOut.value = equation;
                calMAKE = this.innerHTML;
                str = str + calMAKE;
                displayIn.value = str;
                numA = equation;
                equation = "";
                numB = null;}
            else if (numA != null && calMAKE == null) {
                calMAKE = this.innerHTML;
                str = numA + calMAKE;
                displayIn.value = str;
                equation = '';
                numB = null;
            }
            isFirst = true;
        }
    }
    ;
    // 处理等号事件
    var isFirst = true;
    equal.onclick = function () {
        if (numA != null && calMAKE != null && numB == null && isNaN(parseFloat(equation))) {
            if (isFirst == true) var numMid = numA;
            switch (calMAKE) {
                case '+' :
                    equation = numA + numMid;
                    break;
                case '-' :
                    equation = numA - numMid;
                    break;
                case '*' :
                    equation = numA * numMid;
                    break;
                case '÷' :
                    equation = numA / numMid;
                    break;
            }
            displayOut.value = equation;
            numA = parseFloat(equation);
            numB = null;
            equation = '';
            isFirst = false;
        }
        else if (numA != null && calMAKE != null && numB == null) {
            numB = parseFloat(equation);
            switch (calMAKE) {
                case '+' :
                    equation = numA + numB;
                    break;
                case '-' :
                    equation = numA - numB;
                    break;
                case '*' :
                    equation = numA * numB;
                    break;
                case '÷' :
                    equation = numA / numB;
                    break;
            }
            displayOut.value = equation;
            numA = parseFloat(equation);
            equation = '';
            numB = null;
            calMAKE = null;
        }
        str = '';
        displayIn.value = '';
    }
}