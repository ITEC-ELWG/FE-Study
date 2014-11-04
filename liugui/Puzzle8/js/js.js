//这个数组记录当前每个位置上的方块情况
var nowStatus = new Array(0, 1, 2, 3, 4, 5, 6, 8, 7);
//var initStatus = new Array;
var setStatus = new Array();

var n = 3;

function valueGet(e) {
    //vget存储当前点击到的方块的值
    var vget = e.value;
    $("#test").text(vget);
    //找出当前点击的那一块在游戏方格中的位置，并保存在k中 
    for (var i = 0; i < 9; i++) {
        if (nowStatus[i] == vget) {
            var k = i;
            $("#test2").text(k);
            break;
        }
    }
    return k;
}

function set(nowStatus, setStatus) {
    //根据给定的initStatus值设定nowStatues值并且排列界面！
    for (var i = 0; i < 9; i++) {
        if (nowStatus[i] != 8) {
            var setNum = nowStatus[i] + 1;
            $("[value=" + setStatus[i] + "]").text(setNum)
                //先要把之前设置的属性移出再添加，相当于修改class
                .removeClass()
                .addClass("number")
                .attr({
                    "id": nowStatus[i]
                        //"value": nowStatus[i]
                });
        } else if (nowStatus[i] === 8) {
            $("[value=" + setStatus[i] + "]").text("9")
                .removeClass()
                .addClass("special")
                .attr({
                    "id": 8
                        //"value": 8
                });
        }
    }
    //分两次设置，解决BUG了！！
    for (var j = 0; j < 9; j++) {
        $("#" + nowStatus[j]).attr({
            "value": nowStatus[j]
        });
    }
}



$(document).ready(function() {
    $(".buttonCss").click(function() {
        //用setStatus将当前的nowStatus暂存下来
        setStatus = nowStatus;
        $.ajax({
            url: "../php/initStatus.php",
            type: "GET",
            dataType: "json",
            success: function(data) {
                nowStatus = data;
                set(nowStatus, setStatus);
            },
            async: true
        });
    });
});

$(document).ready(function() {
        $("ul li").click(function() {
            //valueGet()函数放在这里调用
            var p = valueGet(this);
            if (nowStatus[p] != 8) {
                var row = Math.floor(p / n);
                var col = p % n;

                //向上的情况
                if (((p - n) >= 0) && (nowStatus[p - n] == 8)) {
                    nowStatus[p - n] = nowStatus[p];
                    nowStatus[p] = 8;
                    $("#" + nowStatus[p - n]).animate({
                        top: "-=200px"
                    }, 100);
                    //callback函数不能直接调用，要用function代入
                    $("#" + nowStatus[p]).animate({
                        top: "+=200px"
                    }, 100, function() {
                        successful();
                    });

                }
                //向下的情况
                else if (((p + n) < (n * n)) && (nowStatus[p + n] == 8)) {
                    nowStatus[p + n] = nowStatus[p];
                    nowStatus[p] = 8;
                    $("#" + nowStatus[p + n]).animate({
                        top: "+=200px"
                    }, 100);
                    $("#" + nowStatus[p]).animate({
                        top: "-=200px"
                    }, 100, function() {
                        successful();
                    });

                }
                //向左的情况
                else if (((p - 1) >= 0) && ((p - 1) < (n * n - 1)) && (nowStatus[p - 1] == 8)) {
                    nowStatus[p - 1] = nowStatus[p];
                    nowStatus[p] = 8;
                    $("#" + nowStatus[p - 1]).animate({
                        left: "-=200px"
                    }, 100);
                    $("#" + nowStatus[p]).animate({
                        left: "+=200px"
                    }, 100, function() {
                        successful()
                    });

                }
                //向右的情况
                else if (((p + 1) > 0) && ((p + 1) < n * n) && (nowStatus[p + 1] == 8)) {
                    nowStatus[p + 1] = nowStatus[p];
                    nowStatus[p] = 8;
                    $("#" + nowStatus[p + 1]).animate({
                        left: "+=200px"
                    }, 100);
                    $("#" + nowStatus[p]).animate({
                        left: "-=200px"
                    }, 100, function() {
                        successful();
                    });

                }
            }
        });

    })
    //一个document.ready下面只能有一个函数，不能同时有多个
    //用jQuery获取输入的表单值
$(document).ready(function() {
    $(".submit").bind("click", function() {
        var nTemp = 0;
        nTemp = $("#box").val();
        var inputStatus = new Array();
        //先删除多余的元素
        $("ul li:eq(8)").nextAll().remove();
        //然后增加需要的元素
        for (var i = 9; i < (nTemp * nTemp); i++) {
            $("ul li:eq(" + (i - 1) + ")").after("<li>" + i + "</li>");
        }
        //最后给所有元素赋属性
        for (var j = 0; j < (nTemp * nTemp); j++) {
            inputStatus[j] = j;
            $("ul li:eq(" + j + ")").css({
                "width": (600 / nTemp - 2) + "px",
                "height": (600 / nTemp - 2) + "px",
                "font-size": (24 / nTemp) + "em",
                "line-height": (600 / nTemp) + "px",
                "border": "1px solid",
                "color": "#FFFFFF"
            });
        }
    });
})


function successful() {
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
