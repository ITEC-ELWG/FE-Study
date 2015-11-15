<html>

<head>
<meta charset="UTF-8" />
<link rel="stylesheet" type="text/css" href="../css/index.css" />
<script type="text/javascript" src="../js/jquery-1.8.0.min.js"></script> 
<script src="../js/cookie.js"></script>
<script>
$(document).ready(function() {
    if (getCookie('user')!='true'){
        alert('您目前不能进入此页面，请尝试重新登录!');
        window.location.href='login.php';
    };
}); 
</script>
</head>

<body>
    <header>
        <h1>个人主页</h1>
        <ul id="index_tag">
            <li class="index_tag_li"><a href="#">首页</a></li>
            <li class="index_tag_li"><a href="javascript:void(0)">关于</a></li>
        </ul>
    </header>
    <article>
        <ul id="info">
            <li>
                <div class="li_leftpart">
                    <p>基本信息</p>
                </div>
                <div class="li_rightpart">
                    <p>姓名：杨楠</p>
                    <p>性别：女</p>
                </div>
            </li>

            <li>
                <div class="li_leftpart">
                    <p>联系方式</p>
                </div>
                <div class="li_rightpart">
                    <p>手机号码：13164616467</p>
                </div>
            </li>
        </ul>
    </article>
    <footer>
        Copyright&copy;2015<span>杨楠</span>
    </footer>   
</body>

</html>