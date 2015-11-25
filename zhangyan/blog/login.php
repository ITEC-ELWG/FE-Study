<!DOCTYPE HTML PUBLIC
     "-//W3C//DTD XHTML 1.0 Strict//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
     

<html>

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>Login Page</title>
    <link href="css/login_css.css" rel="stylesheet" type="text/css" />
    <link rel="short icon" href="imgs/sign_in.png" type="image/x-icon">
    <script type="text/javascript" src="md5.js"></script>
</head>

<body>
    <div class="container">
        <form  class="frame" action="user_check.php" name="user_check" method="post">
            <p>
                <img src="imgs/sign_img.png" />
            </p>
            <p>
                <input type="text" name="username" placeholder="username" />
            </p>
            <p>
                <input type="text" name="password" placeholder="password" id="password" />
            </p>
            <p>
                <input name="Signin" type="submit" class="btn" value="登陆"></input>
            </p>
            <p>
                <a class="btn" href="sign_up.php">注册</a>
            </p>

        </form>
    </div>
        <script type="text/javascript">
        var mypsw = document.getElementById("password");
        var hash = hex_md5(mypsw);
        mypsw.setAttribute("value","hash");
    </script>
</body>

</html>