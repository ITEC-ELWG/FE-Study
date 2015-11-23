<?php
//生成乱序排列的数据
$dim     = $_POST["dim"];
$pattern = "/^[3-9]*$/";
if (!preg_match($pattern, $dim)) { //判断用户输入的宫格行列数是否合法
    echo "dataIllegal";
    return;
}
$arr = range(0, pow($dim, 2) - 1);
shuffle($arr);
echo json_encode($arr);
?>