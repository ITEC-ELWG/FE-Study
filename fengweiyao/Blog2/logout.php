<?php
require_once 'includes/config.php';

$user->logout();

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>logout</title>
	<link rel="stylesheet" type="text/css" href="login.css" >
</head>
<body style='color: white'>
<?php 
echo 'your username:'.$_SESSION['username']."<br />";
?>
You have logged out.
</body>
</html>