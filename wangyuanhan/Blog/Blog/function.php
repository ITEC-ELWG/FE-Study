<?php

require_once 'config.php';

function connectDB() {
	
	$db = @mysql_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD);
	if (!$db) {

		die("<p class = 'warning'>连接数据库失败 请重试</p>");
	}
	mysql_select_db('yxdatabase');
}

function getNum($result) {
	
	return mysql_num_rows($result);
}