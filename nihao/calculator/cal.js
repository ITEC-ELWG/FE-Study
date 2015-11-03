var one = "1" ;
var two = '2' ;
var three = '3' ;
var four = '4' ;
var five = '5' ;
var six = '6' ;
var seven = '7' ;
var eight = '8' ;
var nine = '9' ;
var zero = '0' ;
var plus = ' + ' ;
var minus = ' - ' ;
var multiply = ' * ' ;
var divide = ' / ' ;
var point = '.' ;

function enter(obj,string){
	obj.expr.value += string;
}

function percent(obj){
	obj.expr.value = parseFloat(obj.expr.value)/100;
}

function compute(obj){
	//obj.expr.value = eval(obj.expr.value);
	var str = obj.expr.value;
	var array = str.split(' ');
	var number1 = parseFloat(array[0]);
	var number2 = parseFloat(array[2]);
	//obj.expr.value = number1/number2;
	
	if (str.indexOf("+") >=0){
  		obj.expr.value = number1+number2;
	}
	if (str.indexOf("-") >=0){
  		obj.expr.value = number1-number2;
	}
	if (str.indexOf("*") >=0){
  		obj.expr.value = number1*number2;
	}
	if (str.indexOf("/") >=0){
  		obj.expr.value = number1 / number2;
	}
}
