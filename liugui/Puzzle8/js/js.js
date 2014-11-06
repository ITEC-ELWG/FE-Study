//这个数组记录当前每个位置上的方块情况
var nowStatus = [0, 1, 2, 3, 4, 5, 6, 8, 7];
//var initStatus = new Array;
var setStatus = [];
var n = 3;

function getValue(e) {
    //vget存储当前点击到的方块的值
    var vget = e.value;
    //找出当前点击的那一块在游戏方格中的位置，并保存在k中 
    for (var i = 0; i < n * n; i++) {
        if (nowStatus[i] == vget) {
            var k = i;
            break;
        }
    }
    return k;
}

function set(nowStatus, setStatus, n) {
    //根据给定的initStatus值设定nowStatues值并且排列界面！
    for (var i = 0; i < n * n; i++) {
        if (nowStatus[i] != (n * n - 1)) {
            var setNum = nowStatus[i] + 1;
            $("[value=" + setStatus[i] + "]").text(setNum)
                //先要把之前设置的属性移出再添加，相当于修改class
                .removeClass()
                .addClass("number")
                .attr("id", nowStatus[i]);
        } else if (nowStatus[i] == (n * n - 1)) {
            $("[value=" + setStatus[i] + "]").text(n * n)
                .removeClass()
                .addClass("special")
                .attr("id", (n * n - 1));
        }
    }
    //分两次设置，解决BUG了！！
    for (var j = 0; j < (n * n); j++) {
        $("#" + nowStatus[j]).attr({
            "value": nowStatus[j]
        });
    }
}

function getAjax(setStatus) {
    $.ajax({
        type: "POST",
        url: "../php/initStatus.php",
        data: {
            num: n
        },
        dataType: "json",
        success: function(data) {
            nowStatus = data;
            set(nowStatus, setStatus, n);
        }
    });
}

$(document).ready(function() {
    $(".buttonCss").click(function() {
        setStatus = nowStatus;
        getAjax(setStatus);
    });
});
//实现滑块移动的函数
$(document).ready(function() {
        //$("ul li").click(function() {
        $("ul").on("click", "li", function() {
            //getValue()函数放在这里调用
            var p = getValue(this);
            if (nowStatus[p] != (n * n - 1)) {
                var row = Math.floor(p / n);
                var col = p % n;
                //向上的情况
                if (((p - n) >= 0) && (nowStatus[p - n] == (n * n - 1))) {
                    nowStatus[p - n] = nowStatus[p];
                    nowStatus[p] = (n * n - 1);
                    $("#" + nowStatus[p - n]).animate({
                        top: "-=" + (600 / n) + "px"
                    }, 100);
                    //callback函数不能直接调用，要用function代入
                    $("#" + nowStatus[p]).animate({
                        top: "+=" + (600 / n) + "px"
                    }, 100, function() {
                        checkSuccess();
                    });
                }
                //向下的情况
                else if (((parseInt(p) + parseInt(n)) < (n * n)) && (nowStatus[parseInt(p) + parseInt(n)] == (n * n - 1))) {
                    nowStatus[parseInt(p) + parseInt(n)] = nowStatus[p];
                    nowStatus[p] = (n * n - 1);
                    $("#" + nowStatus[parseInt(p) + parseInt(n)]).animate({
                        top: "+=" + (600 / n) + "px"
                    }, 100);
                    $("#" + nowStatus[p]).animate({
                        top: "-=" + (600 / n) + "px"
                    }, 100, function() {
                        checkSuccess();
                    });
                }
                //向左的情况
                else if (((p - 1) >= 0) && ((p - 1) < (n * n - 1)) && (nowStatus[p - 1] == (n * n - 1))) {
                    nowStatus[p - 1] = nowStatus[p];
                    nowStatus[p] = (n * n - 1);
                    $("#" + nowStatus[p - 1]).animate({
                        left: "-=" + (600 / n) + "px"
                    }, 100);
                    $("#" + nowStatus[p]).animate({
                        left: "+=" + (600 / n) + "px"
                    }, 100, function() {
                        checkSuccess()
                    });
                }
                //向右的情况
                else if (((p + 1) > 0) && ((p + 1) < n * n) && (nowStatus[p + 1] == (n * n - 1))) {
                    nowStatus[p + 1] = nowStatus[p];
                    nowStatus[p] = (n * n - 1);
                    $("#" + nowStatus[p + 1]).animate({
                        left: "+=" + (600 / n) + "px"
                    }, 100);
                    $("#" + nowStatus[p]).animate({
                        left: "-=" + (600 / n) + "px"
                    }, 100, function() {
                        checkSuccess();
                    });
                }
            }
        });
    })
    //用jQuery获取输入的表单值
$(document).ready(function() {
    $(".submit").on("click", function() {
        n = $("#box").val();
        var inputStatus = [];
        //先删除所有元素
        $("ul").empty();
        //然后增加需要数目的元素
        for (var i = 0; i < (n * n); i++) {
            //注意在jQuery中所有变量的实现方法：除变量外全部加双引号，并且用加号连接
            $("ul").append("<li>" + (i + 1) + "</li>");
        }
        //最后给所有元素赋属性
        for (var j = 0; j < (n * n); j++) {
            inputStatus[j] = j;
            $("ul li:eq(" + j + ")").css({
                    "width": (600 / n - 2) + "px",
                    "height": (600 / n - 2) + "px",
                    "font-size": (24 / n) + "em",
                    "line-height": (600 / n) + "px"
                })
                .attr({
                    "id": j,
                    "value": j
                });
        }
        //打乱数组,用的Ajax打乱的方法
        getAjax(inputStatus);
    });
})

function checkSuccess() {
    for (var i = 0; i < (n * n); i++) {
        var successTag = 0;
        if (nowStatus[i] != i) {
            successTag = 1;
            break;
        }
    }
    if (successTag == 0) {
        alert("恭喜过关，请按重置按钮开始下一轮游戏！");
    }
}