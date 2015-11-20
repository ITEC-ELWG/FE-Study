<?php
	$n=$_GET['n'];
	$arr=range(0,$n-1);
	shuffle($arr);
	$response=implode("-",$arr);
	echo $response;
?>