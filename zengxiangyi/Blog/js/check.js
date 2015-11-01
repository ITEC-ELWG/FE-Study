
var code="" ; //在全局 定义验证码

function createCode(){ 
code = "";
var codeLength = 6;//验证码的长度
var checkCode = document.getElementById("checkCode");
checkCode.value = "";
var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');

for(var i = 0;i < codeLength;i++) {
   var charIndex = Math.floor(Math.random()*32);
   code += selectChar[charIndex];
}

if(code.length != codeLength){
   createCode();
}

document.getElementById("checkCode").innerHTML = code;
}

function validate () {
var inputCode = document.getElementById("captcha").value.toUpperCase();

if(inputCode.length <= 0) {
   show_err_msg("请输入验证码！");
   //document.getElementById("form").action="";
   $('#captcha').focus();
   return false;
}
else if(inputCode != code ){
   //document.getElementById("form").action="";
   show_err_msg("验证码输入错误！");
   
   createCode();
   $('#captcha').focus();
}
else {

 

  show_loading();
   

  
}
}

var msgdsq;
//错误时：提示调用方法
function show_err_msg(msg){
    $('body').append('<div class="sub_err"'+
                     'style="position: absolute;' + 
                     'top: 60px;' + 
                     'left: 0;' + 
                     'width: 500px;' + 
                     'z-index: 99;"></div>');
    var errhtml = '<div  class="bac"' + 
                  'style="padding: 8px 0px;' + 
                  'width: 60%;' + 
                  'height: 110px;' + 
                  'margin: 0 auto;' +
                  'background-color: rgba(0,0,0,0.2);' +
                  'line-height: 100px;' + 
                  'text-align: center;' + 
                  'color: blue;' +
                  'font-size: 22px;' +
                  'font: bolder' +
                  'font-family: 微软雅黑;">' + 
                  '<img style = "margin-right: 10px;" src="images/error.png">';
    var errhtmlfoot = '</div>';  

    $('.sub_err').html(errhtml + msg + errhtmlfoot);
    var left = ($(document).width() - 500) / 2;
    $('.sub_err').css({'left': left+'px'});
    var scroll_height = $(document).scrollTop(); 
    $('.sub_err').animate({'top': scroll_height + 120}, 300);
    msgdsq = setTimeout(function(){                 
       $('.sub_err').animate({'top': scroll_height + 80}, 300);
       setTimeout(function(){
          $('.sub_err').remove();
       }, 300);
    }, "1000"); 
}


//显示加载动画
function show_loading()
{
  var str='<div class="msg_bg" style="background:#000;opacity:0.5;filter:alpha(opacity=50);z-index:99998;width:100%;position:absolute;left:0;top:0"></div>';
  str+='<div class="msg_bg" style="z-index:99999;width:100%;position:absolute;left:0;top:0;text-align:center;"><img src="images/loading.gif" alt="" class="loading"></div>'
  $('body').append(str);
  var scroll_height=$(document).scrollTop(); 
  $('.msg_bg').height($(document).height());
  $('.loading').css('margin-top',scroll_height+240);
  setTimeout(function(){
          $('.msg_bg').remove();
            window.location="index.htm";
       }, 1000);

}
