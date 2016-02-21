<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <title>通讯录</title>
    <link rel="stylesheet" href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./res/css/contacts.css">
    <script src="http://apps.bdimg.com/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="./res/js/contacts.js"></script>
    <script src="http://apps.bdimg.com/libs/bootstrap/3.3.0/js/bootstrap.min.js"></script>
</head>

<body>
    <div class="container">
        <div class="left">
            <h3>标签：</h3>
            <label>年级：</label>
            <button class="btn btn-default btn-xs edit edit-grade" data-toggle="modal" data-target="#grade">编辑年级</button>
            <ol class="breadcrumb breadcrumb-grade"></ol>           
            <label>导师：</label>
            <button class="btn btn-default btn-xs edit edit-tutor" data-toggle="modal" data-target="#tutor">编辑导师</button>
            <ol class="breadcrumb breadcrumb-tutor"></ol>           
        </div>
        <div class="right-block right">
            <div class="btn-group-vertical right">
                <button class="btn btn-default btn-lg"><a href="./application/views/add.php">添加</a></button>
                <button class="btn btn-default btn-lg many">多选</button>
            </div>
            <div class="turn">
                <input type="text" class="turn-input" id="page">
                <button type="submit" class="btn btn-default btn-sm turn-to">跳转</button>
            </div>
        </div>
        <table class="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>年级</th>
                    <th>导师</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th>生日</th>
                    <th>照片</th>
                    <th>编辑</th>
                    <th>删除</th>
                </tr>
            </thead>
            <tbody class="tbody">
            </tbody>
        </table>
    </div>
    </div>
    <!-- 警告框-->
    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="deleteLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="deleteLabel">注意</h4>
                </div>
                <div class="modal-body">确定删除吗？</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-default determine" data-dismiss="modal">确定</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 编辑年级-->
    <div class="modal fade" id="grade" tabindex="-1" role="dialog" aria-labelledby="gradeLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="gradeLabel">编辑年级</h4>
                </div>
                <div class="modal-body modal-body-grade"></div>
                <div class="modal-body">
                    <form action="" class="form-horizontal">
                        <div class="form-group">
                            <label for="grade" class="col-sm-2 control-label">年级：</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control input-grade">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-warning save-grade" data-dismiss="modal">保存</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 编辑导师-->
    <div class="modal fade" id="tutor" tabindex="-1" role="dialog" aria-labelledby="tutorLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="tutorLabel">编辑导师</h4>
                </div>
                <div class="modal-body modal-body-tutor"></div>
                <div>
                    <form action="" class="form-horizontal">
                        <div class="form-group">
                            <label for="grade" class="col-sm-2 control-label">导师：</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control input-tutor">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-warning save-tutor" data-dismiss="modal">保存</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
