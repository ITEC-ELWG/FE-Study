<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	$con = mysql_connect("115.156.216.95","wangchen","123");
	if (!$con) {
		die('not connected' . mysql_error());
	}
	$db_selected = mysql_select_db("db_elwg_fe_study" , $con);
	if (!$db_selected){
		die('db not selected ' . mysql_error());
	}
	$sql = "SELECT * FROM table_user WHERE username = '$username' ";
	$result = mysql_query($sql , $con);
	if (!$result){
		die('account not found' . mysql_error());
	}
	$userInfor = mysql_fetch_array($result);
	if ($password == $userInfor["password"] && $username!='') {
		header ("location:index.php");
	}
	else {
		header("location:login.php");
	}
?>



