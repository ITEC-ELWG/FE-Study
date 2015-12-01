var login = document.getElementById("login");
var password = document.getElementById("password");
login.onclick=function(){
	var pass=password.value;
	password.value=hex_sha1(pass);
	//alert(password.value);
	return true;
}