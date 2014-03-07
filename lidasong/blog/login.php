<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
<title>Login Page</title>
<link  href="css/login_css.css" rel="stylesheet"  media="screen" type="text/css"/>
<script type="text/javascript"  src="js/login_js.js"></script>
</head>
<body >
<form action="login_validate.php" method="post">
    <div class="login">
        <input class="import" type="text" name="username" id="username" value="username" onclick="this.value=''">   
        </input>
            <br/>
            <br/>
            <input type="password" name="password" value="password" id="password" onclick="this.value=''">
            </input>
            <br/>
            <br/>
    <input class="login_butt" type="submit" value="Submit"></input>
    </div>
    </form>
</body>
</html>