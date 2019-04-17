$(document).ready(function() {
    var dim = $(".input");//边长输入
    var dim_num;
    var btn= $("button");//开始游戏
    var move_flag;
 //  var arr =new Array();//测试版本随机数组
    var arr;//随机数组
    var box_btn = $(".btn_num");//button数组
    var box_div = $(".num");//用于装button的 div 数组
    
    btn.click(function() {
        $("#gameboard").empty(); 
        dim_num = parseInt(dim[0].value);        
        initPuzzle(dim_num);//初始化游戏面板
        addNum(dim_num);
    });
    
    function initPuzzle(dim_num) {
        var n = dim_num * dim_num;
        var length = (306 - dim_num * 2) / dim_num;
        for(var i = 0;i < n;i++){
            $('<div id = "num'+i+'" class = "num" value = '+(i+1)+' ></div>').appendTo("#gameboard");   
            $(".num").width(length);
            $(".num").height(length);      
        }
        for(var j = 0;j < n;j++){
            $('<button id = "btn_num'+j+'" class = "btn_num"></button>').appendTo("#num"+j);
            $(".btn_num").width(length - 2);
            $(".btn_num").height(length - 2);                 
        }
    }
    //为固定的div增加value属性
    function addNum() {
        num = parseInt(dim[0].value);
        var n = num * num;
        showGameNum(num);
    }
    //获得随机数字，并把button的value属性和内容设为随机数字，并显示
    //为button增加click事件
    function showGameNum(num) {
        var n = num * num;
        $.get("http://localhost/website01/php/puzzle8.php?num=" + n).done(function(data) {
            arr = JSON.parse(data);
            //测试版本
            // for(var i = 0;i < n - 2;i++) {
            //     arr[i] = i + 1;
            // }
            // arr[n-2] = n;
            // arr[n-1] = n - 1;
            $(".btn_num").each(function(i) {          
                $(this).html(arr[i]);
                $(this).attr("value",arr[i]);
                $(this).click(function(){
                    move($(this));
                });
                if(arr[i] == n){
                    $(this).addClass("btn_blank");
                    $(this).html("");
                    $(this).attr("value",arr[i]);
                    $(this).click(function(){
                        move($(this));
                    });
                }
                        
            });
        });     
    }
    function move(btn) {
        var btn_clicked = btn;
        var btn_blank = $(".btn_blank");
        ifCanMove(btn_clicked);
        if(move_flag){
            //交换点击的button和blank_button
            btn_blank.html(btn_clicked.html());
            btn_blank.attr('value', btn_clicked.attr('value'));
            btn_clicked.html("");
            var check = String(dim_num * dim_num);
            btn_clicked.attr('value', check);
            btn_clicked.addClass('btn_blank');
            btn_blank.removeClass("btn_blank");
            }
            ifwin();       
    }
    //判断是否能移动
    function ifCanMove(btn) {  
        var btn_clicked = btn;
        var btn_index = jQuery.inArray(btn_clicked[0], $(".btn_num"));
        var check = String(dim_num * dim_num);
        box_btn = $(".btn_num");
        if($(box_btn[btn_index - dim_num]).attr('value') == check
            || $(box_btn[btn_index - 1]).attr('value') == check
            || $(box_btn[btn_index + 1]).attr('value') == check
            || $(box_btn[btn_index + dim_num]).attr('value') == check
            ) {
                move_flag = true;
        }
        else move_flag = false;
    }
    //判断游戏是否结束
    function ifwin() {
        var box_btn = $(".btn_num");//button数组
        var box_div = $(".num");//用于装button的 div 数组
        var winflag = 0;
        for(var i = 0;i < dim_num * dim_num;i++) {
            if($(box_btn[i]).attr('value') == $(box_div[i]).attr('value'))
            {
                winflag++;
            }
        }
        if(winflag == dim_num * dim_num) {
            alert("Congratulations!!You Win!!!");
        }
    }
});