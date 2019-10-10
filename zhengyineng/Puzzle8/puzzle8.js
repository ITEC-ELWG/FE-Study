// $(document).ready(function(){
//     console.log("ready");
//     for(var i = 0; i <= (".blocks").length; i ++){
//         console.log($(".blocks:eq("+i+")").text());
//         $(".blocks:eq("+i+")").click(function(){
//             //console.log($(".blocks:eq(7)").text());
//             $(".blocks:eq("+i+")").css({"left":"150px"});
//         });
//     }
// });

var block = new Array();
var i = 0;
// 块编号，空位编号为0
for(i = 0; i < 9; i ++){
    block[i] = i;
}
// 每块可移动到的位置编号
var move_location = new Array(
    [6, 8],
    [2, 4],
    [1, 3, 5],
    [2, 6],
    [1, 5, 7],
    [2, 4, 6, 8],
    [3, 5, 0],
    [4, 8],
    [5, 7, 0]
);
// 块坐标
var move_coordinate = new Array(
    [300, 300],
    [0, 0],
    [150, 0],
    [300, 0],
    [0, 150],
    [150, 150],
    [300, 150],
    [0, 300],
    [150, 300]
)

function move(id){
    for(var k = 0; k < 10; k ++){
        if (block[k] == id){
            break;
        }   
    }
    var target_d = -1;
    //保存小DIV可以去的编号，0表示不能移动
    target_d = gowhere(k);
    if (target_d != -1) {
        block[k] = 0;
        block[target_d] = id;
        $(".blocks:eq("+(id-1)+")").css({
            "left": move_coordinate[target_d][0] + "px", 
            "top": move_coordinate[target_d][1] + "px"
        });
    }
    var gameover = true;
    for(var k = 1; k < 9; k ++){
        // console.log("block[k]: "+block[k] + " k: "+k);
        if (block[k] != k){
            gameover = false;
            break;
        }   
    }
    if(gameover == true){
        alert("Game over!");
    }
}

function gowhere(cur_div) {
    var j = 0;
    var move_flag = false;
    for (j = 0; j < move_location[cur_div].length; j++) {
        //把所有可能去的位置循环遍历
        if (block[move_location[cur_div][j]] == 0) {
            move_flag = true;
            break;
        }
    }
    if (move_flag == true) {
        // console.log("move to id: "+move_location[cur_div][j]);
        return move_location[cur_div][j];
    } else {
        return -1;
    }
}

function reset(){
    var allBlocks = [1, 2, 3, 4, 5, 6, 7, 8];
    var index, i = 1;
    while(allBlocks.length) {
        index = allBlocks.splice(parseInt(Math.random() * allBlocks.length), 1)[0];
        $(".blocks:eq("+ (i-1) +")").css({
        "left": move_coordinate[index][0] + "px", 
        "top": move_coordinate[index][1] + "px"
        }); 
        block[index] = i;  
        i ++;
    }
}
