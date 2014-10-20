<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>LogIn</title>
    <link type="text/css" rel="stylesheet" href="style/reset.css">
    <link type="text/css" rel="stylesheet" href="style/main.css">
</head>

<body>
    <div class="headerBar">
        <div class="logoBar red_logo">
            <!-- <span class="fl blog_name">刘苇的 blog</span> -->
            <div class="logo fl">
                <a href="#">
                    <img src="img/logo1.png" alt="logo">
                </a>
            </div>
            <h3 class="welcome_title">欢迎登录</h3>
        </div>
    </div>
    <form action="login_validate.php" method="post">
        <div class="regBox">
            <div class="login_cont">
                <ul class="login">
                    <li>
                        <span class="reg_item" ><i>*</i>账户名：</span>
                        <div class="input_item">
                            <input type="text"  name = "username" class="login_input user_icon">
                        </div>
                    </li>
                    <li>
                        <span class="reg_item" ><i>*</i>密码：</span>
                        <div class="input_item" >
                            <input type="password" name = "password"  class="login_input user_icon">
                        </div>
                    </li>
                    <li class="autoLogin">
                        <span class="reg_item">&nbsp;</span>
                        <input type="checkbox" id="t1" name = "checkbox" class="checked">
                        <label for="t1">我同意什么什么条款</label>
                    </li>
                    <li>
                        <span class="reg_item">&nbsp;</span>
                        <input type="submit" value="" name="submit" class="login_btn" 
                        onclick="window.open('blog.php','_self')">
                    </li>
                </ul>

            </div>
        </div>
    </form>

    <div class="hr_25"></div>
</body>

</html>
