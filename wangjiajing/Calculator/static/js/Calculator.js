var buttons = document.getElementsByClassName("button");
var input = document.getElementsByClassName("input");
var symbol = document.getElementsByClassName("symbol");
var str = "";

//显示
var show = function() {
    var btnlen = buttons.length;
    for (var i = 0; i < btnlen; i++) {
        buttons[i].onclick = function() {
            str += this.innerHTML.toString();
            input[0].value = str;
        };
    };
};
show();

//清零
var clear = function() {
    symbol[1].onclick = function() {
        input[0].value = 0;
        str = "";
    };
};
clear();

//百分比
var percent = function() {
    buttons[0].onclick = function() {
    	if (isNaN(input[0].value)) {
    		alert("请输入一个数字！");
    	} else{
        str = input[0].value * 100 + buttons[0].innerHTML;
        input[0].value = str;
        str = "";
    }
    };
};
percent();

//基本运算
var calculate = function() {
    //var inputlen = input[0].value.length;
    var equal = document.getElementsByClassName("equal");

    equal[0].onclick = function() {
        for (var i = 1; i < input[0].value.length; i++) {
            var num1 = parseFloat(input[0].value.substring(0, i));
            var num2 = parseFloat(input[0].value.substring(i + 1, input[0].value.length));

            if ((input[0].value.substring(0, i) == symbol[2].innerHTML) || (input[0].value.substring(0, i) == symbol[3].innerHTML)) {
            	alert("请输入正确的表达式！");
            } else{
            switch (input[0].value[i]) {
                case symbol[2].innerHTML:
                    if (num2 == 0) {
                        alert("除数不能为0！");
                    } else {
                        str = (num1 / num2).toString();
                    }
                    break;
                case symbol[3].innerHTML:
                    str = (num1 * num2).toString();
                    break;
                case symbol[4].innerHTML:
                    str = (num1 - num2).toString();
                    break;
                case symbol[5].innerHTML:
                    str = (num1 + num2).toString();
                    break;
            }
        }
        }
        input[0].value = str;
        str = "";
    };
};
calculate();
