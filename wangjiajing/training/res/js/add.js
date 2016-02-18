$(document).ready(function() {
    var studentsi;
    var imgName;
    var i = parseInt($('.hidden').html()) - 1;

    $('#datetimepicker').datetimepicker({
        format: 'yyyy-MM-dd',
        language: 'pt-BR'
    });


    $.get('./../../students').done(function(data) {
        var json = JSON.parse(data);
        var students = json.data.students;
        studentsi = students[i];
        if (i >= 0) {
            edit();
            add();
        } else {
            add();
        }
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
        // $("#inputfile").val(studentsi.image);
    }


    //添加一行
    function add() {
        $(".save").click(function() {
            $.post("./../../students", {
                "studentId": $("#studentId").val(),
                "name": $("#name").val(),
                "gradeId": $("#grade").val(),
                "tutorId": $("#tutor").val(),
                "phone": $("#phone").val(),
                "email": $("#email").val(),
                "birthday": $("#birthday").val(),
                "image": "http://7xqj87.com1.z0.glb.clouddn.com/default.png"
            }).done(function(data) {
                alert(data);
                window.parent.location.reload(true);
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
    formData.append('file', f);
    formData.append('token', upload_token);
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
            alert(blkRet);
        } else {
            alert("上传图片失败！");
        }
    };

}

//上传策略
function getPolicy() {
    var putPolicy = '{"scope": "my-bucket:"'+imgName+'","deadline": "1455820074"}';
    return putPolicy;
}

//生成token
var genUpToken = function() {
    var putPolicy = getPolicy();
    var accessKey = "iN7NgwM31j4-BZacMjPrOQBs34UG1maYCAQmhdCV";
    var secretKey = "6QTOr2Jg1gcZEWDQXKOGZh5PziC2MCV5KsntT70j";

    var put_policy = JSON.stringify(putPolicy);
    alert("put_policy = " + put_policy);

    var encoded = base64encode(utf16to8(put_policy));
    alert("encoded = " + encoded);

    var hash = CryptoJS.HmacSHA1(encoded, secretKey);
    var encoded_signed = hash.toString(CryptoJS.enc.Base64);
    alert("encoded_signed=" + encoded_signed);

    var upload_token = accessKey + ":" + safe64(encoded_signed) + ":" + encoded;
    alert("upload_token=" + upload_token);
    return upload_token;

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
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

    function base64encode(str) {
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
    var safe64 = function(base64) {
        base64 = base64.replace(/\+/g, "-");
        base64 = base64.replace(/\//g, "_");
        return base64;
    };

};

function uploadPicture() {
    var fileSize = $("#inputfile")[0].files[0].size;
    imgName = $("#inputfile")[0].files[0].name;
    if (fileSize > 0) {
        qiniu_upload($("#inputfile")[0].files[0]);
    } else {
        alert("上传失败！");
    }
}
