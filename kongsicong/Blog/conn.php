<?php
	$dbhost ="localhost";
  	$dbuser = "root";
  	$dbpwd = "";
  	$dbname = "test";
  	try{
  		$mysqliObj = new mysqli($dbhost,$dbuser,$dbpwd,$dbname);
  	}
  	catch(Exception $e){
  		echo "Failed to get DB handle: " . $e->getMessage() . "\n";
  		exit();
  	}
	$mysqliObj->query("set names utf8;"); 
?>