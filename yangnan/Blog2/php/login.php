<html>

<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="../css/login.css" />
</head>

<body>
	<div class="container">
	    <img src="../image/login.jpg" alt="登录图标" />

	    <form id="loginForm" action="../database/login_db.php" method="post">
	        <input type="text" name="account" placeholder="邮箱账号" />
	        <input type="password" name="password" placeholder="密码" />
	        <input class="btn-login" type="submit" value="登录" />
            <input class="btn-reg" id="register-button" type="button" value="注册" />
	    </form>
	</div>
    <script type="text/javascript" src="../js/jquery-1.8.0.min.js"></script> 
    <script type="text/javascript" src="../js/jquery.form.js"></script> 
    <script src="../js/login.js"></script>
    <script src="../js/cookie.js"></script>
</body>

</html>