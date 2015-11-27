<?php

require_once 'config.php';

$conn = @(new mysqli(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB));

function connectDB() {

	if(mysqli_connect_errno())
	{
		die("<p class = 'warning'>连接数据库失败 请重试</p>");
	}
}

function loginVerify($username, $password) {

	global $conn;
	
	$sql = "SELECT password FROM blog_user WHERE username = '$username'";
	$result = mysqli_fetch_array(mysqli_query($conn, $sql), MYSQLI_ASSOC);
	
	if(password_verify($password, $result['password'])) {
		
		header('Location: index.php');
	} else {
		
		echo "<p class = 'warning'>用户名或密码不正确</p>";
	}
}

function registerVerify($username, $password) {
	
	global $conn;
	
	$username = filter_var($username, FILTER_SANITIZE_EMAIL);
	$password = password_hash($password, PASSWORD_DEFAULT);
	
	$sql = "SELECT username FROM blog_user WHERE username = '$username'";
	$result = mysqli_fetch_array(mysqli_query($conn, $sql), MYSQLI_ASSOC);
	
	if ($username == $result['username']) {
	
		echo "<p class = 'warning'>该用户名已被注册</p>";
	} else {
		
		mysqli_query($conn, "INSERT INTO blog_user(username, password) VALUES ('$username', '$password')");
	
		if (mysqli_errno()) {
	
			echo mysqli_error();
		} else {
	
			header('Location: login.php');
		}
	}
}