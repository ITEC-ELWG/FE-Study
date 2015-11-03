<!DocType HTML>
<html lang="zh-cmn-hans">

<head>
<meta charset="utf-8">	
<meta name="author" content="">
<meta name="copyright" content="">
<meta name="keywords" content=""/>
<meta name="description" content=""/>

<title>登陆界面</title>
<link rel="stylesheet" type="text/css" href="../css/reset.css">
<link rel="stylesheet" type="text/css" href="../css/color.css">

	

</head>

<body class="bgc">
<div class="wrapper">
	<img src="../image/login.gif" title="login"/>
	<p class="word-color">请输入用户名和密码之后登录</p>
</div>

<div>
	<form class="wrapper" action="login_validate.php" method="post" target="_blank">
	<div>用户名：<input  type="text" name="username"  placeholder="username" class="formtext"  /></div>
    <div>密 &nbsp码：<input type="password" name="password"  placeholder="password" class="formtext" /></div>
	<div><input type="submit" value=" 登   录 " class="formsub"></div>	
	</form>
</div>

</body>

</html>