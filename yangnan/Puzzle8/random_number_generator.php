<?php
//验证用户输入的宫格行列数，若合法（2<n<10），返回相应的乱序排列的数字
$dim     = $_POST["dim"];
$pattern = "/^[3-9]*$/";
if (!preg_match($pattern, $dim)) {
    echo "dataIllegal";
    return;
}
$arr = range(0, pow($dim, 2) - 1);
shuffle($arr);
echo json_encode($arr);
?>