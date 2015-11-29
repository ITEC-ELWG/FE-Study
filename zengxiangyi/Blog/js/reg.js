window.onload = function(){
	document.getElementById("submit").onclick = function()
	{
		var password = document.getElementsByTagName("input")[1];
		var confirmPw = document.getElementsByTagName("input")[2];
		if (password.value && confirmPw.value)
		{
			password.value = hex_md5(password.value);
			confirmPw.value = hex_md5(confirmPw.value);
		}
		
	}
}

