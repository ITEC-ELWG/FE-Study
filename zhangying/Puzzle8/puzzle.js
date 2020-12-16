$(function() {
    var position = parseInt($(".obj").attr("class")); //记录空格位置

    $("button").click(function() { //reset

        var arr = ['', '1', '2', '3', '4', '5', '6', '7', '8'];
        shuffle(arr);
        for (i = 0; i < 9; i++) {
            $(".puzzle div").eq(i).text(arr[i]);
            if (arr[i] == '') {
                $('.obj').toggleClass('obj'); //reset之后空格重新定位
                $(".puzzle div").eq(i).addClass('obj');
                position = parseInt($(".obj").attr("class"));
            }
        }

    });

    $(".puzzle div").click(function() {
        var cur_pos = parseInt($(this).attr("class")); //所点击方块的位置
        var judge = Math.abs(cur_pos - position); //判定是否4-连接
        if (judge == 10 || judge == 1) {
            temp = $(this).text(); //交换，重定位
            $(this).text("");
            $(".puzzle div.obj").text(temp);
            $(".obj").toggleClass("obj");
            $(this).toggleClass("obj");
            position = cur_pos;

            check(); //判断是否结束

        }

    });

    function shuffle(arr) { //随机打乱数组函数
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
    }

    function check() {
        for (i = 0; i < 8; i++) {
            if (parseInt($(".puzzle div").eq(i).text()) != (i + 1)) {
                return;
            }
        };
        alert("Success!");
    };
});