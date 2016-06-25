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
		case "percent":
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
				//此处添加一些说明
				case "percent":
					operatorChar = "%";
					break;
			}
			if (lastCharIndex >= 0) {
				if (lastChar === "-" ||  lastChar === "+" || lastChar === "×" || lastChar === "÷" || lastChar === "%"){					
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
			//这个部分对输入进行计算。
			console.log("you clicked key = " + keyId);
			haveCalculated = true;


			//此处添加说明
			var percentIndexOffset = 0;
			var percentIndex1 = 0;
			var percentIndex2 = 0;
			while(percentIndexOffset != 2 && percentIndex2 != -1){
				percentIndex2 = outputString.indexOf("%", percentIndex1 + 1);
				percentIndexOffset =  percentIndex2 - percentIndex1;
				percentIndex1 = percentIndex2;
			}
			if (percentIndex2 != -1) {
				alert("%只作为百分比来使用，不作为求余运算符使用。此时你的与运算中包含两个相邻的百分比值，如3%3%");
				outputString = "";
			}

			
			//如果最后多了一个运算符，则去掉。
			var lastCharIndex = outputString.length - 1; 
			var lastChar = outputString.charAt(lastCharIndex);
			if (lastChar === "-" ||  lastChar === "+" || lastChar === "×" || lastChar === "÷") {
				outputString = outputString.slice(0, lastCharIndex);
			}

			numbers = outputString.split(/\+|\-|\×|\÷|\%/g);
			console.log("numbers = " + numbers);
			operators = outputString.replace(/[0-9]|\./g, "").split("");
			console.log("operators = " + operators);


			//此处添加一些说明
			var divideIndex = operators.indexOf("%");
			while (divideIndex != -1) {
				numbers.splice(divideIndex, 1, numbers[divideIndex] / 100);
				if (numbers[divideIndex + 1] === "") {numbers.splice(divideIndex + 1, 1);}
				operators.splice(divideIndex, 1);
				divideIndex = operators.indexOf("%");
			}

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