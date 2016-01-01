<?php
if (isset($_POST['action']) && $_POST['action'] == 'submitted') {
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpwd = "root";
    $dbname = "test";
    try {
        $mysqliObj = new mysqli($dbhost, $dbuser, $dbpwd, $dbname);
    } catch (Exception $e) {
        echo "Failed to get DB handle: " . $e->getMessage() . "\n";
        exit();
    }
    $mysqliObj->query("set names utf-8;");
    $account = $_POST["account"];
//    $password = (sha1($_POST["password"]));
    //使用加密之后密码会不对不知道为什么先不加
    $password = $_POST["password"];
    if (!empty($account) && !empty($password)) {
        $dbc = mysqli_connect($dbhost, $dbuser, $dbpwd, $dbname);
        $sql = "SELECT * FROM user WHERE account=$account";
        $data = mysqli_query($dbc, $sql);
        if (mysqli_num_rows($data) == 0) {
            echo "没有这个账号";
            echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
        } else {
            $pwd = "SELECT * FROM user WHERE password =$password";
            $result = mysqli_query($dbc, $pwd);
            if (mysqli_num_rows($result) == 0) {
                echo "密码错误";
                echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
            } else {
                setcookie("account", $account, time() + 3600);
                setcookie("password", $password, time() + 3600);
                echo "登录成功";
                echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=index.php'>";
            }
        }
        $mysqliObj->close();
    } else {
        echo "输入为空";
        echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
    }

} else {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Login</title>
        <meta name="description" content="Login">
        <meta name="joyyuanxm" content="login for my index">
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link rel="shortcut icon" href="images/title.png">
    </head>

    <body>
    <div class="wrapper">
        <div class="container">
            <h1>Welcome</h1>

            <form class="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                <input type="text" name="account" placeholder="account">
                <input type="password" name="password" placeholder="password">
                <input type="submit" class="btn_in" value="submit">
                <input type="hidden" name="action" value="submitted">
                <a class="login_btn" href="register.php">register</a>
            </form>
        </div>
    </div>
    </body>
    </html>
    <?php
}
?>