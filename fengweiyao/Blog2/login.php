<?php
require_once 'includes/config.php';

if ($user->is_logged_in()){
    header('Location: index.php');
}
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>login</title>
	<link rel="stylesheet" type="text/css" href="login.css" >
</head>
<body>
	<div class="login">
        <?php 
        if (isset($_POST['submit'])){
            $username = trim($_POST['username']);
            $password = trim($_POST['password']);
            
           if($user->login($username,$password)){ 
                header('Location: index.php');
                exit();
            }else{
                $message = "<p class='error'>Wrong username or password.</p>";
            }
        }
        if (isset($message)){
            echo $message;
        }
        ?>
		<h1>Login</h1>
		<form action="" method="POST">
			<input type="text" name="username" placeholder="用户名" required="required" />
			<input type="password" name="password" placeholder="密码" required />
			<button type="submit" class="btn" name='submit'>登陆</button>
		</form>
	</div>
</body>
</html>
