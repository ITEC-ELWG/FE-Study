var output;
var outputString;
var haveCalculated = false;

function init() {
	output = document.querySelector(".output");
	outputString = output.innerHTML;
	document.addEventListener("click", eventHandler, false);
}

function eventHandler(event) {
	var keyId = event.target.id;
	var numbers;
	var operators;

	switch(keyId){
		case "1": 
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "0":
		case ".":
		    //对于点击数字键时，只考虑两种情况
		    //1. 如果已经计算出结果，则重置输出，显示此时点击的数字值
		    //2. 否则，在输出后面直接添加点击的数字。
			console.log("you clicked key = " + keyId);
			if(haveCalculated){
				haveCalculated = false;
				outputString = "";
				console.log("fengwieyao");
				outputString += keyId;
			}
			else {
				outputString +=keyId;
			}
			break;

		case "plus":
		case "subtract":
		case "times":
		case "divide":
			//对于点击运算键时，只考虑三种情况：
			//1. 输出为空时，第一次点击运算键，则忽视此次点击。
			//2. 当上一次点击同样是运算键时，去掉上一次运算符，更新为此次的运算符。
			//3. 其他情况直接在后面添加运算符。
			console.log("you clicked key = " + keyId);

			var lastCharIndex = outputString.length - 1; 
			var lastChar = outputString.charAt(lastCharIndex);
			var operatorChar;
			switch(keyId){
				case "plus":
					operatorChar = "+";
					break;
				case "subtract":
					operatorChar = "-";
					break;
				case "times":
					operatorChar = "×";
					break;
				case "divide":
					operatorChar = "÷";
					break;
			}
			if (lastCharIndex >= 0) {
				if (lastChar === "-" ||  lastChar === "+" || lastChar === "×" || lastChar === "÷"){					
					outputString = outputString.slice(0, lastCharIndex);
					outputString += operatorChar;

				}
				else {
					outputString += operatorChar;
					//此处考虑到计算完后，又按了运算符键，从上一次结果重新开始计算。所以恢复未计算状态。
					haveCalculated = false; 
				}
			}
			break;

		case "equal":
			//there is some codes.
			console.log("you clicked key = " + keyId);
			haveCalculated = true;
			numbers = outputString.split(/\+|\-|\×|\÷/g);
			console.log("numbers = " + numbers);
			operators = outputString.replace(/[0-9]|\./g, "").split("");
			console.log("operators = " + operators);

			var divideIndex = operators.indexOf("÷");
			while (divideIndex != -1) {
				numbers.splice(divideIndex, 2, numbers[divideIndex] / numbers[divideIndex + 1]);
				operators.splice(divideIndex, 1);
				divideIndex = operators.indexOf("÷");
			}

			var divideIndex = operators.indexOf("×");
			while (divideIndex != -1) {
				numbers.splice(divideIndex, 2, numbers[divideIndex] * numbers[divideIndex + 1]);
				operators.splice(divideIndex, 1);
				divideIndex = operators.indexOf("×");
			}

			var divideIndex = operators.indexOf("+");
			while (divideIndex != -1) {
				//这里的parseFloat()用于把数字字符转为浮点数值以后进行加法运算，否者这里会默认为字符串的相加。
				numbers.splice(divideIndex, 2, parseFloat(numbers[divideIndex]) + parseFloat(numbers[divideIndex + 1]));
				operators.splice(divideIndex, 1);
				divideIndex = operators.indexOf("+");
			}

			var divideIndex = operators.indexOf("-");
			while (divideIndex != -1) {
				numbers.splice(divideIndex, 2, numbers[divideIndex] - numbers[divideIndex + 1]);
				operators.splice(divideIndex, 1);
				divideIndex = operators.indexOf("-");
			}
			outputString = numbers.toString();
			break;

		case "clear":
			//当点击清空键，清空输出。
			console.log("you clicked key = " + keyId);
			outputString = "";
			haveCalculated = false;
			break;
	}
	console.log("outputString = " + outputString);
	output.innerHTML = outputString;
}