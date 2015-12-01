<?php
	if(isset($_POST["submit"])){
		include("conn.php");
		$account=trim($_POST["account"]);
		$password=trim($_POST["password"]);
		$sql = "select * from user where account='$account';";
		$result=$mysqliObj->query($sql);
		if($result){
			if($result->num_rows==1){
				$data = $result->fetch_row();
				echo $data[2]."<br>".sha1($password);
				if(!strcmp(stripslashes($data[2]),sha1($password))){
					$userId=$data[0];
					$userName=$data[1];
					setcookie('userId',$userId);
					$_SESSION['userId']=$userId;
					setcookie('userName',$userName);
					$_SESSION['userName']=$userName;
					echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=index.php'>";
				}
			}
		}
		$mysqliObj->close();
	}
	
	
?>
<!DOCTYPE html>
<html>
	<head>
		<title>login page</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="Content-Type" content="text/html, charset=UTF-8" />
		<link rel="stylesheet" type="text/css" href="css\login.css">
	</head>
	<body>
		<div class="content" >
			<h1 class="title">LOGIN IN</h1>
			<form class="form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
				<input type="text" name="account" placeholder="username" class="inputbox" autofocus="true"/></br>
				<input type="text" name="password" placeholder="password" class="inputbox" id="password"/></br>
				<input type="submit" value="login" class="login" name="submit" id="login" /><a href="register.php"><input type="button" value="register" class="register"/></a>
			</form>
		</div>
		<script type="text/javascript" src="js\sha1.js"></script>
		<script type="text/javascript" src="js\login.js"></script>
	</body>
</html>