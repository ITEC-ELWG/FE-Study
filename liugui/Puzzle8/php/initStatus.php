<?php
$positions = array(0,1,2,3,4,5,6,7,8);
//打乱数组
shuffle($positions);
echo json_encode($positions);
?>