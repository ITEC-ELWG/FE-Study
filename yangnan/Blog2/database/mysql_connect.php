<?php
//header('Content-Type: text/html; charset=utf-8');
//连接服务器数据库
$servername = "localhost";
$username = "root";
$password = "itec_nan";
$dbname = "test";

//面向对象的写法
//创建连接
$conn=new mysqli($servername,$username,$password,$dbname);
//检测连接
if ($conn->connect_error) {
   die("数据库连接失败：".$conn->connect_error);
}

//$conn->query("set sql_mode=''");//防止新版本的MySQL对字段的严格检查而报错
$conn->query("set names 'utf8'") ; //设置传输使用字符集防止乱码。
?>