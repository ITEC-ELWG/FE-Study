<?php
//设置编码形式，不需要再加HTML的标签
header("Content-type: text/html; charset=utf-8"); 
$outlogInput = $_POST['outlog'];
if ($outlogInput == '退出登录')
{
	//清楚cookies信息
	setcookie("username","",time()-3600);
	header('Location:index.php');
}
?>