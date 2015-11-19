<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>register</title>
    <link rel="stylesheet" type="text/css" href="register.css" />
</head>

<body>
    <?php
        header('Cache-control: private, must-revalidate');
        session_cache_limiter('private, must-revalidate');
        session_start();
    ?>
    <div class="login-background">
        <div class="login-wrapper">
            <div class="logo">
                <a href="register.html">
                    <i class="logo-img"></i>
                </a>
            </div>
            <form class="login-main" action="register.php" method="post">
                <div class="username-wrapper">
                    <input type="text" name="username" placeholder="邮箱" />
                </div>
                <div class="password-wrapper">
                    <input type="password" name="password" placeholder="密码（数字）" />
                </div>
                <div class="re-password-wrapper">
                    <input type="password" name="re-password" placeholder="确认密码" />
                </div>
                <div class="regbtn-wrapper">
                    <input type="submit" name="reg" class="regbtn" value="确认注册">
                </div>
                <?php
                    if((isset($_POST["username"])) && (isset($_POST["password"]))) {
                        $username = $_POST["username"];
                        $password = $_POST["password"];
                        $re_password = $_POST["re-password"];
                        if (!$username || !$password) {
                            echo "<p>用户名或密码不能为空！</p>";
                        }
                        else if (filter_var($username, FILTER_VALIDATE_EMAIL) === false || filter_var($password, FILTER_VALIDATE_INT) === false) {
                            echo "<p>输入不合法，请重新输入！</p>";
                        }
                        else {
                            if ($password == $re_password) {
                                $con = new mysqli("localhost","root","","test");
                                if (mysqli_connect_errno()) {
                                    die('Could not connect: '. mysqli_connect_error());
                                }
                                $pswHash = password_hash($password,PASSWORD_BCRYPT);
                                $query = $con->query("INSERT INTO test (username, password) VALUES ('$username', '$pswHash')");

                                if ($query) {
                                    header("refresh:1;url = login.php");
                                }
                                else {
                                    echo "<p>该账户已经存在！</p>";
                                }
                            }
                            else {
                                echo "<p>密码输入失败！</p>";
                            }
                        }
                    }
                ?>
            </form>
            <p class="info"></p>
        </div>
    </div>
</body>

</html>