$(document).ready(function() {
    var dataArr;
    var student;
    var students;
    var tutors;
    var grades;
    var gradeId;
    var tutorId;
    var page;
    var page1;
    var pages;
    var index;
    var isSingle = true;

    //多项选择
    $('.many').click(function() {
        alert('已开启多标签筛选服务！');
        isSingle = false;
    });

    //获取导师
    function getTutors() {
        $.get('./tutors').done(function(data) {
            var json = JSON.parse(data);
            tutors = json.data;
            generateTutor();
            $(".li-tutor").click(function() {
                if (isSingle) {
                    $('.selected').removeClass('selected');
                    gradeId = null;
                };
                $(".li-tutor").removeClass('selected');
                $(this).addClass('selected');
                for (var j = 0; j < tutors.length; j++) {
                    if (tutors[j].tutor == $(this).html()) {
                        tutorId = tutors[j].id;
                        break;
                    }
                };
                getStudents();
            });
            editTutor();
            addTutor();
        });
    }


    //获取年级
    function getGrades() {
        $.get('./grades').done(function(data) {
            var json = JSON.parse(data);
            grades = json.data;
            generateGrade();
            $(".li-grade").click(function() {
                if (isSingle) {
                    $('.selected').removeClass('selected');
                    tutorId = null;
                };
                $(".li-grade").removeClass('selected');
                $(this).addClass('selected');
                for (var j = 0; j < grades.length; j++) {
                    if (grades[j].grade == $(this).html()) {
                        gradeId = grades[j].id;
                        break;
                    }
                };
                getStudents();
            });
            editGrade();
            addGrade();
        });
    }


    //获取页数
    $('.turn-to').click(function() {
        page = $("#page").val();
        if (page > 0 && page <= pages) {
            page1 = parseInt(page) - 1;
            getStudents();
        } else {
            alert('输入页码有误！');
        }
    });

    getStudents();
    getGrades();
    getTutors();

    //获取学生
    function getStudents() {
        $.get('students', {
            "gradeId": gradeId,
            "tutorId": tutorId,
            "page": page1
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
        var tbody = $(".tbody");
        tbody.empty();
        for (var i = 1; i < students.length + 1; i++) {
            student = students[i - 1];
            var trStr = "";
            var tdStr = "";

            trStr += '<tr class="tr' + i + '">' + '</tr>';
            tbody.append(trStr);
            $(".tr" + i).append('<td>' + i + '</td>');

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

    //生成年级标签
    function generateGrade() {
        var breadcrumbGrade = $(".breadcrumb-grade");
        breadcrumbGrade.empty();
        for (var i = 0; i < grades.length; i++) {
            var divStr = "";
            divStr += '<li class="li-grade">' + grades[i].grade + '</li>';
            breadcrumbGrade.append(divStr);
        };
    }


    //获取年级
    function editGrade() {
        $(".edit-grade").click(function() {
            var modalBodyGrade = $(".modal-body-grade");
            modalBodyGrade.empty();
            for (var i = 0; i < grades.length; i++) {
                var divStr = "";
                divStr += '<div><input type="checkbox" class="col-sm-2 check-grade" value="' + grades[i].id + '" checked>' + grades[i].grade + '</div>';
                modalBodyGrade.append(divStr);
            };
        });
    }

    //增加、删除年级
    function addGrade() {
        $('.save-grade').click(function() {
            $.post("./grades", {
                "grade": $(".input-grade").val()
            }).done(function(data) {
                window.location.reload(true);
            });

            var notChecked = $("input:not(:checked)");
            notChecked.each(function() {
                if ($(this).hasClass('check-grade')) {
                    var notCheckedGradeId = $(this).val();
                    $.ajax({
                        url: "grades/" + notCheckedGradeId,
                        type: "DELETE"
                    }).done(function(data) {
                        window.location.reload(true);
                    });
                };
            });
        });
    }

    //生成导师标签
    function generateTutor() {
        var breadcrumbTutor = $(".breadcrumb-tutor");
        breadcrumbTutor.empty();
        for (var i = 0; i < tutors.length; i++) {
            var divStr = "";
            divStr += '<li class="li-tutor">' + tutors[i].tutor + '</li>';
            breadcrumbTutor.append(divStr);
        };
    }

    //获取导师
    function editTutor() {
        $(".edit-tutor").click(function() {
            var modalBodyTutor = $(".modal-body-tutor");
            modalBodyTutor.empty();
            for (var i = 0; i < tutors.length; i++) {
                var divStr = "";
                divStr += '<div><input type="checkbox" class="col-sm-2 check-tutor" value="' + tutors[i].id + '" checked>' + tutors[i].tutor + '</div>';
                modalBodyTutor.append(divStr);
            };
        });
    }

    //增加、删除导师
    function addTutor() {
        $('.save-tutor').click(function() {
            $.post("./tutors", {
                "tutor": $(".input-tutor").val()
            }).done(function(data) {
                window.location.reload(true);
            });

            var notChecked = $("input:not(:checked)");
            notChecked.each(function() {
                if ($(this).hasClass('check-tutor')) {
                    var notCheckedTutorId = $(this).val();
                    $.ajax({
                        url: "tutors/" + notCheckedTutorId,
                        type: "DELETE"
                    }).done(function(data) {
                        window.location.reload(true);
                    });
                };
            });
        });
    }

});
