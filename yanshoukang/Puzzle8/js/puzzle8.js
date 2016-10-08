$(document).ready(function() {

    $("#button").click(function() {

        var content = document.getElementById('input');

        if ("" == content.value || content.value > 9 || content.value < 2) {
            alert("请输入有效值！");
        }
        else {
            createPuzzle(content.value);
        }
    })

    $(document).keyup(function(event) {

        if      (event.keyCode == 40/* && blank - order >= 0) {blank = changePosition(blank - order, blank);}*/)// 下
        else if (event.keyCode == 39/* && blank % order != 0) {blank = changePosition(blank - 1, blank);}*/)// 右
        else if (event.keyCode == 38/* && blank + order < order * order) {blank = changePosition(blank + order, blank);}*/)// 上
        else if (event.keyCode == 37/* && (blank + 1) % order != 0) {blank = changePosition(blank + 1, blank);}*/)// 左
    })

})

function createPuzzle(order) {

}