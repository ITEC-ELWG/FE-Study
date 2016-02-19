var pictureUrl;
var imgName;
$(document).ready(function() {
    var studentsi;
    var tutors;
    var grades;
    var i = parseInt($('.hidden').html()) - 1;

    $('#datetimepicker').datetimepicker({
        format: 'yyyy-MM-dd',
        language: 'pt-BR'
    });

    //获取学生信息
    $.get('./../../students').done(function(data) {
        var json = JSON.parse(data);
        var students = json.data.students;
        studentsi = students[i];
        if (i >= 0) {
            edit();
            add();
            // clickDelete();//更改信息。。。
        } else {
            add();
        }
    });

    //获取导师
    $.get('./../../tutors').done(function(data) {
        var json = JSON.parse(data);
        tutors = json.data;
    });

    //获取年级
    $.get('./../../grades').done(function(data) {
        var json = JSON.parse(data);
        grades = json.data;
    });

    //将获取的数据显示
    function edit() {
        $("#studentId").val(studentsi.studentId);
        $("#name").val(studentsi.name);
        $("#grade option[value='" + studentsi.grade + "']").attr("selected", true);
        $("#tutor option[value='" + studentsi.tutor + "']").attr("selected", true);
        $("#phone").val(studentsi.phone);
        $("#email").val(studentsi.email);
        $("#birthday").val(studentsi.birthday);
    }

    //添加一行
    function add() {
        $(".save").click(function() {
            var tutorId;
            var gradeId;
            for (var j = 0; j < tutors.length; j++) {
                if(tutors[j].tutor == $("#tutor").val()){
                    tutorId = tutors[j].id;
                    break;
                }
            };
            for (var j = 0; j < grades.length; j++) {
                if(grades[j].grade == $("#grade").val()){
                    gradeId = grades[j].id;
                    break;
                }
            };
            
            $.post("./../../students", {
                "studentId": $("#studentId").val(),
                "name": $("#name").val(),
                "gradeId": gradeId,
                "tutorId": tutorId,
                "phone": $("#phone").val(),
                "email": $("#email").val(),
                "birthday": $("#birthday").val(),
                "image": pictureUrl
            }).done(function(data) {
                alert(data);
                window.parent.location.reload(true);
                history.back();
            });
        });
    }

});

//七牛云上传照片
var qiniu_upload = function(f) {
    var upload_token = genUpToken();
    var qiniu_UploadUrl = "http://upload.qiniu.com/";
    var progressbar = $(".progress-bar"),
        progressLabel = $(".progress-label");
    var xhr = new XMLHttpRequest();
    var formData;
    var startDate;

    xhr.open('POST', qiniu_UploadUrl, true);
    formData = new FormData();
    formData.append('token', upload_token);
    formData.append('file', f);
    formData.append('key', imgName);
    xhr.send(formData);

    startDate = new Date().getTime();

    xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
            var nowDate = new Date().getTime();
            var taking = nowDate - startDate;
            var x = (e.loaded) / 1024;
            var y = taking / 1000;
            var uploadSpeed = (x / y);
            var formatSpeed;
            if (uploadSpeed > 1024) {
                formatSpeed = (uploadSpeed / 1024).toFixed(2) + "Mb\/s";
            } else {
                formatSpeed = uploadSpeed.toFixed(2) + "Kb\/s";
            }
            progressLabel.html("上传速度：" + formatSpeed);

            var percentComplete = Math.round(e.loaded * 100 / e.total);
            progressbar.style.width = percentComplete + "%";
        }
    }, false);

    xhr.onreadystatechange = function(response) {
        if (xhr.readyState == 4 && xhr.status == 200 && xhr.responseText != "") {
            var blkRet = JSON.parse(xhr.responseText);
            pictureUrl = 'http://7xqw4a.com1.z0.glb.clouddn.com/' + blkRet.key;
        }
    };

}

//上传策略
function getPolicy(bucketName) {
    var putPolicy = new Object();
    putPolicy.scope = bucketName + ':' + imgName;
    putPolicy.deadline = Math.round(new Date().getTime() / 1000) + 300;
    putPolicy.mineLimie = "image/*";
    return putPolicy;
}


//生成token
function genUpToken() {
    var bucketName = 'missmhwgo';
    var putPolicy = getPolicy(bucketName);
    var accessKey = "RtI124b-7QB2bszxmGC8CUNG_0dvP6etKc8SizS1";
    var secretKey = "IO0euBplz_Ah3ponYiA2VWU6caHgyohGcpXPRj0G";

    var put_policy = JSON.stringify(putPolicy);

    var encoded = base64encode(utf16to8(put_policy));

    var hash = CryptoJS.HmacSHA1(encoded, secretKey);
    var encoded_signed = hash.toString(CryptoJS.enc.Base64);

    var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;

    return upload_token;
}

//utf16to8算法
function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

//base64encode算法
function base64encode(str) {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

//safe64算法
function safe64(base64) {
    base64 = base64.replace(/\+/g, "-");
    base64 = base64.replace(/\//g, "_");
    return base64;
};


function uploadPicture() {
    var file = $("#inputfile")[0].files[0];
    var fileSize = file.size;
    imgName = file.name;

    if (fileSize > 0) {
        qiniu_upload(file);
    } else {
        alert("上传失败！");
    }
}
