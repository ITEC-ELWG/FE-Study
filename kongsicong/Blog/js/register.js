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
		if(s==true){
			password.value=hex_sha1(password.value);
		}
		//alert(password.value);
		return s;
	}
	account.onblur = function(){
		var xmlhttp;
		if (account.value==""){
			account.nextSibling.innerHTML="账户名不能为空";
			return;
		}
		if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				account.nextSibling.innerHTML=xmlhttp.responseText;
		    }
		}
		xmlhttp.open("GET","isAccountExisting.php?account="+account.value,true);
		xmlhttp.send();
	}
	
}