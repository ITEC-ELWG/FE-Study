<!DocType HTML>

<html>
<head>
<meta charset="utf-8"/>

<meta title="php form check"/>

<meta name="author" content="">
<meta name="copyright" content="">
<meta name="description" content="">
<meta name="keywords" content="">

	
</head>

<?php
//用$_POST获取表单的输入值
$usernameInput = $_POST['username'];
$passwordInput = $_POST['password'];

//系统提示mysql_connect()即将被移除，所以用myaqli_connect()代替
$con = mysql_connect("127.0.0.1","liugui","123");
if (!$con)
{
	die('colud not connect to the server:'.mysql_error());
}


mysql_select_db('mybloglogin',$con);
//必须用mysql-query包装起来之后才能用数据库查询语言
$result = mysql_query("SELECT username,password FROM login",$con);
//直接返回的并不是内容，要用数组的方式打开
$resultArray = mysql_fetch_array($result);


if (($resultArray['username'] == $usernameInput) && ($resultArray['password'] == $passwordInput))
{
    echo '<meta http-equiv="refresh" content="0;url=liugui.php" />';
    setcookie("username",$usernameInput,time()+3600);
    setcookie("password",$passwordInput,time()+3600);
}
else
{
	//使用echo弹开新的页面，并且提示信息，然后刷新页面到指定的URL
	echo "<h1>用户名或密码错误，请返回重新输入！3秒种后跳转！</h1>";
	echo '<meta http-equiv="refresh" content="3;url=index.php"/>';
}

//设置cookies

?>

</html>