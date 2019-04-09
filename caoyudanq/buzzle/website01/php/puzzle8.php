<?php
header('Access-Control-Allow-Origin:*');

	$n = $_GET['num'];
	$array = range(1,$n);
	shuffle($array);
	
	echo json_encode($array);
?>