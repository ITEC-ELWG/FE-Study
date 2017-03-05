<!doctype html>
<?php
header("content-type:text/html; charset=utf-8");
?>
<html>

<head>
    <title> Register </title>
    <link rel="stylesheet" type="text/css" href="css/register_style.css" />
</head>

<body>
<div class="register-table table_width">
    <div class="register-table-head table_width">
        <img src="images/login.png" />
    </div>

    <div class="register-table-body table_width">
        <form class="register-input" action="register.php" method="post">
            <div><!--账户输入框-->
                <input name="account" type="text" placeholder="account"/>
            </div>

            <div><!--姓名输入框-->
                <input name="nickname" type="text" placeholder="nickname"/>
            </div>

            <div><!--密码输入框-->
                <input name="password" type="password" placeholder="password"/>
            </div>

            <div><!--注册按键-->
                <a href="login.php">
                    <button type="button" class="btn"> Back </button>
                </a>
                <button type="submit" class="btn blue float-xs-right"> Register </button>

                <?php
                if(isset($_POST['account'])&&isset($_POST['password'])&&isset($_POST['nickname'])){
                    //echo 'username is '.$_POST['username'];
                    $account = $_POST['account'];
                    $password = $_POST['password'];
                    $nickname = $_POST['nickname'];

                    //输入为空处理
                    if(!$account||!$password||!$nickname){
                        echo '<p class = "alert_text"> 用户名/密码/姓名不应为空 </p>';
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
                            $select_sql = "SELECT * FROM user WHERE account = '$account'";
                            $query_result = $mysqli->query($select_sql);
                            if($query_result->num_rows == 0){
                                $password = password_hash($password, PASSWORD_BCRYPT );//该方式下，密码加密后总为60位
                                $insert_sql = "INSERT INTO user() VALUES ('$account','$password','$nickname')";
                                $que_res = $mysqli ->query($insert_sql);

                                if(!$que_res)
                                {
                                    echo $mysqli->errno;
                                    echo $mysqli->error;
                                }
                               header("Location:login.php");
                            }
                            else
                                echo '<p class = "alert_text"> 账户已经存在 </p>';
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