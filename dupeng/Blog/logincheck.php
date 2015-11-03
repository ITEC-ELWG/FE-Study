<?php 
if($_POST["username"]=="dupeng"&&$_POST["password"]=="123456"){
	header("Location:index.html");
}else{
	echo "<script type='text/javascript'>alert('the username or the password is wrong');</script>";	
	echo "<script type='text/javascript'>window.open('login.html','_self');</script>";//window.open()拦截问题
	// header("Location:login.html");
	}
?>

