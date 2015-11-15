<?php
header("Content-Type:text/html; charset=utf-8");
?>
<?php
    $name=$_POST['username'];
    $psw =$_POST['password'];

    if (!$name ||  !$psw) {
        echo "<script> alert('账号和密码不可为空');window.location.href='sign_up.php';</script>";
        exit;
    }

    $con = mysql_connect("localhost","root","root");

    if (!$con) {
        die('could not connet:'.mysql_error());
    }

    $dbNAME = "blog";
    mysql_select_db($dbNAME,$con);
    mysql_query("set names utf-8");
        

    $query = mysql_query("INSERT INTO blog_form(id, password) VALUES ( '$name' , '$psw')");
    
   if ($query) {
        echo "<script> alert('恭喜注册成功');window.location.href='login.php';</script>";
    }
    else{
       echo "<script>alert('场面太火爆，晚点再来注册吧');window.location.href='sign_up.php'</script>";
    }
    mysql_close($con);
?>



