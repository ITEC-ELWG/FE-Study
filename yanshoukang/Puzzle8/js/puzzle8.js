var order;
var blank;
var array = new Array();
var value = new Array();
var borderTop = new Array();
var borderButtom = new Array();
var borderLeft = new Array();
var borderRight = new Array();

$(document).ready(function() {

    $("#button").click(function() {

        var content = document.getElementById("input");

        if ("" == content.value || content.value > 9 || content.value < 2) {
            alert("请输入有效值");
        }
        else {
            createPuzzle(content.value);
        }
    })

    $(document).keyup(function(event) {
        if      (event.keyCode == 37) puzzleLeft();   // 左
        else if (event.keyCode == 38) puzzleUp();     // 上
        else if (event.keyCode == 39) puzzleRight();  // 右
        else if (event.keyCode == 40) puzzleDown();   // 下
        else {};
    })

})

function createPuzzle(argument) {

    order = argument;

    var blockWidth = (300 - order * 4) / order;
    var blockHeight = blockWidth;

    for (var i = 0; i < order * order; i++) {
        array[i] = i;// 设置序号
    }

    $.post("../php/puzzle8.php", {order: order}, function(data, status) {
        if (status == "success") value = eval(data);
        else return;
    })

    setTimeout("", 50);// 程序运行暂停一段时间，等待数据传输完成

    if (undefined == value[0]) {
        alert("请求超时，请重试！");
        return;
    }

    for (var i = 0; i < order; i++) borderTop[i] = i;
    for (var i = 0; i < order; i++) borderButtom[i] = order * (order - 1) + i;
    for (var i = 0; i < order; i++) borderLeft[i] = order * i;
    for (var i = 0; i < order; i++) borderRight[i] = order * (i + 1) - 1;

    $("#puzzle").empty();

    for (var i = 0; i < order * order; i++) {

        $("#puzzle").append("<div id='" + array[i] +  "' class='block'>" + value[i] + "</div>");

        if (value[i] == 0) {
            $(".block").eq(array[i]).css("visibility", "hidden");
            blank = array[i];
        }

        $(".block").css("width", blockWidth);
        $(".block").css("height", blockHeight);
        $(".block").css("line-height", blockHeight + "px");
    }
}

function puzzleUp() {
    for (var i = 0; i < order; i++) {
        if (borderButtom[i] == blank) return;
        else continue;
    }

    var temp = Number(blank) + Number(order);
    $(".block").eq(blank).text($(".block").eq(temp).text());
    $(".block").eq(temp).css("visibility", "hidden");
    $(".block").eq(blank).css("visibility", "visible");
    blank = temp;

    isSucceed();
}

function puzzleDown() {
    for (var i = 0; i < order; i++) {
        if (borderTop[i] == blank) return;
        else continue;
    }

    var temp = Number(blank) - Number(order);
    $(".block").eq(blank).text($(".block").eq(temp).text());
    $(".block").eq(temp).css("visibility", "hidden");
    $(".block").eq(blank).css("visibility", "visible");
    blank = temp;

    isSucceed();
}

function puzzleRight() {
    for (var i = 0; i < order; i++) {
        if (borderLeft[i] == blank) return;
        else continue;
    }

    var temp = Number(blank) - Number(1);
    $(".block").eq(blank).text($(".block").eq(temp).text());
    $(".block").eq(temp).css("visibility", "hidden");
    $(".block").eq(blank).css("visibility", "visible");
    blank = temp;

    isSucceed();
}

function puzzleLeft() {
    for (var i = 0; i < order; i++) {
        if (borderRight[i] == blank) return;
        else continue;
    }

    var temp = Number(blank) + Number(1);
    $(".block").eq(blank).text($(".block").eq(temp).text());
    $(".block").eq(temp).css("visibility", "hidden");
    $(".block").eq(blank).css("visibility", "visible");
    blank = temp;

    isSucceed();
}

function isSucceed() {

    if (blank != order * order - 1) return;

    for (var i = 0; i < order * order - 1; i++) {
        if ((Number(array[i]) + 1) != $(".block").eq(i).text()) return;
        else continue;
    }

    alert("恭喜你，拼图完成啦！");

    createPuzzle(order);// 重新开始
}