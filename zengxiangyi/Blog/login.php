
<!DOCTYPE html>
<?php
	session_start();
	// store session data
	
?>
<html lang="en" class="no-js">

<head>

<meta charset="utf-8">
<title>loging</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="author" content="zxy">

<link rel="stylesheet" href="css/login.css">

</head>

<body>

	

<div class="page-container">
	<div class="main-box">
		<div class="login-box">
			<div class="login-logo">
				<h1>blog's world</h1>
			</div>
			
			<div class="login-form">
				<form action="login.php" id="login-form" method="post">
					<div class="form-group">
						<label>账　号：</label> 
						<input id="email" value="" name="account" type="text" 
						class="form-control" placeholder = "请输入账号">
					</div>
					<div class="form-group">
						<label>密　码：</label> 
						<input id="password" value="" name="password" type="password" 
						class="form-control" placeholder = "请输入密码">
					</div>

					<div class="form-group">
						<input id="remember" type="checkbox" value="true">&nbsp;记住登陆账号</label>
					</div>
					<div class="form-group space">
						<button type="submit"  id="submit-btn" 
						class="btn" >&nbsp;登&nbsp;录&nbsp </button>
						<a href="register.php"><button type="button"  id="reg-btn" 
						class="btn" >&nbsp;注&nbsp;册&nbsp </button></a>
					</div>
				</form>
			</div>
		</div>
		<?php
		if((isset($_POST["account"])) && (isset($_POST["password"]))){
			$account = $_POST["account"];
			$password = $_POST["password"];
			$_SESSION['views']= $account;

			$mysqli = new mysqli('localhost','root','123456','test');
			//检查连接是否成功
			if (mysqli_connect_errno()){
				die('Unable to connect!'). mysqli_connect_error();
			}

			$sql = "SELECT * from user where account = '$account' and password = password('$password')";
			$result = $mysqli->query($sql);
			if($result->fetch_array()){
				header ( "Location:index.php" );
			}
			else{
				echo "<p class = 'feedback'>用户名或密码错误！</p>";
			}
		}
	?>
	</div>
</div>
</body>
</html>