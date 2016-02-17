<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>contact</title>
    <link rel="stylesheet" href="./res/css/style.css" type="text/css">
    <link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
    <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
    <script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="./res/js/main.js"></script>
</head>
<body>
<nav class="navbar navbar-default" role="navigation">
    <div class="navbar-header">
        <a class="navbar-brand" href="#">contacts</a>
    </div>
    <div>
        <!--        <form class="navbar-form navbar-left" role="search">-->
        <!--            <button type="button" class="btn btn-default navbar-btn">通讯录管理</button>-->
        <!--        </form>-->
        <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown">
                筛选 <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#">年级</a></li>
                <li><a href="#">导师</a></li>
                <li><a href="#">学号</a></li>
                <li class="divider"></li>
                <li><a href="#">取消</a></li>
            </ul>
        </div>
        <button type="button" class="btn btn-default navbar-btn">
            通讯录管理
        </button>
    </div>
</nav>
<div id="container">
    <h1 class="">contact</h1>
    <table class="contacts">
        <thead>
        <tr>
            <th>年级</th>
            <th>姓名</th>
            <th>导师</th>
            <th>邮箱</th>
            <th>电话</th>
            <th>生日</th>
            <th>照片</th>
            <th>删除</th>
            <th>编辑</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td><img src="./res/img/person.png" class="img-thumbnail" alt="缩略图" width="50" height="50"></td>
            <td>
                <button class="delmian" data-toggle="modal" data-target="#myModal">del</button>
            </td>
            <td>
                <button type="button" text="del" id="text">edit</button>
            </td>
        </tr>
        <script>
            $(document).ready(function () {
                $("#json").click(function () {
                    $.getJSON("http://dianmobile.net/students", function (result) {
                        var students = result.data;
                        var t = "";
                        t += " <table >";
                        t += " <tr>" +
                            "<td >序号</td>" +
                            "<td >姓名</td>" +
                            "<td >生日</td>" +
                            "<td>导师</td>" +
                            "<td>邮箱</td>" +
                            "<td>年级</td>" +
                            "<td>学号</td>" +
                            "<td>电话</td>" +
                            "<td>照片</td>" +
                            "</tr>";
                        for (var i = 0; i <students.length; i++) {
                            t += "<tr >";
                            t += "<td>" + i + "</td>";
                            t += "<td>"+  students[i].name +"</td>";
                            t += "<td>"+ students[i].birthday +"</td>";
                            t += "<td>"+ students[i].tutor +"</td>";
                            t += "<td>"+ students[i].email +"</td>";
                            t += "<td>"+ students[i].grade +"</td>";
                            t += "<td>"+ students[i].studentId +"</td>";
                            t += "<td>"+ students[i].phone +"</td>";
                            t += "<td><img src="+ students[i].image +" class=\"img-thumbnail\" alt=\"缩略图\" width=\"50\" height=\"50\"></td>";
                            t += "</tr>";
                        }
                        t += "</table>";
                        document.getElementById("text").style.display = "block";
                        $("#text").html(t);
                    });
                });
            });
        </script>
        </head>
        <body>
        <button id="json">获取 JSON 数据</button>
        <div id="text"></div>

        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src="./res/img/person.png" class="img-thumbnail" alt="缩略图" width="50" height="50"></td>
            <td>
                <button class="delmian" data-toggle="modal" data-target="#myModal">del</button>
            </td>
            <td>
                <button type="button" text="del">edit</button>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src="./res/img/person.png" class="img-thumbnail" alt="缩略图" width="50" height="50"></td>
            <td>
                <button class="delmian" data-toggle="modal" data-target="#myModal">del</button>
            </td>
            <td>
                <button type="button" text="del">edit</button>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src="./res/img/person.png" class="img-thumbnail" alt="缩略图" width="50" height="50"></td>
            <td>
                <button class="delmian" data-toggle="modal" data-target="#myModal">del</button>
            </td>
            <td>
                <button type="button" text="del">edit</button>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src="./res/img/person.png" class="img-thumbnail" alt="缩略图" width="50" height="50"></td>
            <td>
                <button class="delmian" data-toggle="modal" data-target="#myModal">del</button>
            </td>
            <td>
                <button type="button" text="del">edit</button>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src="./res/img/person.png" class="img-thumbnail" alt="缩略图" width="50" height="50"></td>
            <td>
                <button class="delmian" data-toggle="modal" data-target="#myModal">del</button>
            </td>
            <td>
                <button type="button" text="del">edit</button>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src="./res/img/person.png" class="img-thumbnail" alt="缩略图" width="50" height="50"></td>
            <td>
                <button class="delmian" data-toggle="modal" data-target="#myModal">del</button>
            </td>
            <td>
                <button type="button" text="del">edit</button>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src="./res/img/person.png" class="img-thumbnail" alt="缩略图" width="50" height="50"></td>
            <td>
                <button class="delmian" data-toggle="modal" data-target="#myModal">del</button>
            <td>
                <button type="button" text="del">edit</button>
            </td>


        </tr>
        </tbody>
    </table>
    <div class="con_btn">
        <button id="add" class="btn_add">add</button>
    </div>
    <!-- 删除事件的模态框-->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">删除操作</h4>
                </div>
                <div class="modal-body">你确认删除此行？</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">确认</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
    </div>
    <div class="addContainer" id="addContainer">
        <div class="addExit" id="addExitCon">
            <p class="addTitle"><span>添加通讯录</span></p>
            <hr>
            <div class="addCon">
                <p>
                    <span>学号：</span>
                    <input type="numberStudent" type="text"><br>
                    <span>姓名：</span>
                    <input name="name" type="text"><br>
                    <span>邮箱：</span>
                    <input name="e-mail" type="text"><br>
                    <span>电话：</span>
                    <input type="tel" type="number"><br>
                </p>

                <p>
                    <span>年级</span>
                    <select>
                        <option>2013工硕</option>
                        <option>2014工硕</option>
                        <option>2013学硕</option>
                        <option>2014学硕</option>
                    </select>
                    <span>
                        <span>导师</span>
                        <select>
                            <option>导师1</option>
                            <option>导师2</option>
                            <option>导师3</option>
                            <option>导师4</option>
                        </select>
                    </span><br>
                <div class="commitImg">
                </div>
                </p>
            </div>
            <hr>
            <button class="addCancel" id="addCancel">cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button class="addCommit">commit</button>
        </div>
    </div>
</div>
</body>
</html>