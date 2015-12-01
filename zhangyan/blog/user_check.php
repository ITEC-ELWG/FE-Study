<?php
header("Content-Type:text/html; charset=utf-8");
?>
<?php
    session_start();
    if(isset($_POST["username"]) && isset($_POST["password"]))
    {
        $user = $_POST["username"];
        $psw = $_POST["password"];
        $psw = MD5($psw);
        try{
            mysql_connect("localhost","root","root");
        }catch (Exception $e){
            echo "数据库连接失败".$e->getMessage();
            exit;
        }
        mysql_select_db("blog");
        mysql_query("set names 'utf8'");
        $sql = "select username,password from blog_form where username = '$_POST[username]' and password = '$psw'";
        $result = mysql_query($sql);
        $num = mysql_num_rows($result);
        if($num)
        {
            session_regenerate_id(ture);
            $_SESSION['username']= $user;
            echo "<script>window.location.replace('index.php')</script>";
        }
        else
        {
            echo "<script>alert('用户名或密码不正确！');history.go(-1);</script>";
        }
            
    }
    else
    {
        echo "<script>alert('账号密码不能为空'); history.go(-1);</script>";
    }


?>



