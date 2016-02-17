<?php
/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/21
 * Time: 19:25
 */

require_once './SDK/autoload.php';

// 引入鉴权类
use Qiniu\Auth;

// 引入上传类
use Qiniu\Storage\UploadManager;

// 需要填写你的 Access Key 和 Secret Key
$accessKey = 'hQ4espWPTBpiTMk2BNDUhE8nrKXD1R6D-cd4FBBh';
$secretKey = 'jef8z2McTZ8IXdiXnU8TIwu1IXX1DKFiK0sahASE';

// 构建鉴权对象
$auth = new Auth($accessKey, $secretKey);

// 要上传的空间
$bucket = 'mobiletraining';

// 生成上传 Token
$token = $auth->uploadToken($bucket);
//echo $token;
// 要上传文件的本地路径
$filePath = './license.txt';

// 上传到七牛后保存的文件名
$key = 'license.txt';

// 初始化 UploadManager 对象并进行文件的上传。
$uploadMgr = new UploadManager();
list($ret, $err) = $uploadMgr->putFile($token, $key, $filePath);
echo "\n====> putFile result: \n";
if ($err !== null) {
    var_dump($err);
} else {
    var_dump($ret);
}
