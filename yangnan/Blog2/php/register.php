<html>

<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="../css/register.css" />
</head>

<body>
        <form id="registerForm" action="../database/register_db.php" method="post">
			<div>
				<label>*请输入电子邮箱：</label>
				<input id="account" type="email" name="account" />
				<span id="account-tips"/>
			</div>
			<div>
                <label>请输入用户名：</label>
				<input id="name" type="text" name="name" />
				<span id="name-tips"/>
			</div>
			<div>
                <label>*请输入密码：</label>
				<input id="password" type="password" name="password" />
				<span id="psw-tips"/>
			</div>
			<div>
                    <label>*请再次输入密码：</label>
					<input id="pwd-again" type="password" name="pwdAgain" />
				<div id="pwd-again-img"></div>
                <span id="pwd-again-tips" />
			</div>
            <input class="register-button" type="submit" value="注册" />
        </form>
	<script type="text/javascript" src="../js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="../js/jquery.form.js"></script>
	<script type="text/javascript" src="../js/register.js"></script>
</body>

</html>