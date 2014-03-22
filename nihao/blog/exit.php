<?php
header("Content-Type:text/html; charset=utf-8");
?>


<?php
	setcookie("state","landed",time()-100);
	echo "<script>alert('确定要退出？');window.location.href='login.php'</script>";
?>