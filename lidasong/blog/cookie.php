<?php
if (($_COOKIE["username"] != 'lidsaong') && ($_COOKIE["password"] != 'elwg'))
    echo '<meta http-equiv="refresh" content="2;url=login.php" />';
//setcookie("username"," ",time()-3600);
//setcookie("password"," ",time()-3600); //删除cookie	 
?>