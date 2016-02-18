<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>添加通讯录</title>
    <link rel="stylesheet" href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css">
    <link rel="stylesheet" href="http://tarruda.github.com/bootstrap-datetimepicker/assets/css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" href="./../../res/css/contacts.css">
    <script src="http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="http://apps.bdimg.com/libs/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="http://tarruda.github.com/bootstrap-datetimepicker/assets/js/bootstrap-datetimepicker.min.js">
    </script>
    <script src="http://tarruda.github.com/bootstrap-datetimepicker/assets/js/bootstrap-datetimepicker.pt-BR.js">
    </script>
    <script type="text/javascript" src="./../../res/js/core-min.js"></script>
    <script type="text/javascript" src="./../../res/js/enc-base64.js"></script>
    <script type="text/javascript" src="./../../res/js/hmac-sha1.js"></script>
    <script type="text/javascript" src="./../../res/js/add.js"></script>
</head>

<body>
    <div class="container grade">
        <div>
            <div><a href="./../../v2" class="close" data-dismiss="alert">&times;</a></div>
            <h3 class="panel-title">添加通讯录</h3>
            <hr>
        </div>
        <div>
            <form action="" role="form" class="form-horizontal">
                <div class="form-group">
                    <label for="studentId" class="col-sm-1 control-label">学号：</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" id="studentId">
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" class="col-sm-1 control-label">姓名：</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" id="name">
                    </div>
                </div>
                <div class="form-group">
                    <label for="grade" class="col-sm-1 control-label">年级：</label>
                    <div class="col-sm-5">
                        <select name="grade" id="grade" class="form-control">
                            <option value="2012级工硕">2012级工硕</option>
                            <option value="2012级学硕">2012级学硕</option>
                            <option value="2013级工硕">2013级工硕</option>
                            <option value="2013级学硕">2013级学硕</option>
                            <option value="2014级工硕">2014级工硕</option>
                            <option value="2014级学硕">2014级学硕</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="tutor" class="col-sm-1 control-label">导师：</label>
                    <div class="col-sm-5">
                        <select name="tutor" id="tutor" class="form-control">
                            <option value="许炜">许炜</option>
                            <option value="程文青">程文青</option>
                            <option value="夏天">夏天</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="phone" class="col-sm-1 control-label">电话：</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" id="phone">
                    </div>
                </div>
                <div class="form-group">
                    <label for="email" class="col-sm-1 control-label">邮箱：</label>
                    <div class="col-sm-5">
                        <input type="text" class="form-control" id="email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="birthday" class="col-sm-1 control-label">生日：</label>
                    <div id="datetimepicker" class="col-sm-5 input-append date">
                        <input type="text" class="form-control" id="birthday" readonly>
                        <span class="add-on">
        <i data-time-icon="icon-time" data-date-icon="icon-calendar"></i>
      </span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputfile" class="col-sm-1 control-label">照片：</label>
                    <div class="col-sm-5">
                        <form method="post" action="http://upload.qiniu.com/" enctype="multipart/form-data">
                            <input type="file" name="file" id="inputfile" onchange="uploadPicture()">
                        </form>
                        <p class="help-block">请上传您的照片。</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                <span class="progress-label"></span>
                            </div>
                        </div>                  
                    </div>
                </div>
            </form>
        </div>
        <div class="edit">
            <a href="./../../v2">
                <button class="btn btn-default">取消</button>
            </a>
            <a href="./../../v2">
                <button class="btn btn-warning save">保存</button>
            </a>
        </div>
    </div>
    <div class="hidden">
        <?php
        echo $_GET['i'];
        ?>
    </div>
</body>

</html>
