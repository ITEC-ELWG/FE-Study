var inputs;
var values = new Array();
var type = new Array();
var equal;
var error_flag;
var i = 0;
var j = 0;

function initInputBtn(){
	inputs = document.getElementsByTagName("input");

	for (var k = 1; k < inputs.length; k++) {
		if (!(inputs[k].value == "AC" || inputs[k].value == "=")) {
			inputs[k].onclick = function(){
			input(this);
			};
		}	
	}
}

function initValue(){
	error_flag = false;
	values[i] = 0;
	type[i] = "num-input";
	i ++;
	inputs[0].value = 0;
}

function input(element){
	if (error_flag) {
		return;
	};

	values[i] = element.value;
	type[i] = element.className;

	if (i == 1) {
		if (type[i] == "num-input" && values[i-1] == 0) {
			values[i-1] = values[i];
			inputs[0].value = values[i];
			return;
		};
	};

	//检测是否连续输入运算符或小数点
	if (i > 0) {
		if ((type[i] == "operator-input" && type[i-1] == "operator-input") || 
			(type[i] == "dot-input" && type[i-1] == "dot-input")) {
			values[i-1] = values[i];
			values = values.del(i);
			type = type.del(i);
			inputs[0].value = '';
			for (var k = 0; k < values.length; k++) {
				inputs[0].value += values[k];
			};
			return;
		}else if (type[i] == "operator-input"){
			j++;
		}
	};

	if (j == 2) {
		values = values.del(i);
		type = type.del(i);
		getResult();
		values[1] = element.value;
		type[1] = element.className;
		j = 1;
	};

	if (element.value == "%") {
		getResult();
		return;
	};

	inputs[0].value += element.value;

	i ++;
}

function clearInput(){
	inputs[0].value = 0;
	values.length = 0;
	type.length = 0;
	values[0] = 0;
	type[0] = "num-input";
	i = 1;
	j = 0;
	error_flag = false;
}

function getResult(){
	var num1 = "";
	var num2 = "";
	var operator = "";
	var flag = true;
	var result;

	for (var i = 0; i < values.length; i++) {
		if (type[i] == "num-input" || type[i] == "dot-input") {
			if (flag) {
				num1 += values[i];
			} else{
				num2 += values[i];
			};	
		}

		if (type[i] == "operator-input") {
			operator = values[i];
			flag = false;
		}
	}

	result = calculate(num1,num2,operator);
	if (result === false) {
		return false;
	};

	inputs[0].value = result;
}

function calculate(num1, num2, operator){
	var result;

	if (operator == "") {
		return inputs[0].value;
	};

	if (num2 == "" && operator == "%") {
		var num1 = (is_int(num1) == true) ? parseInt(num1) : parseFloat(num1);
		result = num1/100;
	}else if(num2 == ""){
		error_flag = true;
		inputs[0].value = "error";
		return false;
	}else{
		var num1 = (is_int(num1) == true) ? parseInt(num1) : parseFloat(num1);
		var num2 = (is_int(num2) == true) ? parseInt(num2) : parseFloat(num2);

		switch(operator){
			case "+":
				result = num1+num2;
				break;
			case "X":
				result = num1*num2;
				break;
			case "/":
				if (num2 == 0) {
					error_flag = true;
					inputs[0].value = "error";
					return false;
				};
				result = num1/num2;
				break;
			case "%":
				result = num1%num2;
				break;
			case "-":
				result = num1-num2;
				break;
		}
	}

	//重新初始化
	values.length = 0;
	type.length = 0;
	values[0] = result;
	type[0] = "num-input";
	j = 0;
	i = 1;
	return result;
}

function is_int(num){
	if (parseInt(num) == num) {
		return true;
	} else{
		return false;
	}
}

Array.prototype.del=function(n) {　//n表示第几项，从0开始算起。
//prototype为对象原型，注意这里为对象增加自定义方法的方法。
　if(n<0)　//如果n<0，则不进行任何操作。
　　return this;
　else
　　return this.slice(0,n).concat(this.slice(n+1,this.length));
　　/*
　　　concat方法：返回一个新数组，这个新数组是由两个或更多数组组合而成的。
　　　　　　　　　这里就是返回this.slice(0,n)/this.slice(n+1,this.length)
　　 　　　　　　组成的新数组，这中间，刚好少了第n项。
　　　slice方法： 返回一个数组的一段，两个参数，分别指定开始和结束的位置。
　　*/
}

window.onload = function(){
	initInputBtn();
	initValue();
}