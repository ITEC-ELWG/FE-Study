var inputs;
var values = new Array();
var type = new Array();
var equal;
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


function input(element){
	var result;
	if (element.className == "operator-input") {
		j ++;
		//如果检测到二次输入运算符，则获取运算结果
		if (j == 2) {
			result = getResult();
			if (result == false) {
				return;
			};
			j = 1;
		};
	};


	values[i] = element.value;
	type[i] = element.className;
	inputs[0].value += element.value;

	if (element.value == "%") {
		result = getResult();
		if (result == false) {
				return;
		};
	};

	i ++;

}

function clearInput(){
	inputs[0].value = "";
	values.length = 0;
	type.length = 0;
	i = 0;
	j = 0;
}

function getResult(){
	var num1 = "";
	var num2 = "";
	var operator;
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
	if (result == false) {
		return false;
	};

	inputs[0].value = result;
}

function calculate(num1, num2, operator){
	var result;
	if (num1 == "") {
		alert('wrong input');
		clearInput();
		return false;
	};

	if (num2 == "" && operator == "%") {
		var num1 = (is_int(num1) == true) ? parseInt(num1) : parseFloat(num1);
		result = num1/100;
	}else if(num2 == ""){
		alert('wrong input');
		clearInput();
		return false;
		// window.location.reload();
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
					alert('wrong input');
					clearInput();
					return false;
					// window.location.reload();
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
	return result;
}

function is_int(num){
	if (parseInt(num) == num) {
		return true;
	} else{
		return false;
	}
}

window.onload = initInputBtn;