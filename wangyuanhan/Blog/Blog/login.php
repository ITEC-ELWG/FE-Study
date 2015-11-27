<!DOCTYPE html>

<?php

	require_once 'function.php';
	session_start();
?>

<html>

<head>
	<meta charset="UTF-8">
	<title>Sign In</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<link rel="stylesheet" href="login.css">
<script type="text/javascript" src="md5.js"></script>

<body>
<div class="container">
	<div class= "main">
		<div class="sign">
			<p>SIGN IN</p>
		</div>
		<form class="login-input" action="login.php" method="post" onsubmit="encrypt_login()">
			<div class="input-box">
				<input class="input-style" type="text" name="username" placeholder = "username"><br>
			</div>
			<div class="input-box">
				<input id="key" class="input-style" type="password" name="password" placeholder = "password"><br>
			</div>
			<div>
				<a href="./register.php"><button type="button" class="button-style">UP</button></a>
				<input class="button-style" type="submit" value="IN">
			</div>
		</form>
		<?php
			if((isset($_POST["username"])) && (isset($_POST["password"]))) {
				
				$username = $_POST['username'];
				$password = $_POST['password'];
				
				$_SESSION['view'] = $username;
				
				if (empty($username)) {
				
					echo "<p class = 'warning'>用户名不可为空</p>";
				} elseif (empty($password)) {
				
					echo "<p class = 'warning'>密码不可为空</p>";
				} else {
					
					connectDB();
					loginVerify($username, $password);
				}
			}
		?>
	</div>
</div>
</body>

</html>