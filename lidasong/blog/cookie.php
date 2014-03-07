<?php 
if(!$_COOKIE["username"]||!$_COOKIE["password"])
	echo '<meta http-equiv="refresh" content="0;url=login.php" />';
	setcookie("username"," ",time()-3600);
	setcookie("password"," ",time()-3600); //删除cookie
?>