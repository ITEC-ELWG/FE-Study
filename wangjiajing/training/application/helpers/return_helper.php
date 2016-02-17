<?php
/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2015/12/10
 * Time: 0:21
 */

defined('BASEPATH') OR exit('No direct script access allowed');

if(! function_exists('toJsonSuccess'))
{
    function toJsonSuccess($data)
    {
        $array = array(
            'status' => SUCCESS,
            'data' => $data,
        );
        return str_replace("\\/", "/", json_encode($array));
    }
}

if(! function_exists('toJsonFail'))
{
    function toJsonFail($status)
    {
        $array = array(
            'status' => $status,
        );
        return json_encode($array);
    }
}

if(! function_exists('toJsonSuccessNoData'))
{
    function toJsonSuccessNoData()
    {
        $array = array(
            'status' => SUCCESS
        );
        return json_encode($array);
    }
}