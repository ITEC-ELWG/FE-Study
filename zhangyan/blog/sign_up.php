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
        <form  class="frame" action="add.php" name="user-info" method="post">
            <p>
                <img src="imgs/sign_img.png" />
            </p>
            <p>
                <input type="text" name="username" placeholder="username" />
                <br/>
                <span class="mark">(必填，3-15字符长度，支持汉字、字母、数字及_)</span>
            </p>
            <p>
                <input type="text" name="password" placeholder="password" />
                <br/>
                <span class="mark">(必填，不得少于6位)</span>
            </p>
            <p>
                <input type="text" name="confirm" placeholder="confirm" />
                <br/>
                <span class="mark">(必填，不得少于6位)</span>
            </p>
            <p>
                <input name="submit" type="submit" class="btn" value="注册"/>
            </p>
        </form>
    </div>
    <script type="text/javascript">
        var mypsw = document.getElementById("password");
        var hash = hex_md5(mypsw.value);
        mypsw.setAttribute("value","hash");
    </script>
</body>

</html>