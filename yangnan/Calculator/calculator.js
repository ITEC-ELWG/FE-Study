function getValue(input) {
    output = document.getElementById("output"); //获取输出框
    if (input === "C") { //点击“C”则清除表达式
        output.value = "";
    } else if (input === "=") { //点击“=”则计算表达式
        output.value = eval(output.value);
        //output.value=calculate(output.value);
    } else if (isNaN(input) && (input !== ".")) {//实现可连续进行二则运算
        output.value = eval(output.value);
        output.value = output.value + input;
    } else { //点击其它则加入表达式
        output.value = output.value + input;
    }
}

/* //仅实现二元运算的加、减、乘、除功能
function calculate(expression){//解析表达式并计算
    //寻找运算符
    for (var i=0; i<expression.length; i++){
        char_i=expression.charAt(i);
        if (isNaN(char_i)&&(char_i!==".")){
            var operator= char_i;
            var index=i;
            break;
        }    
    }
    //确定变量
    var num1=parseFloat(expression.substring(0,index));
    var num2=parseFloat(expression.substring(index+1));
    //计算
    switch(operator){
        case "+":
            return  num1+num2;
            break;
        case "-":
            return  num1-num2;
            break;
        case "*":
            return  num1*num2;
            break;  
        case "/":
            return  num1/num2;
            break;            
    }
} */
