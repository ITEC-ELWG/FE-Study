<?php
header("Content-Type:text/html; charset=utf-8");
?>
<?php
    if(isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["confirm"]))
    {
        $user = $_POST["username"];
        $psw = $_POST["password"];
        $psw_confirm = $_POST["confirm"];
        if(!preg_match('/^[\w\x80-\xff]{3,15}$/', $user)){
        echo "<script>alert('用户名不符合规范'); history.go(-1);</script>";
        exit;
        }
        if(strlen($psw) < 6){
        echo "<script>alert('密码长度不符合规范'); history.go(-1);</script>";
        exit;
        }
        if($user == "" || $psw == "" || $psw_confirm == "")
        {
            echo "<script>alert('请确认信息完整性！'); history.go(-1);</script>";
            exit;
        }
        else
        {
            if($psw == $psw_confirm)
            {
                try{
                    mysql_connect("localhost","root","root");
                }catch (Exception $e){
                    echo "数据库连接失败".$e->getMessage();
                    exit;
                }
                //mysql_connect("localhost","root","root");   //连接数据库
                mysql_select_db("blog");  //选择数据库
                mysql_query("set names 'utf8'"); //设定字符集
                $psw = MD5($psw);
                $sql = "select username from blog_form where username = '$_POST[username]'"; //SQL语句
                $result = mysql_query($sql);    //执行SQL语句
                $num = mysql_num_rows($result); //统计执行结果影响的行数
                if($num)    //如果已经存在该用户
                {
                    echo "<script>alert('用户名已存在'); history.go(-1);</script>";
                    exit;
                }
                else    //不存在当前注册用户名称
                {
                    $sql_insert = "insert into blog_form (username,password) values('$_POST[username]','$psw')";
                    $res_insert = mysql_query($sql_insert);
                    //$num_insert = mysql_num_rows($res_insert);
                    if($res_insert)
                    {
                        
                        echo "<script>alert('注册成功！');window.location.replace('login.php')</script>";
                        exit; 
                    }
                    else
                    {
                        echo "<script>alert('系统繁忙，请稍候！'); history.go(-1);</script>";
                        exit;
                    }
                }
            }
            else
            {
                echo "<script>alert('密码不一致！'); history.go(-1);</script>";
                exit;
            }
        }
    }
    else
    {
        echo "<script>alert('信息不完整！'); history.go(-1);</script>";
        exit;
    }
?>