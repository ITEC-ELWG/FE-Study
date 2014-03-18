<?php
	$disorderArray=[8];
	$string="";
	for ($i=0; $i <8 ; $i++) { 
		$disorderArray[$i]=$i;
	}
	shuffle($disorderArray);
	for ($i=0; $i <8 ; $i++) 
		$string=$string.$disorderArray[$i];
		 //$response=$disorderArray.toString();$disorderArray
	printf($string);
?>