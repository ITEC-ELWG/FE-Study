/*
	说明：基本都是按照window的计算器显示的，比如输入：1 + =， 输出2（自动补全第二个数为1），
可以连续等于输出结果，可以修改数字，运算符号，清零等，以及用户各种可能的输入，都基本有考虑。
*/

var currentNum = "";
var finishedNum = new Array();

var currentCal = "";
var finishedCal = new Array();

var showTime = 0;

var currentResult = "";
var lastNum = "";
var lastCal = "";
var result;

window.onload = function() {
	init();
}

function init() {
	var inputs;
	result = document.getElementById('result');
	inputs = document.getElementsByTagName('input');
	result.value = "0";
	currentNum = "0";
	for (var i = 1; i < inputs.length; i++) {
		inputs[i].onclick = function() {
			classify(this);

		}

		//修改按下按钮的样式
		inputs[i].onmousedown = function() {
			this.style.opacity = 0.4;

		}
		inputs[i].onmouseup = function() {
			this.style.opacity = 1;

		}
	}
}

function classify(currentPressed) {

	showTime = 0;

//对当前按键进行分类
	switch(currentPressed.className) {
		case "num": 
			//输入等号运算后，如果输入数字，则清空上次的结果，重新运算
			currentResult = "";

			//运算符进栈后要初始化currentCal,currentNum
			if (currentCal) {
				result.value = "";
				currentCal = "";
				currentNum = "";
			}

			if ((currentPressed.value == ".")&&(currentNum[1] == ".")) {		
				return;
			}

			//数字最开始输入不允许是小数点
			if ((!currentNum)&&((currentPressed.value) == ".")) {
				return;
			}

			//不允许开始连续输入两个0
			else if((currentPressed.value != ".")&&(currentNum == "0")) {
				currentNum = currentPressed.value;
				ifNumPush();
				result.value = currentNum;
				return;
			}
			else{
				currentNum += currentPressed.value;
				result.value = currentNum;


				//用户可能会多次修改输入的运算数字，故判断数字是否进栈
				ifNumPush();
			}	
			break;

		case "cal":
			//输入等号运算后，如果继续输入运算符，就将之前的结果保存，如1+1＝2，再输入：＋1＝3
			if (currentResult) {
				finishedNum.push(currentResult);
				currentNum = currentResult;
			}


			if (currentNum) {
				currentCal = currentPressed.value;
				result.value = currentCal;

				//用户可能会多次修改输入的运算符，故判断运算符号是否进栈
				ifCalPush();
			}
			break;

		case "eql":
			calculate();
			break;

		case "other del":
			if ((!currentCal) &&(!currentResult)) {
				currentNum = currentNum.substring(0, currentNum.length - 1);
				finishedNum[finishedNum.length - 1] = currentNum;
				if (currentNum == "") {
					currentNum = 0;
				}
				ifNumPush();
				result.value = currentNum;
			}
			
			break;

		case "other clear":
			currentCal = "";
			currentNum = "";
			currentResult = "";
			lastCal = "";
			finishedNum.splice(0, finishedNum.length);
			finishedCal.splice(0, finishedCal.length);
			result.value = "0";

			break;

		case "other time":
			showTime = 1;
			showLeftTime();	
			break;		
	}
	
}

//计算最终结果
function calculate(){
	
	if ((!finishedCal.length) && (!lastCal)) {
		if (!currentNum) {
			currentNum = "0";
		}
		result.value = currentNum;
		return;
	}
	
	else if (finishedCal.length) {
		currentResult = finishedNum[0];
		if (finishedCal.length == finishedNum.length) {
			finishedNum.push(finishedNum[finishedNum.length - 1]);
		}
		for (var i = 0; i < finishedCal.length; i++) {
			currentResult = calByStep(currentResult, finishedCal[i], finishedNum[i + 1]);
		}

	}

	else {
		
		finishedCal.push(lastCal);
		finishedNum.push(currentResult);
		finishedNum.push(lastNum);
		calculate();
		return;
	}
	if (currentResult == "Infinity") {
		currentResult = "除数不能为零";
	}
	result.value = currentResult;
	currentNum = "";

	//清空之前的输入
	finishedNum.splice(0, finishedNum.length);
	finishedCal.splice(0, finishedCal.length);
}

//对当前输入数字是否进栈进行处理
function ifNumPush() {
	if (finishedNum.length > finishedCal.length) {
		finishedNum[finishedNum.length - 1] = currentNum;
	}

	else{
		finishedNum.push(currentNum);
	}
	lastNum = finishedNum[finishedNum.length - 1];
}

//对当前输入运算符是否进栈进行处理
function ifCalPush() {
	if(finishedNum.length > finishedCal.length) {
		finishedCal.push(currentCal);
	}

	else{
		finishedCal[finishedCal.length - 1] = currentCal;
	}

	lastCal = finishedCal[finishedCal.length - 1];
}


/*
	将连续运算拆分成单步运算
	num1: 参与运算的数
	cal: 运算符号
	num2: 参与运算的的另一个数
	返回值：单步运算的结果
*/
function calByStep(num1, cal, num2) {
	var currentResult = num1 + cal + num2;
	var floatNum1 = parseFloat(num1);
	var floatNum2 = parseFloat(num2);

	switch(cal) {
		case "+": currentResult = (floatNum1 * 10000000000 + floatNum2 * 10000000000) / 10000000000;break; 
		case "-": currentResult = (floatNum1 * 10000000000 - floatNum2 * 10000000000) / 10000000000;break;
		case "×": currentResult = floatNum1 * 10000000000 * floatNum2 /10000000000;break;
		case "÷": currentResult = (floatNum1 * 10000000000) / (floatNum2 * 10000000000);break;
		case "%": currentResult = floatNum1 % floatNum2;break;
	}

	return currentResult;

}

function showLeftTime() {

	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	var time = hours + ":" + minutes + ":" + seconds + "";
	//一秒刷新一次显示时间
	var timeID=setTimeout(showLeftTime,1000);

	if (showTime) {
		result.value = time;
	}
}


