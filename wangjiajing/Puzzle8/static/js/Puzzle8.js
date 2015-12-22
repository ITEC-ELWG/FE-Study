$(document).ready(function() {
    //生成随机数组
    var getrandom = function() {
        var array = new Array(1, 2, 3, 4, 5, 6, 7, 8);
        var randomsort = function() {
            return Math.random() > 0.5 ? -1 : 1;
        };
        return array.sort(randomsort);
    };
    var arr = getrandom();
    var getrandomshow = function() {
        for (var i = 0; i < 8; i++) {
            $(".block")[i].innerHTML = arr[i];
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
        for (var i = 0; i < 9; i++) {
            $(".block")[i].onclick = function() {
                var that = $(this);
                var move0 = $(".move")[0];
                if (canmove(this)) {
                    var temp = this.innerHTML;
                    this.innerHTML = "";
                    move0.innerHTML = temp;
                    that.addClass("move");
                    $(move0).removeClass("move");
                }
            }
        }
    }
    move();

    //提示赢了
    var win = function() {
        for (var i = 0; i < 8; i++) {
                if ($(".block")[i].innerHTML != i + 1) {
                    return;
                }
            }
        alert("You win!");
    }
    win();
});
