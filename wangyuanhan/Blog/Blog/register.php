<!DOCTYPE html>

<?php

	require_once 'function.php';
?>

<html>

<head>
	<meta charset="UTF-8">
	<title>Sig Up</title>
</head>

<link rel="stylesheet" type="text/css" href="register.css">
<script type="text/javascript" src="md5.js"></script>

<body>
<div class="container">
	<div class= "main">
		<div class="sign">
			<p>SIGN UP</p>
		</div>
		<div class="login">
			<form class="login-input" action="register.php" method="post"  onsubmit="encrypt_register()">
				<div class="input-box">
					<input class="input-style" type="text" name="username" placeholder = "username"><br>
				</div>
				<div class="input-box">
					<input id="key" class="input-style" type="password" name="password" placeholder = "password"><br>
				</div>
				<div class="input-box">
					<input id="key_confirm" class="input-style" type="password" name="password_confirm" placeholder = "password confirm"><br>
				</div>
				<div>
					<input class="button-style" type="submit" value="UP">
				</div>
			</form>
			<?php
				if((isset($_POST["username"])) && (isset($_POST["password"]))) {
					
					$username = $_POST['username'];
					$password = $_POST['password'];
					$password_confirm = $_POST['password_confirm'];
						
					if (empty($username)) {
				
						echo "<p class = 'warning'>用户名不可为空</p>";
					} elseif (empty($password)) {
					
						echo "<p class = 'warning'>密码不可为空</p>";
					} elseif ((!filter_var($username, FILTER_SANITIZE_EMAIL)) ||
							  (strlen($username) != strlen(filter_var($username, FILTER_SANITIZE_EMAIL)))) {
						
						echo "<p class = 'warning'>用户名不合规范</p>";
					} elseif ((!filter_var($password, FILTER_SANITIZE_EMAIL)) ||
							  (strlen($password) != strlen(filter_var($password, FILTER_SANITIZE_EMAIL)))) {
						
						echo "<p class = 'warning'>密码不合规范</p>";
					} elseif ($password != $password_confirm) {

						echo "<p class = 'warning'>两次输入密码不一致</p>";
					} else {
						
						connectDB();
						registerVerify(strval($username), strval($password));
					}
				}
			?>
		</div>
	</div>
</div>
</body>

</html>