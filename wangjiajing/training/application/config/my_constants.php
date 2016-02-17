<?php
/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/20
 * Time: 19:15
 */
$config = array();

define('SUCCESS', 1);
define('FAIL', 0);
define('NO_INPUT', 2);
define('FAIL_TO_INSERT', 3);
define('FAIL_TO_DELETE', 4);
define('FAIL_TO_UPDATE', 5);
define('INVALID_INPUT', 6);

define('BASE_PATH', 'http://dianmobile.net');

define("STABLE", "student");
define("TTABLE", "tutor");
define("GTABLE", "grade");
define("SETABLE", "selection");

define("STUDENT_LIMIT", 10);
define("GRADE_LIMIT", 10);
define("TUTOR_LIMIT", 10);
define('IDENTITY_LENGTH', 8);