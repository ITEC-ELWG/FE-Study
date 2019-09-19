window.onload = function(){

    num1 = null;
    var num2 = null;
    var operator = null;
    var resvar = '';
    var state = 0;
    var disp = document.getElementsByClassName("display-box")[0];

    // 加减乘除
    document.getElementsByClassName("add")[0].onclick = function(){
        operator = 1;
    }
    document.getElementsByClassName("sub")[0].onclick = function(){
        operator = 2;
    }
    document.getElementsByClassName("multi")[0].onclick = function(){
        operator = 3;
    }
    document.getElementsByClassName("divide")[0].onclick = function(){
        operator = 4;
    }

    document.getElementsByClassName("percent")[0].onclick = function(){
        disp.value = Number(disp.value)/100;
    }

    // 数字按键
    for(var i = 0; i < 11; i ++){
        document.getElementsByClassName("num")[i].onclick = function(){
            if(operator == null){
                disp.value = disp.value + this.innerHTML;
                num1 = disp.value;
            } else{
                if(state==0){
                    disp.value = this.innerHTML;
                    num2 = disp.value;
                    state++;
                } else if(state >= 1){
                    disp.value = disp.value + this.innerHTML;
                    num2 = disp.value;
                }
            }
        }
    }

    // 清屏
    document.getElementsByClassName("clear")[0].onclick = function(){
        num1 = null;
        num2 = null;
        operator = null;
        res = '';
        state = 0;
        disp.value = null;
    }

    // 计算
    document.getElementsByClassName("equal")[0].onclick = function(){
        switch(operator){
            case 1:
                res = Number(num1) + Number(num2);
                disp.value = res;
                break;
            case 2:
                res = Number(num1) - Number(num2);
                disp.value = res;
                break;
            case 3:
                res = Number(num1) * Number(num2);
                disp.value = res;
                break;
            case 4:
                if(Number(num2) == 0){
                    disp.value = "Error!";
                    break;
                }else{
                    res = Number(num1) / Number(num2);
                    disp.value = res;
                    break;
                }  
        }
    }
}