var num = 3; //默认九宫格
$(function() {
    initPic();
    initNum();
    $("button").click(suffleCards);
});

function initPic() {
    $("table").empty();
    for (var row = 0; row < num; row++) {
        $("<tr></tr>").appendTo("table");
    }
    for (var col = 0; col < num; col++) {
        $("<td></td>").appendTo("tr");
    }
    $("td").click(moveCard);
}

function initNum() {
    $.post("php/initNum.php", {
        num: num
    }, function(data, status) {
        if (status == "success") {
            if (data == "dataIllegal") {
                alert("1<n<10");
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
        alert("1<n<10");
        return;
    }
    if (numSet != num) {
        num = parseInt(numSet);
        initPic();
    }
    initNum();
}

function isValid(input) {
    var reg = new RegExp("^[2-9]*$");
    return reg.test(input);
}

var moveCard = function() {
    var index = $("td").index($(this));
    for (var i = 1; i < 5; i++) {
        var surIndex = detectContext(index, i);
        if (typeof surIndex !== "undefined") {
            if ($("td").eq(surIndex).hasClass("zero")) {
                exContent(index, surIndex);
                return;
            }
        }
    }
}

function detectContext(index, direction) {
    switch (direction) {
        case 1: //上
            if (index > num - 1) {
                return index - num;
            }
            break;
        case 2: //右
            if (index % num !== num - 1) {
                return index + 1;
            }
            break;
        case 3: //下
            if (index < num * num - num) {
                return index + num;
            }
            break;
        case 4: //左
            if (index % num !== 0) {
                return index - 1;
            }
            break;
    }
}

function exContent(index, indexZero) {
    var indexText = $("td").eq(index).text();
    $("td").eq(index).text("").addClass("zero");
    $("td").eq(indexZero).text(indexText).removeClass("zero");
    isWin();
}

function isWin() {
    var zeroIndex = $("td").index($(".zero"));
    if (zeroIndex === num * num - 1) {
        var rank = $("td").text();
        var rankWin = "1";
        for (var i = 2; i < num * num; i++) {
            var rankWin = rankWin + i;
        }
        if (rank === rankWin) {
            alert("恭喜你成功啦！");
            initNum();
        }
    }
}
$(document).keydown(function(event) {
    var k = event.keyCode;
    if (k > 36 && k < 41) {
        var zeroIndex = $("td").index($(".zero"));
        var direction = (k == 40) ? 1 : k - 35; //左：k=37 direction=2；上：k=38 direction=3；右：k=39 direction=4；下：k=40 direction=1；
        var surIndex = detectContext(zeroIndex, direction);
        if (typeof surIndex !== "undefined") {
            exContent(surIndex, zeroIndex);
        }
    }
});