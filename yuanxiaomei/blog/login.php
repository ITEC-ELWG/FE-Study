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
}?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login</title>
    <meta name="description" content="Login">
    <meta name="joyyuanxm" content="login for my index">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="shortcut icon" href="images/title.png">
</head>

<body>
<div class="wrapper">
    <div class="container">
        <h1>Welcome</h1>
        <form class="form" action="<?php echo ($_SERVER["PHP_SELF"]);?>">
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <input type="submit" class="btn_in" id="login-button1" value="login">
            <a class="login_btn" href="register.php">register</a>
        </form>
    </div>
</div>
</body>
</html>