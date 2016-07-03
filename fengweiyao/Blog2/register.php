<?php
require_once 'includes/config.php';

if (isset($_POST['submit'])){
    $user->username = $_POST['username'];
    $user->password = $_POST['password'];
    $user->email = $_POST['email'];
}

if ($user->register()){
    echo '<p> 注册成功！</p>';
    echo "<br>";
    echo "<p>现在你可以"."<a href='login.php'>登陆</a>了！</p>";
}else{
    echo '<p> Sorry, your username have been used.</p>';
}

// header('Location: login.php');
// exit;

?>