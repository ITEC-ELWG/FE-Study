
window.onload = function(){
	var show = document.getElementById("show");//显示框输入公式
	var showRes = document.getElementById("showRes");//显示结果
	var result = document.getElementById("result");//等号按键
	var AC = document.getElementById("AC");//清零按键
	var del = document.getElementById("delete");//删除输入按键
	var add = document.getElementById("add");//+按键
	var minus = document.getElementById("minus");//-按键
	var times = document.getElementById("times");//*按键
	var divide = document.getElementById("divide");//除号按键
	var percent = document.getElementById("percent");
	var toggle = document.getElementById("switch");//开关按键
	var numberButton = document.getElementsByClassName("number");//数字按键
	var buttons = document.getElementsByTagName("button");
	var cal = document.getElementsByClassName("cal");
	var str = "";//显示框中显示字符
	var operand1 = null;//保存输入的操作数1
	var operand2 = null;//保存输入的操作数2
	var operator = null;//保存输入的运算符
	var res = "";//输入操作数的框保存的字符
	
	show.value = str;
	showRes.vlaue = res;
	//开关功能
	var count = 1;
	toggle.onclick = function(){
		if(count%2 == 1){
			for(var i = 0;i < buttons.length;i++){
				if(i != 3)buttons[i].disabled = "true";
			}
		}
		else {
			for(var i = 0;i < buttons.length;i++){
				if(i != 3)buttons[i].disabled = null;
			}
		}
		showRes.value = "0";
		show.value = "";
		str = "";
		res = "0";
		operand1 = null;
		operator = null;
		operand2 = null;
		count++;
	}
	//删除输入功能
	del.onclick=function(){
		res = res.substr(0,res.length-1);
		showRes.value = res;
	}
	//清零功能
	AC.onclick = function(){
		showRes.value = "0";
		show.value = "";
		str = "";
		res = "0";
		operand1 = null;
		operator = null;
		operand2 = null;
	}
	//%号功能
	percent.onclick = function() {
		if(!isNaN(parseFloat(res))){
			res = parseFloat(res)/100;
			res = res.toString();
			showRes.value = res;

		}
	}
	//按下数字键时显示数字
	for (var i = numberButton.length - 1; i >= 0; i--) {
		numberButton[i].onclick = function() {
			if(res.indexOf(".")!=-1 && this.innerHTML == ".")return;
			if(res == "" && this.innerHTML == ".") {
				res ="0.";
				showRes.value = res;
				return;
			}
			if (operand1 != null && operator == null) operand1 = null;
			res = res + this.innerHTML;
			showRes.value = res;
		}
	};
	//按下等号，opreand1为计算结果res,operand2和opreator都清空，显示清空
	var isFirst = true;
	result.onclick = function() {
		//处理a+的情况，operand1和operator都存在，operand2不存在，且输入框里没有输入值
		if(operand1 !=null && operator != null && operand2 == null && isNaN(parseFloat(res))) {
			if (isFirst == true )num = operand1;
			switch(operator) {
				case "+" : res = operand1 + num; break;
				case "-" : res = operand1 - num; break;
				case "*" : res = operand1 * num; break;
				case "/" : res = operand1 / num; break;
			}
			showRes.value = res;
			operand1 = parseFloat(res);
			operand2 = null;
			res = "";
			isFirst =false;
		}
		//处理正常的运算，operand1和operator都存在，operand2不存在，且输入框里有输入值，则将输入框中的值设为operand2
		else if(operand1 !=null && operator != null && operand2 == null){
			operand2 = parseFloat(res);
			switch(operator) {
				case "+" : res = operand1 + operand2; break;
				case "-" : res = operand1 - operand2; break;
				case "*" : res = operand1 * operand2; break;
				case "/" : res = operand1 / operand2; break;
			}
			showRes.value = res;
			operand1 = parseFloat(res);
			res = "";
			operand2 = null;
			operator = null;
		}
		str = "";
		show.value = "";
	}
	//给每个运算符添加点击事件
	for (var i = cal.length - 1; i >= 0; i--) {
		cal[i].onclick = function() {
			//operand1，operator和operand2都不存在，刚开始运算
			if (operand1 == null && operator == null && operand2 == null) {
				operand1 = parseFloat(res);
				operator = this.innerHTML;
				str = res + operator;
				show.value = str;
				res = "";
			}
			//operand1，operator存在，operand2不存在，并且输入框中有值，将oprerand2设为输入框中的值，运算后变成opreand1和operator都存在
			else if (operand1 !=null && operator !=null && operand2 == null && isNaN(parseFloat(res))){
				operator = this.innerHTML;
				str = str.substr(0,str.length-1) + operator;
				show.value = str;
			}
			//operand1，operator存在，operand2不存在，并且输入框中无值，改变运算符号
			else if (operand1 !=null && operator !=null && operand2 == null){
				operand2 = parseFloat(res);
				str = str + res;
				switch (operator){
					case "+" : res = operand1 + operand2; break;
					case "-" : res = operand1 - operand2; break;
					case "*" : res = operand1 * operand2; break;
					case "/" : res = operand1 / operand2; break;
				}
				showRes.value = res;
				operator = this.innerHTML;
				str = str + operator;
				show.value = str;
				operand1 = res;
				res = "";
				operand2 = null;
			}//opreand1存在并且operator不存在，属于等号运算情况
			else if (operand1 != null && operator == null){
				operator = this.innerHTML;
				str = operand1 + operator;
				show.value = str;
				res = "";
				operand2 = null;
			}
			isFirst = true;
		}
	};
}
