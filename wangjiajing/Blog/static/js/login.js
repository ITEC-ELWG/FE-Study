$(document).ready(function() {
    document.getElementsByClassName('loginBtn')[0].onclick = function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username == "" || password == "") {
            document.getElementById('check').innerHTML = "账户或密码不能为空！";
        } else {
            window.open("index.html");
        }
    };
});
