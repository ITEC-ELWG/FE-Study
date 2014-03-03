var num1='',num2='',sym='',numInScreen='',flag=1;

function getNum(a)
{
	if (flag==1) {
		num1=num1+a;
		numInScreen=numInScreen+a;
		document.getElementById("result").value=numInScreen;		
	}
   else if(flag==0){
    	num2=num2+a;
    	numInScreen=numInScreen+a;
    	document.getElementById("result").value=numInScreen;
    }
}

function clearScreen()
{
	num1='',num2='',sym='',numInScreen='',flag=1;
	document.getElementById("result").value=numInScreen;
}

function percent()
{
	sym='%';
	numInScreen=numInScreen+sym;
	document.getElementById("result").value=numInScreen;
}

function del()
{
	if(numInScreen.charAt(numInScreen.length-1)>='1'&&numInScreen.charAt(numInScreen.length-1)<='9'&&flag==0)
	{
		num2=num2.substring(0,num2.length-1);
	}
	else if(numInScreen.charAt(numInScreen.length-1)>'9'||numInScreen.charAt(numInScreen.length-1)<'1')
	{
		sym='';
		flag=1;
	}
	else if(numInScreen.charAt(numInScreen.length-1)>='1'&&numInScreen.charAt(numInScreen.length-1)<='9'&&flag==1)
	{
		num1=num1.substring(0,num1.length-1);
	}
	numInScreen=numInScreen.substring(0,numInScreen.length-1);
	document.getElementById("result").value=numInScreen;
}

function plus()
{
	sym='+';
	numInScreen=numInScreen+sym;
	document.getElementById("result").value=numInScreen;
	flag=0;
}

function minus()
{
	sym='-';
	numInScreen=numInScreen+sym;
	document.getElementById("result").value=numInScreen;
	flag=0;
}


function times()
{
	sym='×';
	numInScreen=numInScreen+sym;
	document.getElementById("result").value=numInScreen;
	flag=0;
}

function divide()
{
	sym='÷';
	numInScreen=numInScreen+sym;
	document.getElementById("result").value=numInScreen;
	flag=0;
}

function equal()
{
	var b;
	switch(sym){
		case '+':
		b=parseFloat(num1)+parseFloat(num2);
		document.getElementById("result").value=b;
		num1='',num2='',sym='',numInScreen='',flag=1;
		break;
		case '-':
		b=parseFloat(num1)-parseFloat(num2);
		document.getElementById("result").value=b;
		num1='',num2='',sym='',numInScreen='',flag=1;
		break;
		case '÷':
		b=parseFloat(num1)/parseFloat(num2);
		document.getElementById("result").value=b;
		num1='',num2='',sym='',numInScreen='',flag=1;
		break;		
		case '×':
		b=parseFloat(num1)*parseFloat(num2);
		document.getElementById("result").value=b;
		num1='',num2='',sym='',numInScreen='',flag=1;
		break;
		case '%':
		b=parseFloat(num1)/100;
		document.getElementById("result").value=b;
		num1='',num2='',sym='',numInScreen='',flag=1;
		break;
		}
}









