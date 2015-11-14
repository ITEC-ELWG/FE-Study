window.onload = function(){
	var account = document.getElementById("account");
	var password = document.getElementById("password");
	var repassword = document.getElementById("repassword");
	var name = document.getElementById("realname");
	var submit = document.getElementById("submit");
	//js验证输入是否正确
	submit.onclick = function(){
		var s=true;
		//验证账户名是否为空
		if(account.value==""){
			account.nextSibling.innerHTML="账户名不能为空";
			s=false;
		}else{
			account.nextSibling.innerHTML="";
		}
		//验证密码是否为空
		if(password.value==""){
			password.nextSibling.innerHTML="密码不能为空";
			s=false;
		}else{
			password.nextSibling.innerHTML="";
		}
		//验证前后密码是否相同
		if(password.value!=repassword.value){
			repassword.nextSibling.innerHTML="前后密码不相等";
			s=false;
		}else{
			repassword.nextSibling.innerHTML="";
		}
		//验证姓名是否为空
		if(name.value==""){
			name.nextSibling.innerHTML="姓名不能为空";
			s=false;
		}else{
			name.nextSibling.innerHTML="";
		}
		return s;
	}
	
}