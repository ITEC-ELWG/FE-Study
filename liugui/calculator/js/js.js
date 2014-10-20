var intinput;//存储原始输入
var changeinput = 0;//存储转换后的输入值
var temp;//存储第一个输入的值
var op;//存储操作符
var outtag = 0;//标志是否已经输出，以便在等于之后能继续计算
var result = 0;//储存计算的结果
var pertag = 1;

var display = document.getElementById("led");//显示元素用一个变量代替

function numinput (num){//读取数字的输入
	if (changeinput <= 999999999){
    intinput = num.value;//用这种方式读入button按钮输入的值！！！！value不仅可以用在button上面的显示，其值也是可以调用的
    display.innerHTML += intinput;
    changeinput = parseFloat(display.innerHTML); //将文本转换成浮点数
    }
    else {
    	display.innerHTML = "超范围，请按AC"
    }
}

function ope(acc){
    op = acc.value;
    if (op == "AC"){
       display.innerHTML = "";
       outtag="0";
       result = "0";
       changeinput = 0;
       pertag = 1;
   }
   else if ((op == "+")||(op == "-")||(op == "×")||(op == "÷")){
   	    temp = (outtag == 1) ? result : changeinput;
   	    intinput = "";
   	    changeinput = "0";
   	    display.innerHTML = "";
   	    pertag = 1;
        }
}

function res(equal){
	switch(op){
		case "+":result = temp + changeinput;
		break;
		case "-":result = temp - changeinput;
		break;
		case "×":result = temp * changeinput;
		break;
		case "÷":result = temp / changeinput;
		break;
	}
	if (result <= 999999999)
	{
	display.innerHTML = result;
	outtag = 1;
    }
    else {
    	display.innerHTML = "超范围，请按AC"
    }
}


function percent100(per){
	if (pertag==1){
	var beforper = parseFloat(display.innerHTML);
	var afterper = beforper * 100;
	display.innerHTML = afterper + "%";//同时输出变量和特殊文本字符的方法
	pertag = 0;
    }
    else {
    	display.innerHTML = display.innerHTML;
    }
}

