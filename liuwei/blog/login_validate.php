<?php
$username = $_POST['username'];
$password = $_POST['password'];

// echo $username."<br>";
// echo $password;

//连接数据库
mysql_connect('127.0.0.1', 'root', '123');
mysql_select_db('db_elwg_fe_study');
mysql_query("set names 'utf8'");
//在这里进行数据查询
$res = mysql_query('select * from table_user limit 1');
$row = mysql_fetch_array($res,MYSQL_ASSOC);

if(($row['username']==$username)&&($row['password']==$password)){
	echo '<meta http-equiv="refresh" content="0;url=index.php" />';
	setcookie("username", $username);
	setcookie("password", $password);}
else{
	echo '<meta http-equiv="refresh" content="2;url=login.php" />';
} 
	
