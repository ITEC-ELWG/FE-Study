<!DOCTYPE html>
<?php
    session_start();
    if(!$_SESSION['views']) {
        header("Location:login.php");
    }
?>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8"/>
    <title>index</title>
    <link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
    <header class="page-header">
        <nav class="header-wrapper">
            <a href="index.php" class="name">My Blog</a>
            <div class="header-nav-wrapper">
                <a href="index.php" class="a-nav">首页</a>
                <a href="index.php" class="a-nav">归档</a>
                <a href="index.php" class="a-nav">分类</a>
                <a href="index.php" class="a-nav">读书</a>
                <a href="index.php" class="a-nav">关于</a>
            </div>
        </nav>
    </header>
    <section>
        <nav class="article-index">
            <ul class="index-wrapper">
                <li class="index-nav-wrapper">
                    <a href="index.php" class="index-nav">Home</a>
                </li>
                <li class="index-nav-wrapper">
                    <a href="#article1" class="index-nav">学习笔记(1)</a>
                </li>
                <li class="index-nav-wrapper">
                    <a href="#article2" class="index-nav">学习笔记(2)</a>
                </li>
                <li class="index-nav-wrapper">
                    <a href="#article3" class="index-nav">学习笔记(3)</a>
                </li>
                <li class="index-nav-wrapper">
                    <a href="#article4" class="index-nav">学习笔记(4)</a>
                </li>
            </ul>
        </nav>
        <a name="article1" class="article-nav-link"></a>
        <article class="article">
            <aside>
                <div class="time">
                    <p>2015-11-15</p>
                </div>
                <div class="focus-btn-wrapper">
                    <a href="#article1" class="focus-btn">HTML</a>
                </div>
            </aside>
            <div class="article-wrapper">
                <div class="article-tittle-wrapper">
                    <a href="" class="">学习笔记(1)</a>
                </div>
                <div class="article-content">
                    <p>华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学</p>
                </div>
            </div>
        </article>
        <a name="article2" class="article-nav-link"></a>
        <article class="article">
            <aside>
                <div class="time">
                    <p>2015-11-15</p>
                </div>
                <div class="focus-btn-wrapper">
                    <a href="#article1" class="focus-btn">HTML</a>
                </div>
            </aside>
            <div class="article-wrapper">
                <div class="article-tittle-wrapper">
                    <a href="" class="article-tittle">学习笔记(2)</a>
                </div>
                <div class="article-content">
                    <p>华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学</p>
                </div>
            </div>
        </article>
        <a name="article3" class="article-nav-link"></a>
        <article class="article">
            <aside>
                <div class="time">
                    <p>2015-11-15</p>
                </div>
                <div class="focus-btn-wrapper">
                    <a href="#article1" class="focus-btn">HTML</a>
                </div>
            </aside>
            <div class="article-wrapper">
                <div class="article-tittle-wrapper">
                    <a href="" class="article-tittle">学习笔记(3)</a>
                </div>
                <div class="article-content">
                    <p>华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学</p>
                </div>
            </div>
        </article>
        <a name="article4" class="article-nav-link"></a>
        <article class="article">
            <aside>
                <div class="time">
                    <p>2015-11-15</p>
                </div>
                <div class="focus-btn-wrapper">
                    <a href="#article1" class="focus-btn">HTML</a>
                </div>
            </aside>
            <div class="article-wrapper">
                <div class="article-tittle-wrapper">
                    <a href="" class="article-tittle">学习笔记(4)</a>
                </div>
                <div class="article-content">
                    <p>华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学华中科技大学</p>
                </div>
            </div>
        </article>
        <div class="load-wrapper">
            <div class="load-link-wrapper">
                <a href="" class="load">点击加载更多</a>
            </div>
        </div>
    </section>
    <footer>
        <div class="page-footer">
            <div class="footer-wrapper">
                <div class="author">
                    <p>Blog designed by cxz</p>
                </div>
                <div class="copyright">
                    <p>Copyright &copy; 2015</p>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>