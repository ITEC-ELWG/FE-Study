window.onload = function(){	
	document.getElementById("submit-btn").onclick = function()
	{
		var password = document.getElementsByTagName("input")[1];
		if (password.value)
		{
			password.value = hex_md5(password.value);
		}
		
	}
}