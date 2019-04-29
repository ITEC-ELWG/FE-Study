var sum = 0;
var a 
var Boo = false;
var ope;
var result;
window.onload = function() {
	result = document.getElementById('result');
}

function num(Num) {
	if (Boo) {
		result.value = Num;
		Boo = false;
	}else {
		if (result.value == '0') {
			result.value = Num;
		}else {
			result.value += Num;
		}
	}
}

function clean() {
	result.value = '0';
}

function dot() {
	if (result.value.indexOf('.') == -1) {
		result.value += '.';
	}
}
function percent() {
	if (Boo) {
		alert("error symbol");

	}else {
		if (result.value == '') {
		alert("error input");
	}else {
		result.value += '%';
	}
}
Boo = true;
}
function equal() {
	if (Boo) {
		alert("error symbol");

	}else {
		if (result.value == '') {
			alert("error input")
		}else {
			a = result.value;
			switch(ope) {
				case 1: if (a == '0') {
				alert("0 can't do divisor");break;
			}else {
				sum = parseFloat(sum) / parseFloat(a);break;
			}
			case 2: sum = parseFloat(sum) * parseFloat(a);break;
			case 3: sum = parseFloat(sum) + parseFloat(a);break;
			case 4: sum = parseFloat(sum) - parseFloat(a);break;
			}
			result.value = sum;
		}
	}
Boo = true;
}
function divide() {
	if (Boo) {
		alert("error symbol");
	}else {
		if (result.value == '') {
			alert("error input")
		}else {
			sum = result.value;
		}
	}
	ope = 1;
	Boo = true;
}
function multiply() {
	if (Boo) {
		alert("error symbol");
	}else {
		if (result.value == '') {
			alert("error input")
		}else {
			sum = result.value;
		}
	}
	ope = 2;
	Boo = true;
}
function plus() {
	if (Boo) {
		alert("error symbol");
	}else {
		if (result.value == '') {
			alert("error input")
		}else {
			sum = result.value;
		}
	}
	ope = 3;
	Boo = true;
}
function minus() {
	if (Boo) {
		alert("error symbol");
	}else {
		if (result.value == '') {
			alert("error input")
		}else {
			sum = result.value;
		}
	}
	ope = 4;
	Boo = true;
}