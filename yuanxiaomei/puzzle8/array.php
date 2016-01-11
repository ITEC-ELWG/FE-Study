<?php
	$arr = array(0,1,2,3,4,5,6,7,8);
	shuffle($arr);
	$arr1 = array($arr[0],$arr[1],$arr[2]);
	$arr2 = array($arr[3],$arr[4],$arr[5]);
	$arr3 = array($arr[6],$arr[7],$arr[8]);

	$result['array'] = array($arr1,$arr2,$arr3);
	echo json_encode($result);
?>
