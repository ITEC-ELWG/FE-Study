<?php
/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/21
 * Time: 20:24
 */

defined('BASEPATH') OR exit('No direct script access allowed');

function getIdentity()
{
    $str = null;
    $strPol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    $max = strlen($strPol)-1;
    for($i=0;$i<IDENTITY_LENGTH;$i++){
        $str.=$strPol[rand(0,$max)];//rand($min,$max)生成介于min和max两个数之间的一个随机整数
    }
    return $str;
}
