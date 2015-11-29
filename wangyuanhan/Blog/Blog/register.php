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

<body>
<div class="container">
	<div class= "main">
		<div class="sign">
			<p>SIGN UP</p>
		</div>
		<div class="login">
			<form class="login-input" action="register.php" method="post">
				<div class="input-box">
					<input class="input-style" type="text" name="username" placeholder = "username"><br>
				</div>
				<div class="input-box">
					<input class="input-style" type="password" name="password" placeholder = "password"><br>
				</div>
				<div>
					<input class="button-style" type="submit" value="UP">
				</div>
			</form>
			<?php
				if((isset($_POST["username"])) && (isset($_POST["password"]))) {
					
					$username = $_POST['username'];
					$password = $_POST['password'];
						
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
					} else {
						
						$username = filter_var($username, FILTER_SANITIZE_EMAIL);
						connectDB();
						
						$password = password_hash($password, PASSWORD_DEFAULT);
						
						$result = mysql_query("SELECT username FROM blog_user WHERE username = '$username'");
						$result = mysql_fetch_assoc($result);
						
						if ($username == $result['username']) {
						
							echo "<p class = 'warning'>该用户名已被注册</p>";
						} else {
						
							$username = strval($username);
							$password = strval($password);
							
							mysql_query("INSERT INTO blog_user(username, password) VALUES ('$username', '$password')");
						
							if (mysql_errno()) {
						
								echo mysql_error();
							} else {
						
								header('Location: login.php');
							}
						}
					}
				}
			?>
		</div>
	</div>
</div>
</body>

</html>