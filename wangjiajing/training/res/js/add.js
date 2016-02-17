$(document).ready(function() {
    var studentsi;
    var imgName;
    var i = parseInt($('.hidden').html()) - 1;

    $('#datetimepicker').datetimepicker({
        format: 'yyyy-MM-dd',
        language: 'pt-BR'
    });

    if (i >= 0) {
        $.get('./../../index.php/StudentController/getStudentsList').done(function(data) {
            var json = JSON.parse(data);
            var students = json.data.students;
            studentsi = students[i];

            edit();
            add();
        });
    } else {
        add();
    }


    //将获取的数据显示
    function edit() {
        $("#studentId").val(studentsi.studentId);
        $("#name").val(studentsi.name);
        $("#grade option[value='" + studentsi.grade + "']").attr("selected", true);
        $("#tutor option[value='" + studentsi.tutor + "']").attr("selected", true);
        $("#phone").val(studentsi.phone);
        $("#email").val(studentsi.email);
        $("#birthday").val(studentsi.birthday);
        // $("#inputfile").val(studentsi.image);
    }

    //添加一行
    function add() {
        $(".save").click(function() {
            $.post("./../../index.php/StudentController/addStudent", {
                "studentId": $("#studentId").val(),
                "name": $("#name").val(),
                "gradeId": $("#grade").val(),
                "tutorId": $("#tutor").val(),
                "phone": $("#phone").val(),
                "email": $("#email").val(),
                "birthday": $("#birthday").val(),
                "image": imgName
            }).done(function(data, status) {
                alert(data + status);
                window.parent.location.reload(true);
            });
        });
    }

    //获取文件名
    function getImgName() {
        $("#inputfile").onchange(function() {
            imgName = this.files[0].name;
        });
        return imgName;
    }


});
