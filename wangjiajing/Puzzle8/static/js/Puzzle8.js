// var blockArr = $(".block");

$(document).ready(function() {
    //生成随机数组
    var getrandom = function() {
        var array = new Array(4, 5, 3, 1, 9, 8, 7, 6, 2);
        var randomsort = function() {
            return Math.random() > 0.5 ? -1 : 1;
        }
        return array.sort(randomsort);
    }
    var arr = getrandom();

    var getrandomshow = function() {
        var move0 = $($(".move")[0]);
        for (var i = 0; i < 9; i++) {
            var blocki = $($(".block")[i]);
            blocki.html(arr[i]);
            if (blocki.html() == 9) {
                blocki.html("");
                blocki.addClass("move");
            }
        }
        if (move0.html() != "") {
            move0.removeClass("move");
        }

    }
    getrandomshow();

    //判断点击的块能不能移动
    var canmove = function(cur) {
        for (var i = 0; i < 9; i++) {
            if ($(".block")[i] == cur) {
                if ($(".block")[i - 3] == $(".move")[0] || $(".block")[i - 1] == $(".move")[0] || $(".block")[i + 1] == $(".move")[0] || $(".block")[i + 3] == $(".move")[0]) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    //移动
    var move = function() {
        var that = $(this);
        var move0 = $($(".move")[0]);
        if (canmove(this)) {
            move0.html(that.html());
            that.html("");
            that.addClass("move");
            move0.removeClass("move");
        }
    }

    for (var i = 0; i < 9; i++) {
        $(".block")[i].onclick = move;
    }

    //提示赢了
    var win = function() {
        for (var i = 0; i < 8; i++) {
            var blocki = $($(".block")[i]);
            if (blocki.html() != i + 1) {
                return;
            }
        }
        alert("You win!");
    }
    win();

    //重置
    $(".input")[1].onclick = function() {
        window.location = "./Puzzle8.html";
    }

    //键盘移动
    $(document).keyup(function(e) {
        var move0 = $($(".move")[0]);

        for (var i = 0; i < 9; i++) {
            if ($(".move")[0] == $(".block")[i]) {
                switch (e.keyCode) {
                    case 37:
                        var left = $($(".block")[i - 1]);
                        if (i != 0 && i != 3 && i != 6) {
                            move0.html(left.html());
                            left.html("");
                            left.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                    case 38:
                        var top = $($(".block")[i - 3]);
                        if (i != 0 && i != 1 && i != 2) {
                            move0.html(top.html());
                            top.html("");
                            top.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                    case 39:
                        var right = $($(".block")[i + 1]);
                        if (i != 2 && i != 5 && i != 8) {
                            move0.html(right.html());
                            right.html("");
                            right.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                    case 40:
                        var bottom = $($(".block")[i + 3]);
                        if (i != 6 && i != 7 && i != 8) {
                            move0.html(bottom.html());
                            bottom.html("");
                            bottom.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                }
            }
        }
    });

});
