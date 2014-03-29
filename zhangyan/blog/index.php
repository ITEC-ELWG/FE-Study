<?php
		
	$email=$_POST['email'];
	$password=$_POST['password'];
	if($email=="1450802680@qq.com"&&$password=="A199103252020")
	{
		header("location:http://zhangyan123.github.io/");
	}
	else
	{ 
		echo "sorry!wrong email or password,please try again!";
	}
?>
	