//存储原始输入
var intInput;
//存储转换后的输入值
var changeinput = 0;
//存储第一个输入的值
var temp;
//存储操作符
var op;
//标志是否已经输出，以便在等于之后能继续计算
var outtag = 0;
//储存计算的结果
var result = 0;
var pertag = 1;
//显示元素用一个变量代替
var display = document.getElementById("led");
display.innerHTML = "0";
//指示是否有小数点输入
var decimalTag = 0;
//记录小数的个数
var afterDecimal = 0;
//读取数字的输入
function numInput(num)
{
    if (decimalTag == 1) 
    {
      if(intInput == ".")
      {
        afterDecimal = afterDecimal;
      }
      else
      {
        afterDecimal += 1;
      }
    } 

    else
    {
      afterDecimal = 0;
    }

    if (changeinput <= 9999999) 
    {
        //用这种方式读入button按钮输入的值！！！！value不仅可以用在button上面的显示，其值也是可以调用的
        intInput = num.value;



        if (afterDecimal <= 4) 
        {
            //修复一开始能输入多个0的BUG问题
            if (display.innerHTML == "0") 
            {
                if (intInput == "0")
                {
                    display.innerHTML = "0";
                }
                else 
                {
                    //修复一开始不能输入小数的问题
                    if (intInput == ".") 
                    {
                        if(decimalTag == 0)
                        {
                        display.innerHTML += intInput;
                        decimalTag = 1;
                        }
                        else
                        {
                          display.innerHTML = display.innerHTML;
                        }
                    } 
                    else 
                    {
                        display.innerHTML = "";
                        display.innerHTML += intInput;
                    }
                }
            } 

             else 
             {
                if (intInput == ".") 
                {
                    if(decimalTag == 0)
                    {
                    display.innerHTML += intInput;
                    decimalTag = 1;
                    }
                    else 
                    {
                      display.innerHTML = display.innerHTML;
                    }
                }
                else
                {
                    display.innerHTML += intInput;
                }
            }
        } 
        else 
        {
            display.innerHTML = display.innerHTML;
        }

        //将文本转换成浮点数
        changeinput = parseFloat(display.innerHTML);
    } 
    else 
    {
        display.innerHTML = "超范围，请按AC";
    }
}

function operate_sign(acc) {
    op = acc.value;
    if (op == "AC") {
        display.innerHTML = "0";
        outtag = "0";
        result = "0";
        changeinput = 0;
        pertag = 1;
        decimalTag = 0;
        afterDecimal = 0;
    } else if ((op == "+") || (op == "-") || (op == "×") || (op == "÷")) {
        temp = (outtag == 1) ? result : changeinput;
        intInput = "";
        changeinput = "0";
        display.innerHTML = "";
        pertag = 1;
        decimalTag = 0;
        afterDecimal = 0;
    }
}

function getResult(equal) {
    switch (op) {
        case "+":
            result = temp + changeinput;
            break;
        case "-":
            result = temp - changeinput;
            break;
        case "×":
            result = temp * changeinput;
            break;
        case "÷":
            result = temp / changeinput;
            break;
    }
    if (result <= 9999999) {
        result = decimalNumber(result, 5);
        display.innerHTML = result;
        outtag = 1;
    } else {
        display.innerHTML = "超范围，请按AC"
    }
}


function percent100(per) {
    if (pertag == 1) {
        var beforper = parseFloat(display.innerHTML);
        var afterper = beforper / 100;
        //同时输出变量和特殊文本字符的方法
        display.innerHTML = afterper + "%";
        pertag = 0;
    } else {
        display.innerHTML = display.innerHTML;
    }
}

//限定小数的位数的函数
function decimalNumber(number, v) {
    var vv = Math.pow(10, v);
    return Math.round(number * vv) / vv;
}
