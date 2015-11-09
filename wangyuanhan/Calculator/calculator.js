/*
	网页版简易计算器

	By 王远涵
	At 2015/11/4
*/

var calI = 0;	// 输入
var calO = 0;	// 输出
var oper = 0;	// 操作符
var num1 = 0;	// 第一个操作数
var num2 = 0;	// 第二个操作数

var dot   = false;	// 小数点
var res   = false;	// 新一轮操作
var sign  = false;	// 正负
var operr = false;	// 是否有操作符按下

var x = document.getElementById("screen");

// 清零
function calClear() {

	x.value = "0";
	oper = 0;
	num1 = 0;
	num2 = 0;
	dot = false;
	res = false;
	sign = false;
}

// 清除
function calDelete() {

	if(oper == 0) {

		var str = x.value;
		x.value = str.substring(0, str.length - 1);

		if(str.charAt(str.length - 1) == '.') dot = false;
	}
}

// 小数点
function calDot() {

	if(dot == false || x.value == 0) {

		x.value += ".";
		dot = true;
	}
	else x.value = x.value;
}

// 输出结果
function calResult() {

	num2 = parseFloat(x.value);

	switch(oper) {

		case 1: calO = num1 + num2; break;
		case 2: calO = num1 - num2; break;
		case 3: calO = num1 * num2; break;
		case 4: calO = num1 / num2; break;
	}

	oper = 0;
	dot = true;
	res = true;

	x.value = String(Math.round(calO * 100000000000) / 100000000000);
}

// 除
function calDiv() {

	calCon();

	oper = 4;
	dot = false;
}

// 乘
function calMul() {

	calCon();

	oper = 3;
	dot = false;
}

// 减
function calSub() {

	calCon();

	oper = 2;
	dot = false;
}

// 加
function calAdd() {

	calCon();

	oper = 1;
	dot = false;
}

// 百分
function calPer() {

	if(oper == 0) x.value = String(Math.round(parseFloat(x.value) * 10000000000) / 1000000000000);
}

// 数字
function calNumber(calI) {

	if((x.value === "0" && dot == false) || operr == true || res == true) {

		x.value = String(calI);
		res = false;
		dot = false;
		operr = false
	}
	else x.value += String(calI);
}

// 负数
function calSign() {

	var str = x.value;
	var minus = "-";

	if(x.value != "+" && x.value != "-" && x.value != "×" && x.value != "÷") {

		if(sign == false) {

			x.value = minus.concat(str);
			sign = true;
		}
		else if(sign == true) {

			x.value = str.substring(1);
			sign = false;
		}
	}
}

function calCon() {

	if(oper == 0) {
		num1 = parseFloat(x.value);
	}
	else if(operr == false) {

		switch(oper) {

			case 1: num1 += parseFloat(x.value); break;
			case 2: num1 -= parseFloat(x.value); break;
			case 3: num1 *= parseFloat(x.value); break;
			case 4: num1 /= parseFloat(x.value); break;
		}

		x.value = Math.round(num1 * 10000000000) / 10000000000; 
	}

	operr = true;
}