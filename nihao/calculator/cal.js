var one = "1" 
var two = '2' 
var three = '3' 
var four = '4' 
var five = '5' 
var six = '6' 
var seven = '7' 
var eight = '8' 
var nine = '9' 
var zero = '0' 
var plus = '+' 
var minus = '-' 
var multiply = '*' 
var divide = '/' 
var point = '.' 

function compute(obj){
	obj.expr.value = eval(obj.expr.value)
}

function enter(obj,string){
	obj.expr.value += string
}

function percent(obj){
	obj.expr.value = eval(obj.expr.value+'/100')
}