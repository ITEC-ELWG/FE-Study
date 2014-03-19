<?php
if (($_COOKIE["username"] != 'wangchen') || ($_COOKIE["password"] != '123')){
    echo '<meta http-equiv="refresh" content="0;url=login.php" />';
}
else {
	return;
}
?>