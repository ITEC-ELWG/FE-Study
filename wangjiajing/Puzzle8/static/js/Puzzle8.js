$(document).ready(function() {
    var n;

    //重置
    $(".input")[1].onclick = function() {
        //先清除再生成
        $(".matrix").empty();
        n = parseInt($(".input")[0].value);
        if (isNaN(n)) {
            alert("请输入n!");
        } else if (n <= 2 || n >= 10) {
            alert("n的取值应为（2<n<10）!");
        } else {
            generate();
            var arr = getrandom();
            getrandomshow(arr);
            for (var i = 0; i < n * n; i++) {
                $(".block")[i].onclick = move;
            }
        }
    }

    //生成n*n的棋盘
    var generate = function() {
        for (var i = 0; i < n; i++) {
            var rowStr = "";

            rowStr += '<div class="row' + i + '">' + '</div>';
            $(".matrix").append(rowStr);
            for (var j = 0; j < n; j++) {
                var blockStr = "";

                blockStr += '<button class="block"></button>';
                $(".row" + i).append(blockStr);
            };
        };
        $($(".block")[n * n - 1]).addClass("move");
    }

    //生成随机数组
    var getrandom = function() {
        var array = new Array;
        for (var i = 0; i < n * n; i++) {
            array[i] = i;
        };
        var randomsort = function() {
            return Math.random() > 0.5 ? -1 : 1;
        }
        return array.sort(randomsort);
    }

    //将随机数组值赋给棋盘
    var getrandomshow = function(arr) {
        var move0 = $($(".move")[0]);
        for (var i = 0; i < n * n; i++) {
            var blocki = $($(".block")[i]);
            blocki.html(arr[i] + 1);
            if (blocki.html() == n * n) {
                blocki.html("");
                blocki.addClass("move");
            }
        }
        if (move0.html() != "") {
            move0.removeClass("move");
        }

    }

    //判断点击的块能不能移动
    var canmove = function(cur) {
        for (var i = 0; i < n * n; i++) {
            if ($(".block")[i] == cur) {
                if ($(".block")[i - n] == $(".move")[0] || $(".block")[i - 1] == $(".move")[0] || $(".block")[i + 1] == $(".move")[0] || $(".block")[i + n] == $(".move")[0]) {
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

    //提示赢了
    var win = function() {
        for (var i = 0; i < n * n - 1; i++) {
            var blocki = $($(".block")[i]);
            if (blocki.html() != i + 1) {
                return;
            }
        }
        if (!isNaN(n)) {
            alert("You win!");
        }

    }
    win();

    //键盘移动
    $(document).keyup(function(e) {
        var move0 = $($(".move")[0]);

        for (var i = 0; i < n * n; i++) {
            if ($(".move")[0] == $(".block")[i]) {
                switch (e.keyCode) {
                    case 37:
                        var left = $($(".block")[i - 1]);
                        if (i != 0) {
                            move0.html(left.html());
                            left.html("");
                            left.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                    case 38:
                        var top = $($(".block")[i - n]);
                        if (i >= n) {
                            move0.html(top.html());
                            top.html("");
                            top.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                    case 39:
                        var right = $($(".block")[i + 1]);
                        if (i != n * n - 1) {
                            move0.html(right.html());
                            right.html("");
                            right.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                    case 40:
                        var bottom = $($(".block")[i + n]);
                        if (i < n * n - n) {
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
