<?php
header("Content-Type:text/html; charset=utf-8");
?>

<?php
    $name=$_POST['username'];
    $psw =$_POST['password'];

    if (!$name || !$psw) {
        echo "<script> alert('账号和密码不可为空');window.location.href='login.php';</script>";
        exit;
    }

    $con = mysql_connect("localhost","root","root");
    if (!$con) {
        die('could not connet:' . mysql_error());
        /*die()函数输出一条消息，并退出当前脚本。
        */
    }
    
    $dbNAME = "blog";
    mysql_select_db($dbNAME,$con);
    mysql_query("set names utf-8");

    $query = mysql_query("SELECT *  FROM `blog`.`blog_form` WHERE id='$name'",$con);
    $result = mysql_fetch_array($query);//获取结果集

    if ($name==$result["id"] && $psw==$result["password"]) {
        
        echo "<script>window.location.href='index.php';</script>";
        setcookie("state", "login", time() + 3600);
    }
    else{
        echo "<script>alert('账号或密码错误');window.location.href='login.php'</script>";
    }
    mysql_close($con);
?>



