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

<body>
<div class="container">
	<div class= "main">
		<div class="sign">
			<p>SIGN IN</p>
		</div>
		<form class="login-input" action="login.php" method="post">
			<div class="input-box">
				<input class="input-style" type="text" name="username" placeholder = "username"><br>
			</div>
			<div class="input-box">
				<input class="input-style" type="password" name="password" placeholder = "password"><br>
			</div>
			<div>
				<a href="./register.html"><button type="button" class="button-style">UP</button></a>
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
						
					$result = mysql_query("SELECT password FROM blog_user WHERE username = '$username'");
					$result = mysql_fetch_assoc($result);
						
					if (password_verify($password, $result['password'])) {
							
						header('Location: index.php');
					} else {
							
						echo "<p class = 'warning'>用户名或密码不正确</p>";
					}
				}
			}
		?>
	</div>
</div>
</body>

</html>