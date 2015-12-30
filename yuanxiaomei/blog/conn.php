<?php
$dbhost ="localhost";
$dbuser = "root";
$dbpwd = "root";
$dbname = "test";
try{
    $mysqliObj = new mysqli($dbhost,$dbuser,$dbpwd,$dbname);
    echo"succeed";
}
catch(Exception $e){
    echo "Failed to get DB handle: " . $e->getMessage() . "\n";
    exit();
}
$mysqliObj->query("set names utf8;");
?>