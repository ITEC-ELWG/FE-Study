var dim = 3; //宫格行列数，默认为3
$(document).ready(function() {
    initPuzzle(); //生成表格
    initNumber(); //获取乱序排列的数据并显示
    $("button").click(reset); //绑定重置按钮点击事件的响应函数
});

$(document).keydown(function(event) {
    var k = event.keyCode;
    if (k > 36 && k < 41) { //判断是否为方向键
        var zeroIndex = $("td").index($(".zero"));
        var direction = (k == 40) ? 1 : k - 35; //左：k=37 direction=2；上：k=38 direction=3；右：k=39 direction=4；下：k=40 direction=1；
        var surIndex = getSurround(zeroIndex, direction);
        if (typeof surIndex !== "undefined") {
            exchange(surIndex, zeroIndex);
        }
    }
});

//自定义表格。先清空原有表格，再重新添加。并绑定单元格点击事件。
function initPuzzle() {
    $("table").empty();
    for (var row = 0; row < dim; row++) {
        $("<tr></tr>").appendTo("table");
    }
    for (var col = 0; col < dim; col++) {
        $("<td></td>").appendTo("tr");
    }
    $("td").click(tdClicked); //设定短时间内点击无效     
}

//获取乱序排列的数据并显示
function initNumber() {
    $.post("random_number_generator.php", {dim: dim}, function(data, status) {
        if (status == "success") {
            if (data == "dataIllegal") {
                alert("请输入数字n且2<n<10");
            } else {
                var randomNum = eval(data);
                //randomNum=[1,2,3,4,5,6,0,7,8]; 测试功能：判断游戏是否获胜
                for (var i = 0; i < dim * dim; i++) {
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

//重置按钮点击事件的响应函数
//若输入非法，提示并返回；若输入为空或当前维度，重置数据；若输入合法且非当前维度，重置表格
var reset = function() {
    var dimSet = $(".dim").val(); //用户输入的行列数
    if (!dimSet) {
        dimSet = dim;
    } else if (!validate(dimSet)) {
        alert("请输入数字n且2<n<10");
        return;
    }
    if (dimSet != dim) {
        dim = parseInt(dimSet);
        initPuzzle();
    }
    initNumber();
}

//验证输入是否为3-9的数字
function validate(input) {
    var reg = new RegExp("^[3-9]*$");
    return reg.test(input);
}

//单元格点击事件
var tdClicked = function() {
    var index = $("td").index($(this)); //点击的td在表格中的序号
    for (var i = 1; i < 5; i++) {
        var surIndex = getSurround(index, i);
        if (typeof surIndex !== "undefined") {
            if ($("td").eq(surIndex).hasClass("zero")) {
                exchange(index, surIndex);
                return;
            }
        }
    }
}

//获取某一方向单元格的序号
//index：单元格在表格中的序号   direction:方向
function getSurround(index, direction) {
    switch (direction) {
    case 1://上
        if (index > dim - 1) {
            return index - dim;
        }
        break;
    case 2://右
        if (index % dim !== dim - 1) {
            return index + 1;
        }
        break;
    case 3://下
        if (index < dim * dim - dim) {
            return index + dim;
        }
        break;
    case 4://左
        if (index % dim !== 0) {
            return index - 1;
        }
        break;
    }
}

//交换两单元格的内容,并判断游戏是否获胜
function exchange(index, indexZero) {
    var indexText = $("td").eq(index).text();
    $("td").eq(index).text("").addClass("zero");
    $("td").eq(indexZero).text(indexText).removeClass("zero");
    if (isWin()) {
        alert("恭喜你成功啦！");
        initNumber();
    }
}

//判断游戏是否获胜
function isWin() {
    var zeroIndex = $("td").index($(".zero"));
    if (zeroIndex === dim * dim - 1) {
        var rank = $("td").text();
        var rankWin = "1";
        for (var i = 2; i < dim * dim; i++) {
            var rankWin = rankWin + i;
        }
        if (rank === rankWin) {
            return true;
        }
    }
    return false;
}