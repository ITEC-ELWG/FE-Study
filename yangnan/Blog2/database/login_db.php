<?php
require 'mysql_connect.php';

$exist  = 0;
$result = $conn->query("SELECT account, name, password FROM user");
while ($row = $result->fetch_array()) {
    if (!strcmp($_POST["account"], $row['account'])) { //账号相同
        $exist++;
        if (!strcmp(MD5($_POST["password"]), $row['password'])) { //密码相同
            echo "登录成功";
        } else
            echo "密码错误";
        break;
    }
}
if ($exist == 0) {
    echo "该用户名不存在";
}
$conn->close();
?>