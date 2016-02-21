$(document).ready(function() {
    var tbody = $(".tbody");
    var dataArr;
    var student;
    var students;
    var tutors;
    var grades;
    var gradeId;
    var tutorId;
    var page;
    var pages;
    var index;

    //获取导师id
    $.get('./tutors').done(function(data) {
        var json = JSON.parse(data);
        tutors = json.data;
        $(".li-tutor").click(function() {
            for (var j = 0; j < tutors.length; j++) {
                if (tutors[j].tutor == $(this).html()) {
                    tutorId = tutors[j].id;
                    break;
                }
            };
            getStudents();
        });
    });

    //获取年级id
    $.get('./grades').done(function(data) {
        var json = JSON.parse(data);
        grades = json.data;
        $(".li-grade").click(function() {
            for (var j = 0; j < grades.length; j++) {
                if (grades[j].grade == $(this).html()) {
                    gradeId = grades[j].id;
                    break;
                }
            };
            getStudents();
        });
    });

    //获取页数
    $('.turn-to').click(function() {
        page = $("#page").val();
        getStudents();
    });

    getStudents();

    //获取学生
    function getStudents() {
        $.get('students', {
            "gradeId": gradeId,
            "tutorId": tutorId,
            "page": page
        }).done(function(data) {
            var json = JSON.parse(data);
            dataArr = json.data;
            students = dataArr.students;
            pages = dataArr.pages;

            if (!page) {
                $("#page").val('1/' + pages);
            } else {
                $("#page").val(page + '/' + pages);
            }
            generate();
            clickDelete();
        });
    }

    //生成学生列表
    function generate() {
        tbody.empty();
        for (var i = 1; i < students.length + 1; i++) {
            student = students[i - 1];
            var trStr = "";
            var tdStr = "";

            trStr += '<tr class="tr' + i + '">' + '</tr>';
            tbody.append(trStr);
            $(".tr" + i).append('<td>' + i + '</td>');

            // tdStr += '<td>' + student.pages + '</td>';

            tdStr += '<td>' + student.studentId + '</td>';
            tdStr += '<td>' + student.name + '</td>';
            tdStr += '<td>' + student.grade + '</td>';
            tdStr += '<td>' + student.tutor + '</td>';
            tdStr += '<td>' + student.phone + '</td>';
            tdStr += '<td>' + student.email + '</td>';
            tdStr += '<td>' + student.birthday + '</td>';
            tdStr += '<td>' + '<a href="./application/views/photo.php?studentImg=' + student.image + '"><img src="' + student.image + '"></a>' + '</td>';
            tdStr += '<td>' + '<button class="btn btn-default btn-xs btn-edit btn-edit-' + i + '"><a href="./application/views/add.php?i=' + i + '">编辑</a></button>' + '</td>';
            tdStr += '<td>' + '<button class="btn btn-default btn-xs btn-delete btn-delete-' + i + '" data-toggle="modal" data-target="#delete">删除</button>' + '</td>';

            $(".tr" + i).append(tdStr);
        };
    }


    //点击删除按钮
    function clickDelete() {
        $(".btn-delete").each(function(i) {
            var j = parseInt(i) + 1;
            $('.btn-delete-' + j).click(function() {
                index = i;
                determineDelete(index);
            });
        });
    }


    //确认删除
    function determineDelete(i) {
        $($(".determine")[0]).bind('click', function() {
            $.ajax({
                url: "students/" + students[i].id,
                type: "DELETE"
            }).done(function(data) {
                window.location.reload(true);
                alert("删除成功！");
            });
        });

    }


    /*//编辑年级
    function editGrade() {
        $("").each(function(i) {
            this.click(function() {

            });
        });

    }

    //编辑导师
    function editTutor() {
        $("").each(function(i) {
            this.click(function() {

            });
        });

    }*/
});
