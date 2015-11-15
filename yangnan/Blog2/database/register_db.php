<?php
require 'mysql_connect.php';

$sql = "INSERT INTO user (account,name,password) VALUES ('$_POST[account]','$_POST[name]',MD5('$_POST[password]'))";
if (!$conn->query($sql)) {
    die('数据添加错误: '.$conn->error);
} else {
    echo "注册成功";
}

$conn->close();
?>