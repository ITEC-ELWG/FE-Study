<?php
	if(isset($_POST["submit"])){
		include("conn.php");
		$account=$_POST["account"];
		$password=$_POST["password"];
		$sql = "select password from user where account='$account';";
		$result=$mysqliObj->query($sql);
		if($result){
			if($result->num_rows==1){
				if($result->fetch_row()[0]==sha1($password)){
					setcookie('account',$account);
					$_SESSION['account']=$account;
					echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=index.php'>";
				}
			}
		}
		else{
			echo "account is not existing";
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
				<input type="text" name="password" placeholder="password" class="inputbox"/></br>
				<input type="submit" value="login" class="login" name="submit" /><a href="register.php"><input type="button" value="register" class="register"/></a>
			</form>
		</div>
	</body>
</html>