 var str1 = "";
 var str = "";
 var arr = ['', '', ''];
 //var buttonId = document.getElementById("result");
 /* 这一点我感觉很奇怪，使用全局变量定义buttonId，
结果会出错:Uncaught TypeError:Cannot set property 'value of null'
结果定义在clickButton（）函数里就可以进行访问，虽然都是全局变量，但是我在想是不是
外部变量是不是不能进行使用函数诸如：document对象获取内容 */

 function press(value) {
     buttonId = document.getElementById("result");
     switch (value) {
         case 1:
             str = str + '1';
             str1 = str1 + '1';
             buttonId.value = str1;
             break;
         case 2:

             str = str + '2';
             str1 = str1 + '2';
             buttonId.value = str1;
             break;
         case 3:

             str = str + '3';
             str1 = str1 + '3';
             buttonId.value = str1;
             break;
         case 4:

             str = str + '4';
             str1 = str1 + '4';
             buttonId.value = str1;
             break;
         case 5:
             str = str + '5';
             str1 = str1 + '5';
             buttonId.value = str1;
             break;
         case 6:
             str = str + '6';
             str1 = str1 + '6';
             buttonId.value = str1;
             break;
         case 7:

             str = str + '7';
             str1 = str1 + '7';
             buttonId.value = str1;
             break;
         case 8:

             str = str + '8';
             str1 = str1 + '8';
             buttonId.value = str1;
             break;
         case 9:

             str = str + '9';
             str1 = str1 + '9';
             buttonId.value = str1;
             break;
         case 0:
             //  if(str! = ""||str! = '0')
             str = str + '0';
             str1 = str1 + '0';
             buttonId.value = str1;
             break;
         case 10: //AC
             str = "";
             str1 = "";
             buttonId.value = str1;
             arr[0] = '';
             arr[1] = '';
             arr[2] = '';
             break;
         case 11:
             if (arr[1] != "") {
                 calculate();
                 str[1] = "";
             }
             arr[1] = '+';
             str1 = str1 + '+';
             buttonId.value = str1;
             arr[0] = str;
             str = '';
             break;
         case 12:
             if (arr[1] != "") {
                 calculate();
                 str[1] = "";
             }
             arr[0] = str;
             arr[1] = '-';
             str1 = str1 + '-';
             buttonId.value = str1;
             str = '';
             break;
         case 13:
             if (arr[1] != "") {
                 calculate();
                 str[1] = "";
             }

             arr[0] = str;
             arr[1] = 'x';
             str1 = str1 + 'x';
             buttonId.value = str1;
             str = '';
             break;
         case 14:
             if (arr[1] != "") {
                 calculate();
                 str[1] = "";
             }

             arr[0] = str;
             arr[1] = '/';
             str1 = str1 + '/';
             buttonId.value = str1;
             str = '';
             break;
         case 15:
             str = str + '.';
             str1 = str1 + '.';
             buttonId.value = str1;
             break;
         case 100:
             arr[0] = str;
             arr[1] = '%';
             str1 = str1 + '%';
             buttonId.value = str1;
             str = '';
             break;
         default:
     }
     if (arr[0] != "")
         arr[2] = str;
 }


 function calculate() {
     arr[0] = parseFloat(arr[0]);
     arr[2] = parseFloat(arr[2]);
     switch (arr[1]) {
         case '+':
             arr[0] = arr[0] + arr[2];
             // str1 = arr[0];
             buttonId.value = arr[0];
             // buttonId.value = String(arr[0]);       
             break;
         case '-':
             arr[0] = arr[0] - arr[2];
             //str1 = arr[0];
             buttonId.value = arr[0];
             break;
         case 'x':
             arr[0] = arr[0] * arr[2];
             //str1 = arr[0];
             buttonId.value = arr[0];
             break;
         case '/':
             arr[0] = arr[0] / arr[2];
             //str1 = arr[0];
             buttonId.value = arr[0];
             break;
         case '%':
             arr[0] = arr[0] / 100;
             buttonId.value = arr[0];
             break;
         default:
     }
     str = arr[0];
     str1 = arr[0];
     arr[1] = "";
     //arr[0] = arr[0].toString();
 }
