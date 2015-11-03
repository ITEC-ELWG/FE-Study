var operand1="",operator="",operand2="",operand="",expression="";//分别记录操作数1，操作符，操作数2，操作数临时值，表达式。
var label=0;
for(var i=0;i<2;i++){
	document.getElementsByClassName("line")[0].children[i].onclick=function(){//gerElementsByClassName得到的是结点的数组集合
		var data=this.innerHTML;
		var node=document.getElementsByClassName("data")[0];
		switch(data){
			case "AC": //清空所有值
				node.value="";
				operator="";
				operand="";
				operand1="";
				operand2="";
				expression="";
				// label=0;
				break;
			case "%":
				if(operand1!=""&&operator==""){
					operand1=operand1/100;
					expression=operand1;
					operand=operand1;
					node.value=operand1;
					// label=1;
				}
				break;
			default:
				break;
		}
	};
}
for(var i=1;i<5;i++){
	for(var j=0;j<4;j++){
		document.getElementsByClassName("line")[i].children[j].onclick=function(){
			var data=this.innerHTML;
			var node=document.getElementsByClassName("data")[0];
			switch(data)
			{
				case "0":
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
					operand+=data;
					expression+=data;
					if(operator==""){
						operand1=operand;
					}else{
						operand2=operand;
					}
					node.value=expression;
					break;
				case ".":
					if(operand.indexOf(".")==-1){
						operand+=data;
						expression+=data;
						if(operator==""){
							operand1=operand;
						}else{
							operand2=operand;
						}
						node.value=expression;
					}
					break;				
				case "+":
				case "-":
				case "*":
				case "/":
					if (operator!=""){
						Calculate();
					}
					operator=data;
					operand="";
					expression+=operator;
					node.value=expression;
					break;
				case "=":
					Calculate();
			   		break;
			   	default:
			   		break;
 			}
		};
	}
}
function Calculate(){//进行基本计算
	var data1=parseFloat(operand1);
	var data2=parseFloat(operand2);
	var node=document.getElementsByClassName("data")[0];
	switch(operator)
	{
		case "+":
		node.value=data1+data2;
		break;
		case "-":
		node.value=data1-data2;
		break;
		case "*":
		node.value=data1*data2;
		break;
		case "/":
		node.value=data1/data2;
		default:
		break;
	}
	operator="";
	operand1=node.value;
	operand2="";
	operand=operand1;
	expression=operand1;
}
