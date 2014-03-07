<html>
<body>

<?php
$user1 =  $_GET["user"];
$pswrd1 =  $_GET["password"]; 
$con=mysql_connect("115.156.216.95:3306","liqinglin","123");
if(!$con){
	die('Could not connect: ' . mysql_error());
}

mysql_select_db("db_elwg_fe_study",$con);

$result = mysql_query("select * from table_user where username='liqinglin' ");
$row = mysql_fetch_array($result);

if( $user1 == $row["username"] && $pswrd1 == $row["password"]){
	echo "<script>location.href='index.php';</script>";}
else echo "user and password don't match";

?>
</body>
</html>