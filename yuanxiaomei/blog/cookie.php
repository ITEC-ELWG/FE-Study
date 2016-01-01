<?php
if (isset($_COOKIE['account'])) {
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpwd = "root";
    $dbname = "test";
    $account = $_COOKIE['account'];
    $dbc = mysqli_connect($dbhost, $dbuser, $dbpwd, $dbname);
    $sql = "SELECT * FROM user WHERE account=$account";
    $data = mysqli_query($dbc, $sql);
    if (mysqli_num_rows($data) == 0) {
        echo "没有这个账号";
        echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
    } else {
        echo"亲爱的 $account 你好";

    }

} else {
    echo "请登录";
    echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
}
?>