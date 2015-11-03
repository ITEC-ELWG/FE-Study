<?php
header("Content-Type:text/html; charset=utf-8");
?>

<?php
	$con = mysql_connect("localhost","root","123");
	if (!$con) {
		die('could not connet:' . mysql_error());
		//echo "<script language='javascript'>alert('数据库连接成功！');</script>";
	}
	
	$name=$_POST['username'];
	$psw =$_POST['password'];

	$dbNAME = "db_elwg_fe_study";
	mysql_select_db($dbNAME,$con);
	mysql_query("set names gbk");
		

	$query = mysql_query("SELECT username,password FROM table_user",$con);
	$result = mysql_fetch_array($query);//获取结果集

	if ($name==$result["username"] && $psw==$result["password"]) {
		echo "<script> alert('恭喜登陆成功');window.location.href='index.php';</script>";
		setcookie("state","landed",time()+60);
	}
	else{
		echo "<script>alert('请输入正确的用户名nihao和密码123');window.location.href='login.php'</script>";
		
	}
?>



