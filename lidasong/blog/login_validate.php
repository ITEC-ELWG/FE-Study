<?php
setcookie("username", "lidasong", time() + 3600);
setcookie("password", "elwg", time() + 3600); //设置cookie
?>              
<?php
$user_name = $_POST["username"];
$pass_word = $_POST["password"];
$con       = mysql_connect("115.156.216.95", "lidasong", "123");
if (!$con) {
                die('Could not connect: ' . mysql_error());
}
$db_selected = mysql_select_db('db_elwg_fe_study', $con);
if (!$db_selected) {
                die('Could not connect: ' . mysql_error());
}
$result = mysql_query("SELECT * FROM table_user WHERE username='lidasong'");
if (!$result) {
                $message = 'Invalid query: ' . mysql_error() . "\n";
                die($message);
}
$row = mysql_fetch_array($result, MYSQL_ASSOC);
if ($row["username"] == $user_name && $row["password"] == $pass_word) {
                //printf( "username:%s password:%s",$row["username"],$row["password"]);
                echo '<meta http-equiv="refresh" content="1;url=index.php" />';
} else {
                printf("username:%s password:%s", $row["username"], $row["password"]);
}
mysql_close($con);
?>