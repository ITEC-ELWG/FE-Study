<!DOCTYPE html>
<?php
    session_start();
?>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <link rel="stylesheet" type="text/css" href="login.css" />
</head>

<body>
    <div class="login-background">
        <div class="login-wrapper">
            <div class="logo">
                <a href="login.html">
                    <i class="logo-img"></i>
                </a>
            </div>
            <form class="login-main" action="login.php" method="post">
                <div class="username-wrapper">
                    <input type="text" name="username" placeholder="邮箱" />
                </div>
                <div class="password-wrapper">
                    <input type="password" name="password" placeholder="密码" />
                </div>
                <div class="signinbtn-wrapper">
                        <button type="submit" class="signinbtn">登录</button>
                    <a href="register.php" target="_top">
                        <button class="regbtn">注册</button>
                    </a>
                </div>
                <?php
                //session_destroy();
                    if ((isset($_POST["username"])) && (isset($_POST["password"]))) {
                        $username = $_POST["username"];
                        $password = $_POST["password"];
                        $_SESSION['views'] = $username;
                        if (!$username || !$password) {
                            echo "<p>用户名或密码不能为空</p>";
                        }
                        else if (filter_var($username, FILTER_VALIDATE_EMAIL) === false || filter_var($password, FILTER_VALIDATE_INT) === false) {
                            echo "<p>输入不合法，请重新输入！</p>";
                        }
                        else {
                            $con = new mysqli("localhost","root","","test");
                            if (mysqli_connect_errno()) {
                                die('Could not connect: '. mysqli_connect_error());
                            }
                            //$pswHash = password_hash($password,PASSWORD_BCRYPT);
                            $sql = "SELECT password from test where username = '$username'";
                            $result = $con->query($sql);
                            if ($result) {
                                if ($result->num_rows == 1) {
                                    if (password_verify($password, $result->fetch_row()[0])) {
                                        header("Location:index.php");
                                    }
                                }
                            }
                            else {
                                echo "<p>用户名或密码错误</p>";
                            }
                        }
                    }
                ?>
            </form>
        </div>
    </div>
</body>

</html>
