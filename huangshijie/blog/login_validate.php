<?php
$username = $_POST['username'];
$password = $_POST['password'];

$con = mysql_connect("115.156.216.95", "lidasong", "123");
if (!$con) {
    die('Could not connect: ' . mysql_error());
}
$db_selected = mysql_select_db('db_elwg_fe_study', $con);
if (!$db_selected) {
    die('Could not connect: ' . mysql_error());
}

$query = mysql_query('select * from table_user where username = "'.$username.'" and password = "'.$password.'"', $con);
//echo $query;
$result = mysql_fetch_assoc($query);
//echo count($result);
//print_r($result);
if(count($result) >= 3) {
	setcookie("username", $username, time() + 3600);
    setcookie("password", $password, time() + 3600); //设置cookie
    echo '<meta http-equiv="refresh" content="0;url=index.php" />';
} else {
	echo "<h1>validated information error!!!</h1>";
	echo '<meta http-equiv="refresh" content="5;url=login.html" />';
}
?>