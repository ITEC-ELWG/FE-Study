
var num1=" ";
var num2=" ";
var numtemp=" ";
var sym = " ";
var symtemp = " ";
var expression=" ";

window.onload = function(){
for (var i=0;i<2;i++)
{
  document.getElementsByClassName("button")[i].onclick=function(){
   var data = this.value;
   var result = document.getElementById("result");
   switch(data){
  case "AC":
    result.value=" ";
    num1=" ";
    num2=" ";
    numtemp=" ";
    sym = " ";
    expression=" ";
     break;
  case "%":
   if(num1!=" "&&sym==" ")
 {
   num1=num1/100;
   result.value = num1;
   expression =num1;
   numtemp=num1;
 }
   break;
   default:break;
 }
 };
}

for(var i=2;i<18;i++)
{
   document.getElementsByClassName("button")[i].onclick=function(){
   var data = this.value;
   var result = document.getElementById("result");
    switch(data){
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":numtemp+=data;
    expression+=data; 
    if(sym==" "){
     num1 = numtemp;
   }
    else{
     num2 = numtemp;
    }   
     result.value = expression;
     break;
    case ".":
      if(numtemp.indexOf(".")==-1)
    {   
    numtemp+=data;
    expression+=data;
    if(sym==" ")
    {
    num1=numtemp;
    }
    else
    {
    num2=numtemp;
    }
    result.value=expression;
    }
    break;
    case "+":
    case "-":
    case "*":
    case "/":

    if(sym!=" ")
    {
      calculate1();
    }
    sym = data ;
    numtemp =" ";
    expression += data;
    result.value=expression;
   
    break;
    case "=":
    calculate();
    break;
    default:break;
    
   }
 };
}
//连续按下计算符号计算方式（显示两个操作数的结果）
function calculate1(){
   if (expression.indexOf("./")!=-1||expression.indexOf("/.")!=-1||expression.indexOf(".+")!=-1||expression.indexOf("+.")!=-1||expression.indexOf(".-")!=-1||expression.indexOf("-.")!=-1||expression.indexOf(".*")!=-1||expression.indexOf("*.")!=-1
    ||expression.indexOf("+-")!=-1||expression.indexOf("-+")!=-1||expression.indexOf("+*")!=-1||expression.indexOf("*+")!=-1||expression.indexOf("+/")!=-1||expression.indexOf("/+")!=-1
    ||expression.indexOf("-*")!=-1||expression.indexOf("*-")!=-1||expression.indexOf("-/")!=-1||expression.indexOf("/-")!=-1
    ||expression.indexOf("*/")!=-1||expression.indexOf("/*")!=-1)
   {
      result.value=" ";
     num1=" ";
     num2=" ";
      numtemp=" ";
      sym = " ";
    expression=" ";
   }
 
 var data1 = Number(num1);
 var data2 = Number(num2);
 switch(sym){
 case "+":result.value=data1+data2;break;
 case "-":result.value=data1-data2;break; 
 case "*":result.value=data1*data2;break;
 case "/":result.value=data1/data2;break;
 default:break;}
 sym=" ";
 num1=result.value;
 num2=" ";
 numtemp = " ";
 expression = num1;
 }
//等号按下的计算方式（显示最后结果，再次按下归0）
function calculate(){
   result.value = eval(expression);
   sym=" ";
   num1=result.value;
   num2=" ";
   numtemp = " ";
   expression = " ";
   }
}