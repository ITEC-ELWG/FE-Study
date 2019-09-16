var num1 = null;
var num2 = null;
var operator = null;
var res = '';
var disp = document.getElementsByClassName("cal_display")[0];
disp.value = 0;

document.getElementsByClassName("num")[8].onclick = function (){
    disp.value = disp.value + this.innerHTML;
    console.log(document.getElementsByClassName("num")[8]);
}