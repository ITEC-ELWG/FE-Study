var isAccount;
var isName;
var isPwd;
var isPwdAgain;
// 文档加载后要运行的函数
$(document).ready(function(){
    var options = {
        beforeSubmit:  validate,
        success:       submitted
    };
    $('#registerForm').ajaxForm(options);
});

function validate(formData, jqForm, options) {
    var form = jqForm[0];
    if (!form.account.value ||!form.password.value||!form.pwdAgain.value) {
        alert('请填写完整');
        return false;
    }
    if(isAccount==false){
        alert("账号错误");
        return false;
    }
    if(isName==false){
        alert("用户名错误");
        return false;
    }
    if(isPwd==false){
        alert("密码错误");
        return false;
    }
    if(isPwdAgain==false){
        alert("再次输入密码错误");
        return false;
    }
    return true;
}

function submitted(responseText){
    if(responseText.replace(/^\s*|\s*$/g, '')=="注册成功"){ //利用正则表达式处理返回值的空格
        window.location.href="login.php";
    }
    else{
        alert(responseText);
    }
}

document.getElementById("account").onfocus=function(){
    document.getElementById("account-tips").style.color="#969A9B";
    document.getElementById("account-tips").innerHTML="请输入不超过30个字符";
};
document.getElementById("account").onblur= function () {
    var xmlhttp;
    if(this.value.length==0){
        isAccount=false;
        document.getElementById("account-tips").style.color="red";
        document.getElementById("account-tips").innerHTML="不能为空";
        return;
    }
    if(this.value.length>30){
        isAccount=false;
        document.getElementById("account-tips").style.color="red";
        document.getElementById("account-tips").innerHTML="不超过30个字符!";
        return;
    }
    if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else{// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //回调函数
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            if(xmlhttp.responseText.replace(/^\s*|\s*$/g, '')=="not used"){ //该用户名可以注册
                isAccount=true;
                document.getElementById("account-tips").innerHTML="";
            }
            else{ //注册时有误
                isAccount=false;
                document.getElementById("account-tips").style.color="red";
                document.getElementById("account-tips").innerHTML=xmlhttp.responseText;
            }
        }
    };
    xmlhttp.open("POST","../database/register_account_db.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("account="+this.value);
};

document.getElementById("name").onfocus=function(){
    document.getElementById("name-tips").style.color="#969A9B";
    document.getElementById("name-tips").innerHTML="请输入不超过15个字符";
};
document.getElementById("name").onblur= function () {
    if(this.value.length>15){
        isName=false;
        document.getElementById("name-tips").style.color="red";
        document.getElementById("name-tips").innerHTML="不超过15个字符!";

    }
    else{
        isName=true;
        document.getElementById("name-tips").innerHTML="";
    }
};

document.getElementById("password").onfocus=function(){
    document.getElementById("psw-tips").style.color="#969A9B";
    document.getElementById("psw-tips").innerHTML="6-16个字符，区分大小写";
};
document.getElementById("password").onblur= checkPwd;

document.getElementById("pwd-again").onblur= checkPwdAgain;
/*document.getElementById("pwd-again").addEventListener("blur",checkPwdAgain);
document.getElementById("pwd-again").onblur= function () {
  checkPwdAgain();
};*/

function checkPwd(){
	var length=document.getElementById("password").value.length;
	checkPwdAgain();
    if(length<6||length>16){
        isPwd=false;
        document.getElementById("psw-tips").style.color="red";
        document.getElementById("psw-tips").innerHTML="6-16个字符!";

    }
    else{
        isPwd=true;
        document.getElementById("psw-tips").innerHTML="";
    }
}

function checkPwdAgain() {
    var password=document.getElementById("password").value;
    var pwdAgain=document.getElementById("pwd-again").value;
    if(password!==""&&pwdAgain!==""){
        if (password===pwdAgain){ //密码正确
            isPwdAgain=true;
            document.getElementById("pwd-again-img").style.display="block";
            document.getElementById("pwd-again-img").style.backgroundImage="url(../image/icon_right.png)";
            document.getElementById("pwd-again-tips").innerHTML="";
        }
        else{ //再次输入密码错误
            isPwdAgain=false;
            document.getElementById("pwd-again-img").style.display="block";
            document.getElementById("pwd-again-img").style.backgroundImage="url(../image/icon_wrong.png)";
            document.getElementById("pwd-again-tips").style.color="red";
            document.getElementById("pwd-again-tips").innerHTML="两次输入的密码不一致!";
        }
    }
}
