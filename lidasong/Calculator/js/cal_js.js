 var symbolKeeper = "";
 var numberKeeper = "";
 var quantityKeeper = ['', '', ''];
 //var buttonId = document.getElementById("result");
 /* 这一点我感觉很奇怪，使用全局变量定义buttonId，
结果会出错:Uncaught TypeError:Cannot set property 'value of null'
结果定义在clickButton（）函数里就可以进行访问，虽然都是全局变量，但是我在想
外部变量是不是不能进行使用函数诸如：document对象获取内容 */

 function press(value) {
     buttonId = document.getElementById("result");
     switch (value) {
         case 1:
             numberClick('1');
             break;
         case 2:
             numberClick('2');
             break;
         case 3:

             numberClick('3');
             break;
         case 4:

             numberClick('4');
             break;
         case 5:
             numberClick('5');
             break;
         case 6:
             numberClick('6');
             break;
         case 7:
             numberClick('7');
             break;
         case 8:

             numberClick('8');
             break;
         case 9:

             numberClick('9');
             break;
         case 0:
             numberClick('0');
             break;
         case 'AC':
             numberKeeper = "";
             symbolKeeper = "";
             buttonId.value = symbolKeeper;
             quantityKeeper[0] = '';
             quantityKeeper[1] = '';
             quantityKeeper[2] = '';
             break;
         case '+':
             symbolClick('+');
             break;
         case '-':
             symbolClick('-');
             break;
         case 'x':
             symbolClick('x');
             break;
         case '/':
             symbolClick('/');
             break;
         case '.':
             numberKeeper = numberKeeper + '.';
             symbolKeeper = symbolKeeper + '.';
             buttonId.value = symbolKeeper;
             break;
         case '%':
             symbolClick('%');
             break;
         default:
     }
     if (quantityKeeper[0] != "")
         quantityKeeper[2] = numberKeeper;
 }


 function calculate() {
     if (!quantityKeeper[0] || !quantityKeeper[2])
         return 0;
     quantityKeeper[0] = parseFloat(quantityKeeper[0]);
     quantityKeeper[2] = parseFloat(quantityKeeper[2]);
     switch (quantityKeeper[1]) {
         case '+':
             quantityKeeper[0] = quantityKeeper[0] + quantityKeeper[2];
             buttonId.value = quantityKeeper[0];
             break;
         case '-':
             quantityKeeper[0] = quantityKeeper[0] - quantityKeeper[2];
             buttonId.value = quantityKeeper[0];
             break;
         case 'x':
             quantityKeeper[0] = quantityKeeper[0] * quantityKeeper[2];
             //symbolKeeper = quantityKeeper[0];
             buttonId.value = quantityKeeper[0];
             break;
         case '/':
             quantityKeeper[0] = quantityKeeper[0] / quantityKeeper[2];
             buttonId.value = quantityKeeper[0];
             break;
         case '%':
             quantityKeeper[0] = quantityKeeper[0] % quantityKeeper[2];
             buttonId.value = quantityKeeper[0];
             break;
         default:
     }
     if(quantityKeeper[0]==Infinity)
     {
         alert("计算出错！");
         press('AC');
     }
     numberKeeper = quantityKeeper[0];
     symbolKeeper = quantityKeeper[0];
     quantityKeeper[1] = "";
 }

 function numberClick(number) {
     numberKeeper = numberKeeper + number;
     symbolKeeper = symbolKeeper + number;
     buttonId.value = symbolKeeper;
 }

 function symbolClick(symbol) {
     if (quantityKeeper[1] != "") {
         calculate();
         quantityKeeper[1] = '';
     }
     quantityKeeper[1] = symbol;
     symbolKeeper = symbolKeeper + symbol;
     buttonId.value = symbolKeeper;
     quantityKeeper[0] = numberKeeper;
     numberKeeper = '';
 }
