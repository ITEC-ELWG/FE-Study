<!DOCTYPE html>

<?php
	session_start();
	if (!$_SESSION['view']) {
		
		header("Location: login.php");	
	}
?>

<html>

<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' /> 
	<title>YX's World</title>
</head>

<link rel="stylesheet" type="text/css" href="index.css">

<body>
	<header>
		<div class="top">
		<div class="top-left">
			<p class="top-title">YX's World</p>
		</div>
		<div class="top-right">
			<a class="top-tag" href="../Error/error.htm">首页</a>
			<a class="top-tag" href="../Error/error.htm">归档</a>
			<a class="top-tag" href="../Error/error.htm">分类</a>
			<a class="top-tag" href="../Error/error.htm">读书</a>
			<a class="top-tag" href="../Error/error.htm">关于</a>
		</div>
	</div>
	</header>
	<div class="center">
		<div class="text">
			<div class="text-left">
				<p class="text-time">2015-10-11</p>
				<a class="text-tag" href="../Error/error.htm">tag one</a>
			</div>
			<div class="text-right">
				<p class="text-title">title one</p>
				<p class="text-main">
					&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
				</p>
			</div>
		</div>
		<div class="text">
			<div class="text-left">
				<p class="text-time">2015-10-21</p>
				<a class="text-tag" href="../Error/error.htm">tag two</a>
			</div>
			<div class="text-right">
				<p class="text-title">title two</p>
				<p class="text-main">
					&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
				</p>
			</div>
		</div>
		<div class="text">
			<div class="text-left">
				<p class="text-time">2015-10-31</p>
				<a class="text-tag" href="../Error/error.htm">tag three</a>
			</div>
			<div class="text-right">
				<p class="text-title">title three</p>
				<p class="text-main">
					&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
				</p>
			</div>
		</div>
		<div class="text">
			<div class="text-left">
				<p class="text-time">2015-11-11</p>
				<a class="text-tag" href="../Error/error.htm">tag four</a>
			</div>
			<div class="text-right">
				<p class="text-title">title four</p>
				<p class="text-main">
					&nbsp;&nbsp;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
				</p>
			</div>
		</div>
	</div>
	<footer>
		<div class="bottom">
			<p class="copyright">CopyRight @ 2015/11/11 WangYuanhan. All rights reserved.</p>
		</div>
	</footer>
	
</body>

</html>