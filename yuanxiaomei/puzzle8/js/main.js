/**
 * Created by JOYyuan on 16/1/1.
 */
var num = 3; //默认九宫格
$(function() {
    table_layout();
    put_table_num();
    $("button").click(suffleCards);
});

function table_layout() {
    $("table").empty();
    for (var row = 0; row < num; row++) {
        $("<tr></tr>").appendTo("table");
    }
    for (var col = 0; col < num; col++) {
        $("<td></td>").appendTo("tr");
    }
    $("td").click(moveCard);
}

function put_table_num() {
    $.post("request.php", {
        num: num
    }, function(data, status) {
        if (status == "success") {
            if (data == "fail") {
                alert("[3,9]");
            } else {
                var randomNum = eval(data);
                for (var i = 0; i < num * num; i++) {
                    if (randomNum[i] == 0) {
                        $("td").eq(i).text("").addClass("zero");
                    } else {
                        $("td").eq(i).text(randomNum[i]).removeClass("zero");
                    }
                }
            }
        }
    });
}
var suffleCards = function() {
    var numSet = $(".num").val();
    if (!numSet) {
        numSet = num;
    } else if (!isValid(numSet)) {
        alert("[3,9]");
        return;
    }
    if (numSet != num) {
        num = parseInt(numSet);
        table_layout();
    }
    put_table_num();
}

function isValid(input) {
    var reg = new RegExp("^[3-9]*$");
    return reg.test(input);
}

var moveCard = function() {
    var index = $("td").index($(this));
    for (var i = 1; i < 5; i++) {
        var surIndex = table_in(index, i);
        if (typeof surIndex !== "undefined") {
            if ($("td").eq(surIndex).hasClass("zero")) {
                ex_table(index, surIndex);
                return;
            }
        }
    }
}

function table_in(index, direction) {
    switch (direction) {
        case 1:
            if (index > num - 1) {
                return index - num;
            }
            break;
        case 2:
            if (index % num !== num - 1) {
                return index + 1;
            }
            break;
        case 3:
            if (index < num * num - num) {
                return index + num;
            }
            break;
        case 4:
            if (index % num !== 0) {
                return index - 1;
            }
            break;
    }
}

function ex_table(index, indexZero) {
    var indexText = $("td").eq(index).text();
    $("td").eq(index).text("").addClass("zero");
    $("td").eq(indexZero).text(indexText).removeClass("zero");
    game_pass();
}

function game_pass() {
    var zeroIndex = $("td").index($(".zero"));
    if (zeroIndex === num * num - 1) {
        var rank = $("td").text();
        var pass_in = "1";
        for (var i = 2; i < num * num; i++) {
            var pass_in = pass_in + i;
        }
        if (rank === pass_in) {
            alert("SUCCEED！");
            put_table_num();
        }
    }
}
$(document).keydown(function(event) {
    var k = event.keyCode;
    if (k > 36 && k < 41) {
        var zeroIndex = $("td").index($(".zero"));
        var direction = (k == 40) ? 1 : k - 35; //左：k=37 direction=2；上：k=38 direction=3；右：k=39 direction=4；下：k=40 direction=1；
        var surIndex = table_in(zeroIndex, direction);
        if (typeof surIndex !== "undefined") {
            ex_table(surIndex, zeroIndex);
        }
    }
});