$(document).ready(function() {
    var n;
    var inputArr = $(".input");
    var matrix = $(".matrix");

    //重置
    inputArr[1].onclick = function() {
        //先清除再生成
        matrix.empty();
        n = parseInt(inputArr[0].value);
        if (isNaN(n)) {
            alert("请输入n!");
        } else if (n <= 2 || n >= 10) {
            alert("n的取值应为（2<n<10）!");
        } else {
            generate();
            var blockArr = $(".block");
            var arr = getrandom();
            getrandomshow(arr);
            // for (var i = 0; i < n * n; i++) {
            //     blockArr[i].onclick = move;
            // }
            blockArr.each(function(i) {
                this.onclick = move;
            });
        }
    }

    //生成n*n的棋盘
    var generate = function() {
        var blockArr = $(".block");
        for (var i = 0; i < n; i++) {
            var rowStr = "";

            rowStr += '<div class="row' + i + '">' + '</div>';
            matrix.append(rowStr);
            for (var j = 0; j < n; j++) {
                var blockStr = "";

                blockStr += '<button class="block"></button>';
                $(".row" + i).append(blockStr);
            };
        };
        $(blockArr[n * n - 1]).addClass("move");
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
        // for (var i = 0; i < n * n; i++) {
        //     var blocki = $($(".block")[i]);
        //     blocki.html(arr[i] + 1);
        //     if (blocki.html() == n * n) {
        //         blocki.html("");
        //         blocki.addClass("move");
        //     }
        // }
        var blockArr = $(".block");
        blockArr.each(function(i) {
            var blocki = $(this);
            blocki.html(arr[i] + 1);
            if (blocki.html() == n * n) {
                blocki.html("");
                blocki.addClass("move");
            }
        });
        if (move0.html() != "") {
            move0.removeClass("move");
        }
    }

    //判断点击的块能不能移动
    var canmove = function(cur) {
        var moveArr = $(".move");
        var blockArr = $(".block");
        for (var i = 0; i < n * n; i++) {
            if (blockArr[i] == cur) {
                if (blockArr[i - n] == moveArr[0] || blockArr[i - 1] == moveArr[0] || blockArr[i + 1] == moveArr[0] || blockArr[i + n] == moveArr[0]) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        // blockArr.each(function(i){
        //     if (this == cur) {
        //         if (blockArr[i - n] == moveArr[0] || blockArr[i - 1] == moveArr[0] || blockArr[i + 1] == moveArr[0] || blockArr[i + n] == moveArr[0]) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        // });
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
        var blockArr = $(".block");
        for (var i = 0; i < n * n - 1; i++) {
            var blocki = $(blockArr[i]);
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
        var blockArr = $(".block");
        var moveArr = $(".move");
        var move0 = $($(".move")[0]);

        // for (var i = 0; i < n * n; i++) {
        //     if (moveArr[0] == blockArr[i]) {

        blockArr.each(function(i) {
            if (moveArr[0] == this) {
                switch (e.keyCode) {
                    case 37:
                        var right = $(blockArr[i + 1]);
                        for (var j = 1; j <= n; j++) {
                            if (i == n * j - 1) {
                                return;
                            }
                        }
                        move0.html(right.html());
                        right.html("");
                        right.addClass("move");
                        move0.removeClass("move");
                        return;
                        break;
                    case 38:
                        var bottom = $(blockArr[i + n]);
                        if (i < n * n - n) {
                            move0.html(bottom.html());
                            bottom.html("");
                            bottom.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                    case 39:
                        var left = $(blockArr[i - 1]);
                        for (var j = 0; j < n; j++) {
                            if (i == n * j) {
                                return;
                            }
                        }
                        move0.html(left.html());
                        left.html("");
                        left.addClass("move");
                        move0.removeClass("move");
                        return;
                        break;
                    case 40:
                        var top = $(blockArr[i - n]);
                        if (i >= n) {
                            move0.html(top.html());
                            top.html("");
                            top.addClass("move");
                            move0.removeClass("move");
                            return;
                        };
                        break;
                }
            }
        });

        //     }
        // }

    });
});
