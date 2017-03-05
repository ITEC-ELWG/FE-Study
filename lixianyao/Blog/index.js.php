<?php
    session_start();
    unset($_SESSION);
    session_destroy();
    header("LOCATION:login.php");
?>