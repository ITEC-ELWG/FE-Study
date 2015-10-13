<?php
	echo json_encode(getRandomNumber());
	function getRandomNumber(){
		$array=range(1,8);
		shuffle($array);
		return $array;
	}
?>