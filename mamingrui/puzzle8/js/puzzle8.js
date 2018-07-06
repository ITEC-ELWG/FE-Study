var d = new Array(10)
//保存大DIV当前装的小DIV的编号
var d_direct = new Array(
    [0],
    [2, 4],
    [1, 3, 5],
    [2, 6],
    [1, 5, 7],
    [2, 4, 6, 8],
    [3, 5, 9],
    [4, 8],
    [5, 7, 9],
    [6, 8]
)
//保存大DIV编号的可移动位置编号
var d_posXY = new Array(
    [0],
    [0, 0],
    [150, 0],
    [300, 0],
    [0, 150],
    [150, 150],
    [300, 150],
    [0, 300],
    [150, 300],
    [300, 300]
)
//大DIV编号的位置
d[1] = 1; d[2] = 2; d[3] = 3; d[4] = 4; d[5] = 5; d[6] = 6; d[7] = 7; d[8] = 8; d[9] = 0

function move(id) {
    var i = 1
    for (i = 1; i < 10; ++i) {
        if (d[i] == id)
            break
    }
    //找出小DIV在大DIV中的位置
    var target_d = 0
    //保存小DIV可以去的编号，0表示不能移动
    target_d = whereCanTo(i)
    //找出小DIV可以去的位置，返回0，表示不能移动；可以移动，则返回可以去的位置编号
    if (target_d != 0) {
        d[i] = 0
        //把当前的大DIV编号设置为0，即空白块
        d[target_d] = id
        //把目标大DIV设置为被点击的小DIV的编号
        document.getElementById("d" + id).style.left = d_posXY[target_d][0] + "px"
        document.getElementById("d" + id).style.top = d_posXY[target_d][1] + "px"
        //设置被点击的小DIV的位置，把它移到目标大DIV的位置
    }
    var finish_flag = true
    //设置游戏是否完成标志，true表示完成
    for (var k = 1; k < 9; ++k) {
        if (d[k] != k) {
            finish_flag = false
            break
        }
    }
    //从1开始，把每个大DIV保存的编号遍历一下，判断是否完成
    if (finish_flag == true) {
        alert("congratulation")
    }
}

function whereCanTo(cur_div) {
    //判断是否可移动函数，参数是大DIV的编号
    var j = 0
    var move_flag = false
    for (j = 0; j < d_direct[cur_div].length; ++j) {
        //把所有可能去的位置循环遍历
        if (d[d_direct[cur_div][j]] == 0) {
            move_flag = true
            break
        }
        //如果目标的值为0，说明目标位置没有装小DIV，则可以移动，跳出循环
    }
    if (move_flag == true) {
        return d_direct[cur_div][j]
    } else {
        return 0
    }
    //可以移动，则返回目标位置的编号，否则返回0，表示不可移动
}

//重置函数
function reset() {
    random_d()
}

//随机打乱方块函数
function random_d() {
    for (var i = 9; i > 1; --i) {
        var to = parseInt(Math.random() * (i - 1) + 1)//产生随机数，范围为[1, i]
        if (d[i] != 0) {
            document.getElementById("d" + d[i]).style.left = d_posXY[to][0] + "px"
            document.getElementById("d" + d[i]).style.top = d_posXY[to][1] + "px"
        }
        //把当前的DIV位置设置为随机产生的DIV的位置
        if (d[to] != 0) {
            document.getElementById("d" + d[to]).style.left = d_posXY[i][0] + "px"
            document.getElementById("d" + d[to]).style.top = d_posXY[i][1] + "px"
        }
        //把随机产生的DIV的位置设置为当前的DIV的位置
        var tem = d[to]
        d[to] = d[i]
        d[i] = tem
        //对调两个DIV保存的编号
    }
}

window.onload = function () {
    reset()
}