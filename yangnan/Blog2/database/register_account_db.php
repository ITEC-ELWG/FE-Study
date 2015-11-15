<?php
require 'mysql_connect.php';

//不存在相同用户名则添加数据
$exist    = 0;
$result = $conn->query("SELECT account FROM user");
while ($row = $result->fetch_array()) {
    if (!strcmp($_POST["account"], $row['account'])) {
        $exist++;
        break;
    }
}
if ($exist == 0) {
    echo "not used";
} else {
    echo "该账号已被注册，请更换！";
}
$conn->close();
?>