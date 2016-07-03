<?php 
ob_start();
session_start();

$db = new PDO("mysql:host=localhost;port=3306;dbname=blog","root","");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//load classes as needed
function __autoload($class) {
     
    $class = strtolower($class);

    //if call from within assets adjust the path
    $classpath = 'classes/class.'.$class . '.php';
    if ( file_exists($classpath)) {
        require_once $classpath;
    }

    //if call from within admin adjust the path
    $classpath = '../classes/class.'.$class . '.php';
    if ( file_exists($classpath)) {
        require_once $classpath;
    }

    //if call from within admin adjust the path
    $classpath = '../../classes/class.'.$class . '.php';
    if ( file_exists($classpath)) {
        require_once $classpath;
    }
     
}

$user = new User($db);
?>