/*
	网页版简易计算器

	By 王远涵
	At 2015/11/4
*/

var calI = 0;	// 输入
var calO = 0;	// 输出
var dot  = 0;	// 小数点
var oper = 0;	// 操作符
var num1 = 0;	// 第一个操作数
var num2 = 0;	// 第二个操作数
var res  = 0; 	// 新一轮操作
var sign = 0;	// 正负

function cal(calI) {

	var x = document.getElementById("screen");

	if(calI == -2) 		calClear();		// 清零
	else if(calI == -1) calDelete();	// 清除
	else if(calI == 10) calDot();		// 小数点
	else if(calI == 11) calResult();	// 输出结果
	else if(calI == 12) calDiv();		// 除
	else if(calI == 13) calMul();		// 乘
	else if(calI == 14) calSub();		// 减
	else if(calI == 15) calAdd();		// 加
	else if(calI == 16) calPer();		// 百分
	else if(calI == 17) calSign();		// 负数
	else 				calNumber();	// 数字

	// 函数部分

	function calClear() {

		x.value = "0";
		dot = 0;
		oper = 0;
		num1 = 0;
		num2 = 0;
	}

	function calDelete() {

		if(oper == 0) {

			var str = x.value;
			x.value = str.substring(0, str.length - 1);

			if(str.charAt(str.length - 1) == '.') dot = 0;
		}
	}

	function calDot() {

		if(dot == 0 || x.value == 0) {

			x.value += ".";
			dot = 1;
		}
		else x.value = x.value;
	}

	function calResult() {

		num2 = parseFloat(x.value);

		switch(oper) {

			case 1: calO = num1 + num2; break;
			case 2: calO = num1 - num2; break;
			case 3: calO = num1 * num2; break;
			case 4: calO = num1 / num2; break;
		}

		dot = 1;
		res = 1;
		oper = 0;

		x.value = String(Math.round(calO * 100000000000) / 100000000000);
	}

	function calDiv() {

		calCon();

		x.value = "÷";
		dot = 0;
		oper = 4;
	}

	function calMul() {

		calCon();

		x.value = "×";
		dot = 0;
		oper = 3;
	}

	function calSub() {

		calCon();

		x.value = "-";
		dot = 0;
		oper = 2;
	}

	function calAdd() {

		calCon();

		x.value = "+";
		dot = 0;
		oper = 1;
	}

	function calPer() {

		if(oper == 0) x.value = String(Math.round(parseFloat(x.value) * 10000000000) / 1000000000000);
	}

	function calNumber() {

		if((x.value == 0 && dot == 0) || x.value == "+" || x.value == "-" || x.value == "×" || x.value == "÷" || res == 1) {

			x.value = String(calI);
			res = 0;
			dot = 0;
		}
		else x.value += String(calI);
	}

	function calSign() {

		var str = x.value;
		var minus = "-";

		if(x.value != "+" && x.value != "-" && x.value != "×" && x.value != "÷") {

			if(sign == 0) {

				x.value = minus.concat(str);
				sign = 1;
			}
			else if(sign == 1) {

				x.value = str.substring(1);
				sign = 0;
			}
		}
	}

	function calCon() {

		if(oper == 0) {
			num1 = parseFloat(x.value);
		}
		else if(x.value == "+" || x.value == "-" || x.value == "×" || x.value == "÷") {
			
		}
		else {

			switch(oper) {

				case 1: num1 += parseFloat(x.value); break;
				case 2: num1 -= parseFloat(x.value); break;
				case 3: num1 *= parseFloat(x.value); break;
				case 4: num1 /= parseFloat(x.value); break;
			}
		}
	}
}