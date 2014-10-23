<!DocType HTML>
<html>
<head>
<meta chaeset="utf-8"/>

<meta title="php form check"/>

<meta name="author" content="">
<meta name="copyright" content="">
<meta name="description" content="">
<meta name="keywords" content="">

	
</head>

<?php
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
$re = mysql_fetch_array($result);
echo $re['username'];
echo $re['password'];


if (($re['username'] == $usernameInput) && ($re['password'] == $passwordInput))
	{echo "correct!";
    echo '<meta http-equiv="refresh" content="0;url=liugui.php" />';}
else
{
	echo "wrong";
}
?>

</html>