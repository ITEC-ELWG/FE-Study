<?php
	$dbhost ="localhost";
  	$dbuser = "root";
  	$dbpwd = "";
  	$dbname = "test";
  	$mysqliObj = new mysqli($dbhost,$dbuser,$dbpwd,$dbname);
	if(mysqli_connect_errno()){
 		echo "连接失败".mysqli_connect_error();
 		exit();
	}
	$mysqliObj->query("set names utf8;"); 
?>