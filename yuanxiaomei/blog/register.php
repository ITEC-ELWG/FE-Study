<?php header("content-type:text/html; charset=utf-8"); ?>
<?php

$con=mysqli_connect("localhost","root","root","test");
// Check connection
if (mysqli_connect_errno($con))
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}else{
    echo"success";
}
$name=$_POST["name"];
$account=$_POST["account"];
$password=$_POST["password"];
$hashpw=md5($password);
if ($account && $password){
    $sql = "SELECT * FROM user WHERE user='$account'";
    $res = mysqli_query($mysqli,$sql);
    $rows=mysqli_num_rows($res);
    if($rows){
        echo "已有人注册此名，请重新选择名字!";
        echo "<a href=register.html>返回</a>";
        exit;
    }
    else{
        $ins = "insert into uesr values('$name','$account','$hashpw')";
        $result = mysqli_query($mysqli,$ins);
        if($result){
            echo "祝贺你，注册成功!";
            echo "<a href=login.html>登入</a>";
            exit;}
    }
    mysqli_free_result($res);
    mysqli_close($mysqli);
}
?>
