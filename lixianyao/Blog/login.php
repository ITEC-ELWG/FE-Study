<!doctype html>
<?php
    session_start();
    header("content-type:text/html; charset=utf-8");
    unset($_SESSION['loin_In']);
?>
<html>

<head>
    <title> Login </title>
    <link rel="stylesheet" type="text/css" href="css/login_style.css" />
</head>

<body>
<div class="login-table table_width">
    <div class="login-table-head table_width">
        <img src="images/login.png" />
    </div>

    <div class="login-table-body table_width">
        <form class="login-input" action="login.php" method="post">
            <div ><!--账户输入框-->
                <input name="account" type="text" placeholder="account"/>
            </div>

            <div><!--密码输入框-->
                <input name="password" type="password" placeholder="password"/>
            </div>

            <div><!--注册/登录按键-->
                <a href="register.php">
                    <button type="button" class="btn btn_register"> Register </button>
                </a>

                <button type="submit" class="btn btn_login float-xs-right"> Login </button>

                <?php
                if(isset($_POST['account'])&&isset($_POST['password'])){
                    //echo 'username is '.$_POST['username'];
                    $account = $_POST['account'];
                    $password = $_POST['password'];

                    //输入为空处理
                    if(!$account||!$password){
                        echo '<p class = "alert_text"> 用户名/密码不应为空 </p>';
                    }
                    //对输入的用户名-密码查数据库
                    else{
                        //连接数据库
                        $mysqli = new mysqli("127.0.0.1","root","1234","userlist");
                        if(mysqli_connect_errno()){
                            //连接失败？
                            echo "连接失败，".mysqli_connect_error().", 请联系管理员";
                        }
                        else{
                            //在user表中查找对应用户名的密码
                            $sql = "SELECT * FROM user WHERE account = '$account'";
                            echo $sql;
                            $query_result = $mysqli->query($sql);
                            if($query_result){
                                $row = $query_result->fetch_row();
                                if(password_verify($password,$row[1])){
                                    $_SESSION['login_In'] = $row[2];
                                    //var_dump($row);
                                   header("LOCATION:index.php");
                                }
                                else
                                    echo '<p class = "alert_text"> 账户名/密码错误 </p>';
                            }
                            else
                                echo '<p class = "alert_text"> 账户不存在 </p>';
                        }
                    }

                }
                ?>
            </div>

            <form>
    </div>
</div>

</body>

</html>