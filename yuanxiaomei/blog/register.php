<?php
header("Content-type: text/html;charset=utf-8");
if (isset($_POST['action']) && $_POST['action'] == 'submitted') {
    //链接数据库
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
    $password = $_POST["password"];
    $name = $_POST["username"];

    //empty函数检查内容是否为空，isset是无效的，空也是被设置
    if (!empty($account) && !empty($password) && !empty($name)) {
        $dbc = mysqli_connect($dbhost, $dbuser, $dbpwd, $dbname);
        $sql = "SELECT * FROM user WHERE account = $account";
        $data = mysqli_query($dbc, $sql);
        //检查账号是否重复，使用mysqli_num_rows函数
        if (mysqli_num_rows($data) == 0) {
            $query = "INSERT INTO user(account, password, username) VALUE('$account', '$password', '$name')";
            $result = $mysqliObj->query($query);
            if ($result) {
                echo "注册成功";
                //要怎么让这句话停留的时间长一些
                echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
            } else {
                echo "insert fail";
            }
        } else {
            echo "账号已经被占用";
            echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=register.php'>";
        }
        $mysqliObj->close();
    } else {
        echo "请填写内后再提交";
        echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=register.php'>";
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
        <link rel="stylesheet" type="text/css" href="css/register.css"/>
        <link rel="shortcut icon" href="images/title.png">
    </head>

    <body>
    <h1 class="h_title">register</h1>

    <form class="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <input type="text" class="field" name="username" id="username" placeholder="姓名（Eanglish）">
        <input type="text" class="field" name="account" id="account" placeholder="account（6位数字）">
        <input type="password" class="field" name="password" id="password" placeholder="password">
        <input type="password" class="field" id="repassword" id="repassword" placeholder="repassword">
        <input type="hidden" name="action" value="submitted">
        <input type="submit" class="field" id="submit" value="submit">
    </form>
    </body>
    </html>
    <?php
}
?>