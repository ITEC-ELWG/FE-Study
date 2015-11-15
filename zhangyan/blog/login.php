<!DOCTYPE HTML PUBLIC
     "-//W3C//DTD XHTML 1.0 Strict//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <title>Login Page</title>
    <link href="css/login_css.css" rel="stylesheet" type="text/css" />
    <link rel="short icon" href="imgs/sign_in.png" type="image/x-icon">
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
                <input type="text" name="password" placeholder="password" />
            </p>
            <p>
                <input name="Signin" type="submit" class="btn" value="登陆"></input>
            </p>

        </form>
        <form  class="frame" action="sign_up.php" name="sign_up" method="post">
            <p>
                <input name="Signup" type="submit" class="btn" value="注册"></input>
            </p>
  
        </form>


    </div>
</body>

</html>