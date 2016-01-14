/**
 * Created by JOYyuan on 16/1/14.
 */
window.onload =function(){
    var display_in = document.getElementById("display_in");//in
    var display_out = document.getElementById("display_out");//out
    var turn = document.getElementById("turn");//开关按键
    var equal = document.getElementById("equal");//等号按键
    var AC = document.getElementById("AC");//清零按键
    var del = document.getElementById("delete");//删除输入按键
    var add = document.getElementById("add");//+按键
    var minus = document.getElementById("minus");//-按键
    var times = document.getElementById("times");//*按键
    var divide = document.getElementById("divide");//除号按键
    var percent = document.getElementById("percent");//百分号
    var numberButton = document.getElementsByClassName("btn");//数字按键
    var buttons = document.getElementsByTagName("button");
    var cal = document.getElementsByClassName("cal");
    var str = "";//显示框中显示字符
    var operand1 = null;//保存输入的操作数1
    var operand2 = null;//保存输入的操作数2
    var operator = null;//保存输入的运算符
    var res = "";//输入操作数的框保存的字符

   display_in.value = str;
    display_out.vlaue = res;
    //开关功能
    var count =1;
    turn.onclick = function(){
        if(count%2 == 1){
            for(var i = 0;i < buttons.length;i++){
                if(i != 3)buttons[i].disabled = "true";
            }
        }
        else {
            for(var i = 0;i < buttons.length;i++){
                if(i != 3)buttons[i].disabled = null;
            }
        }
        display_out.value = "0";
        display_in.value = "";
        str = "";
        res = "0";
        operand1 = null;
        operator = null;
        operand2 = null;
        count++;
    }
    //DISPLAY  numbers
    for (var i = numberButton.length - 1; i >= 0; i--) {
        numberButton[i].onclick = function() {
            if(res.indexOf(".")!=-1 && this.innerHTML == ".")return;
            if(res == "" && this.innerHTML == ".") {
                res ="0.";
                display_out.value = res;
                return;
            }
            if (operand1 != null && operator == null) operand1 = null;
            res = res + this.innerHTML;
            display_out.value = res;
        }
    };



}