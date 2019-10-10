window.onload = function(){

    var num1 = null;
    var operator = null;
    var operator_flag = false;
    var equal = 0;
    var disp = document.getElementsByClassName("display-box")[0];

    // 加减乘除
    document.getElementsByClassName("add")[0].onclick = function(){
        operator_flag = true;
        calculate();
        operator = 1;
    }
    document.getElementsByClassName("sub")[0].onclick = function(){
        operator_flag = true;
        calculate();
        operator = 2;
    }
    document.getElementsByClassName("multi")[0].onclick = function(){
        operator_flag = true;
        calculate();
        operator = 3;
    }
    document.getElementsByClassName("divide")[0].onclick = function(){
        operator_flag = true;
        calculate();
        operator = 4;
    }

    document.getElementsByClassName("percent")[0].onclick = function(){
        disp.value = Number(disp.value)/100;
    }

    // 数字按键
    for(var i = 0; i < 10; i ++){
        document.getElementsByClassName("num")[i].onclick = function(){
            if(operator_flag == true || equal == 1){
                // num1 = disp.value;
                disp.value = this.innerHTML;
                operator_flag = false;
                equal = 0;
            } else { 
                disp.value = disp.value + this.innerHTML;
            }
        }
    }

    //小数点
    document.getElementsByClassName("dot")[0].onclick = function () {
        if (checkdot()) {
            if (disp.value == "") {
                disp.value = "0" + ".";
            }
            else {
                disp.value = disp.value + ".";
            }
        }
        else {
            return false;
        }
    }
    function checkdot () {
        for(var i=0; i <= disp.value.length; i++) {
            if(disp.value.substr(i, 1) == ".") 
                return false;  
        }
        return true;
    }

    // 清屏
    document.getElementsByClassName("clear")[0].onclick = function(){
        num1 = null;
        operator = null;
        operator_flag = false;
        equal = 0;
        res = '';
        disp.value = null;
    }

    // 计算
    function calculate(){
        if(operator == null){
            num1 = disp.value;
        }
        if(num1 != null){
            switch(operator){
                case 1:
                    num1 = Number(num1) + Number(disp.value);
                    break;
                case 2:
                    num1 = Number(num1) - Number(disp.value);
                    break;
                case 3:
                    num1 = Number(num1) * Number(disp.value);
                    break;
                case 4:
                    if(Number(disp.value) == 0){
                        disp.value = "Error!";
                        break;
                    }else{
                        num1 = Number(num1) / Number(disp.value);
                        break;
                    }  
            }
            disp.value = String(num1);
            operator = null;
        }
        
    }
    document.getElementsByClassName("equal")[0].onclick = function(){
        equal = 1;
        calculate();
        num1 = 0;
    }
}