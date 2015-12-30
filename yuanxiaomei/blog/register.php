<?php
header("Content-type: text/html;charset=utf-8");
if(isset($_POST["submit"])){
    include("conn.php");
    $dbhost ="localhost";
    $dbuser = "root";
    $dbpwd = "root";
    $dbname = "test";
    try{
        $mysqliObj = new mysqli($dbhost,$dbuser,$dbpwd,$dbname);
        echo"succeed";
    }
    catch(Exception $e){
        echo "Failed to get DB handle: " . $e->getMessage() . "\n";
        exit();
    }
    $mysqliObj->query("set names utf8;");
    $account=trim($_POST["account"]);
    $password=trim(sha1($_POST["password"]));
    $name=trim($_POST["username"]);
    $query = "INSERT INTO user(account, password, username) VALUE('$account', '$password', '$username')";
    $result=$mysqliObj->query($query);

    if($result){
        echo "insert success";
        echo "<META HTTP-EQUIV='Refresh' CONTENT='0; URL=login.php'>";
    }
    else{
        echo "insert fail";
    }
    $mysqliObj->close();
}

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login</title>
    <meta name="description" content="Login">
    <meta name="joyyuanxm" content="login for my index">
    <link rel="stylesheet" type="text/css" href="css/register.css" />
    <link rel="shortcut icon" href="images/title.png">
</head>

<body>
<h1 class="h_title">register</h1>
<form class="form" action="<?php echo $_SERVER['PHP_SELF'];?>">
    <input type="text" class="field" id="username" placeholder="姓名">
    <input type="text" class="field" id="account" placeholder="account">
    <input type="password" class="field" id="password" placeholder="password">
    <input type="password" class="field" id="repassword" placeholder="repassword">
    <input type="submit" class="field" id="submit" value="submit">
</form>
</body>
</html>
