﻿<?php
    session_start();
    header("content-type:text/html; charset=utf-8");
    if(!isset($_SESSION['login_In'])) {
        echo "未登录，3秒后回转登录界面";
        header("refresh:3;url=login.php");
        exit;
    }
?>

<!doctype html>
<html>

<head>
    <title> Blog </title>
    <link rel="stylesheet" type="text/css" href="css/index_style.css" />
</head>

<body>

<nav>
    <div class="navbar">
        <ul class="nav-container">
            <li class="nav-item to-left">
                <a href="index.php">
                    <button class="nav-home">Wayne.<sub>李先耀</sub></button>
                </a>
            </li>

            <li class="nav-item to-right">
                <a id="logout" class="nav-link" href="index.js.php">Logout</a>
            </li>

            <li id="inform" class="nav-text to-right"> 欢迎，<?php echo $_SESSION['login_In']; ?></li>

            <li class="nav-item to-left active">
                <a class="nav-link" href="index.php">Diary</a>
            </li>

            <li class="nav-item to-left">
                <a class="nav-link" href="index.php">about me</a>
            </li>
        </ul>
    </div>
</nav>

<section>
    <div class="sec-container">
        <!--文本-->
        <div class="sec-content">
            <div class="sec-head-container">
                <div class="to-left">
                    <a class="sec-head-title" href="index.php">
                        北京邮电大学申报的“天地互联与融合北京市重点实验室”
                    </a>
                </div>
                <div class="to-right sec-head-time">
                    2017-03-01 19:34
                </div>
            </div>
            <div class="sec-body">
                <p class="sec-news">
                    近日，我校申报的“天地互联与融合北京市重点实验室”获北京市科委认定。这是我校获得认定的第五个北京市重点实验室。
                </p>
                <p  class="sec-news">
                    “天地互联与融合北京市重点实验室”依托我校电子科学与技术国家一级重点学科和光学工程北京市重点学科建设。实验室以
                    北京邮电大学与中国空间技术研究院通信卫星事业部建立的卫星通信与网络联合实验室为基础，以天地互联与融合网络的建
                    设和关键问题的解决为研究着力点，将充分发挥在光通信领域和卫星通信领域的科研优势，致力于建立与国际标准接轨的研
                    究平台和科研管理体系，获得一系列原创性成果。
                </p>
            </div>
        </div>

        <div class="sec-content">
            <div class="sec-head-container">
                <div class="to-left">
                    <a class="sec-head-title" href="index.php">
                        北京邮电大学申报的“天地互联与融合北京市重点实验室”
                    </a>
                </div>
                <div class="to-right sec-head-time">
                    2017-03-01 19:34
                </div>
            </div>
            <div class="sec-body">
                <p class="sec-news">
                    近日，我校申报的“天地互联与融合北京市重点实验室”获北京市科委认定。这是我校获得认定的第五个北京市重点实验室。
                </p>
                <p  class="sec-news">
                    “天地互联与融合北京市重点实验室”依托我校电子科学与技术国家一级重点学科和光学工程北京市重点学科建设。实验室以
                    北京邮电大学与中国空间技术研究院通信卫星事业部建立的卫星通信与网络联合实验室为基础，以天地互联与融合网络的建
                    设和关键问题的解决为研究着力点，将充分发挥在光通信领域和卫星通信领域的科研优势，致力于建立与国际标准接轨的研
                    究平台和科研管理体系，获得一系列原创性成果。
                </p>
            </div>
        </div>

        <div class="sec-content">
            <div class="sec-head-container">
                <div class="to-left">
                    <a class="sec-head-title" href="index.php">
                        北京邮电大学申报的“天地互联与融合北京市重点实验室”
                    </a>
                </div>
                <div class="to-right sec-head-time">
                    2017-03-01 19:34
                </div>
            </div>
            <div class="sec-body">
                <p class="sec-news">
                    近日，我校申报的“天地互联与融合北京市重点实验室”获北京市科委认定。这是我校获得认定的第五个北京市重点实验室。
                </p>
                <p  class="sec-news">
                    “天地互联与融合北京市重点实验室”依托我校电子科学与技术国家一级重点学科和光学工程北京市重点学科建设。实验室以
                    北京邮电大学与中国空间技术研究院通信卫星事业部建立的卫星通信与网络联合实验室为基础，以天地互联与融合网络的建
                    设和关键问题的解决为研究着力点，将充分发挥在光通信领域和卫星通信领域的科研优势，致力于建立与国际标准接轨的研
                    究平台和科研管理体系，获得一系列原创性成果。
                </p>
            </div>
        </div>

        <!--更多-->
        <div class="sec-more">
            <a class="sec-more-link">
                More>>
            </a>
        </div>
    </div>
</section>

<footer>
    <p class="footer-text">
        Vol 0.0.1 completed at 22:50 on 2017/3/1
    </p>
    <p class="footer-text">
        By LiXianyao
    </p>
</footer>

</body>

</html>