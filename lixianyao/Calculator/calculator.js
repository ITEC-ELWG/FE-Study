var Btns;
var Inputs, inputlen = 0;
var Screen;
var Dot=false, PreIsOp = true;
var Oper = '+';
var LastRes = 0;
var PreIsRes = true;

//启动窗口时初始化
window.onload =  myfun;

function myfun()
{
	Screen = document.getElementById("screen");

	//初始化示数；绑定按钮事件
	initInput();
	screenChanged();
	initBtns();
}

//初始化输入量及屏幕显示数
function initInput()
{
    Inputs = 0;
    Dot = false;
}

function screenChanged()
{
	Screen.value=Inputs;
}

//为所有的按键赋予初始化属性、事件
function initBtns()
{
	try{
	Btns = document.getElementsByTagName("button");
	var len = Btns.length;

	//遍历button数组
	for(var i =0; i< len ; i++)
	{
		Btns[i].onmouseover = function(){ BtnHover(this,true)};
		Btns[i].onmouseout =function(){  BtnHover(this,false)};
		Btns[i].onclick = function(){ BtnPressed(this)};
	}
	}
	catch(err)
	{
		var txt="";
		alert(err.message);
	}
	
}

function BtnHover(btn,flag)
{try{
	if(flag == true)
	{	btn.style.fontSize = "25px";}
	else
	{	btn.style.fontSize = "40px";}
	}
	catch(err)
	{
		var txt="";
		alert(err.message);
	}
}

function BtnPressed(btn)
{
	try{
	    if(btn.value == "function")
	    {
		    switch(btn.name)
		    {
		        case "AC":
		            PreIsOp = false;
		            initInput();
		            Oper = "+";
		            LastRes = 0;
				    screenChanged();
				    break;

		        case "%"://百分数在这里的作用是直接将当前操作数除以100
		            if (PreIsOp == true) {
		                alert("语法错误");
		                break;
		            }
		            PreIsOp = false;
		            Inputs = parseFloat(Inputs);
		            Inputs /=100;
				    if(Inputs<0)  
				        Dot = true;

                    //若是直接转化结果，则清理之前的累积结果
				    if (PreIsRes == true)
				    {
				        LastRes = 0; Oper = "+";
				    }
				    PreIsRes = true;
                  
				    Screen.value = LastRes + Oper + Inputs;
				    break;

		        case ".":
		            PreIsOp = false;
		            if (Dot == true) {
		                alert("非法的小数点");
		                break;
		            }
		            Dot = true;
		            Inputs = Inputs + ".";
		            PreIsRes = false;
		            Screen.value = LastRes + Oper + Inputs;
				    break;

		        case "=":
		            if (PreIsOp == true)
		            {
		                alert("语法错误：缺少操作数2");
		                break;
		            }
		            changeRes(Oper);
		            break;

		        default:
		            getOper(btn.name);
		            break;
		    }
	    }
	    //输入为数值
	    else
	    {
	        
	        if (PreIsRes == true)//未与前次运算结果间使用运算符：重启一次新的运算
	        {
	            PreIsRes = false;
	            LastRes = 0;
	            initInput();
	        }

	        PreIsOp = false;
		    if(Dot==false)//整数直接累加尾部
		    {
		        Inputs = Inputs * 10 + btn.name * 1;
		    }
		    else//小数部分则需要注意长度
		    {
			    Inputs += btn.name;
		    }
		    Screen.value = LastRes + Oper + Inputs;
		   // screenChanged();
	    }
	}
	catch(err)
	{
		var txt="";
		alert(err.message);
	}
}

function getOper(op) {
    //当前一个输入也是op时，这里假设只是简单的替换运算符
    //若是紧接上一步结果，则直接接上去
    if (PreIsOp == true || PreIsRes == true) {
        Oper = op;
    }
    //否则，把原来的前一操作数、运算符与当前操作数运算，再记下当前运算符
    else {
        changeRes(Oper);
    }
    
    //记下这次输入的合法符号
    Oper = op;
    //当前结果变为操作数1
    LastRes = Inputs;
    //显示
    Screen.value = LastRes + op;
    PreIsOp = true;
    PreIsRes = false;
    initInput();
}

function changeRes(op) {

    Inputs = parseFloat(Inputs);
    if (isInt(Inputs) && isInt(LastRes)) {
        Inputs = Inputs.toString();
        Inputs = parseInt(Inputs);
    }
    else LastRes = parseFloat(LastRes);
 
    switch (op) {
        case '+':
            LastRes = LastRes + Inputs;
            break;
        case '-':
            LastRes = LastRes - Inputs;
            break;
        case '*':
            LastRes = LastRes * Inputs;
            break;
        case '/':
            LastRes = LastRes / Inputs;
            break;
    }

    //为了查看结果锁定下位数
    if (!isInt(LastRes)) {
        Dot = true;
        LastRes = LastRes.toFixed(5);
    }
    else Dot = false;

    Inputs = LastRes;
    PreIsRes = true;
    PreIsOp = false;
    screenChanged();
}

function isInt(n) {
    return typeof n === 'number' && parseFloat(n) == parseInt(n, 10) && !isNaN(n);
}