<?php
	header("Content-type: text/html;charset=utf-8");
	if(isset($_POST["submit"])){
		include("conn.php");
		$account=trim($_POST["account"]);
		$password=trim(sha1($_POST["password"]));
		$name=trim($_POST["realname"]);
		$sql = "insert into user (account,password,name) values ('$account','$password','$name');";
		$result=$mysqliObj->query($sql);
		if($result){
			echo "insert success";
			echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
		}
		else{
			echo "insert fail";
		}
		$mysqliObj->close();
	}
	
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Register page</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<meta http-equiv="Content-Type" content="text/html, charset=UTF-8" />
		<link rel="stylesheet" type="text/css" href="css\register.css">
	</head>
	<body>
		<div class="content" >
			<form class="form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
				<input type="text" name="account" id="account" placeholder="username" class="inputbox" autofocus="true"/><span class="hint"></span><br>
				<input type="password" name="password" id="password" placeholder="password" class="inputbox"/><span class="hint"></span></br>
				<input type="password" name="repassword" id="repassword" placeholder="repassword" class="inputbox"/><span class="hint"></span></br>
				<input type="text" name="realname" id="realname" placeholder="name" class="inputbox"/><span class="hint"></span></br>
				<input type="submit" value="ok" name="submit" class="button ok" id="submit"/><input type="reset" value="cancel" class="button cancel"/>
			</form>
		</div>
		<script type="text/javascript" src="js\sha1.js"></script>
		<script type="text/javascript" src="js\register.js"></script>

	</body>
</html>