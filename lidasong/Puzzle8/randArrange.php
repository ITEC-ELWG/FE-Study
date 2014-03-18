<?php
	$disorderArray=[];
	$string="";
	for ($i=0; $i<=7 ; $i++) { 
		$disorderArray[$i-1]=$i+1;
	}
	shuffle($disorderArray);
	for ($i=0; $i <=7 ; $i++) 
		$string=$string.$disorderArray[$i];
		 //$response=$disorderArray.toString();$disorderArray
	printf("%s",$string);
?>