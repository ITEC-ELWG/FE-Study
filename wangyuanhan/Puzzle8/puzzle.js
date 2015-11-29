var order = 3;
var blank = 0;
var game  = 0;
var array = new Array();
var equal = new Array();

$(document).ready(function() {
	
    for (var i = 0; i < 9; i++) {
            
        array[i] = i;
    }

    puzzle();

    $(".start").click(function() {

        game  = 1;
        order = parseFloat($(".choose").find("option:selected").text());

        var tempArray = new Array();
        for (var i = 0; i < order * order; i++) {tempArray[i] = i;}
        equal = tempArray;

        getArray();
    })

    $(document).keyup(function(event) {
            
        if (game == 1) {

            if      (event.keyCode == 40 && blank - order >= 0) {blank = changePosition(blank - order, blank);}
            else if (event.keyCode == 39 && blank % order != 0) {blank = changePosition(blank - 1, blank);}
            else if (event.keyCode == 38 && blank + order < order * order) {blank = changePosition(blank + order, blank);}
            else if (event.keyCode == 37 && (blank + 1) % order != 0) {blank = changePosition(blank + 1, blank);}

            game = 1;
        }
    })
})

function getArray() {

     $.post("puzzle.php", {order: order}, function(data, status) {

        if (status == "success") {

            array = eval(data);
            puzzle();
        }
     })
}

function puzzle() {

    $(".puzzle").empty();

	for (var i = 0; i < order * order; i++) {
		
        $("<div class = 'block'></div>").appendTo(".puzzle");

        if (array[i] == 0) {

            $("div").eq(i + 2).css("opacity", "0");
            blank = i;
        } else {

            $("div").eq(i + 2).text(array[i]);
        }
	}

    changeStyle();

    if (game == 1) {

        $("div").click(function() {
    
            var temp1 = $("div").index($(this));
            if (temp1 > 1 && temp1 < order * order + 2) {
    
                if (blankAround(temp1 - 2) == 1) {
    
                    blank = changePosition(temp1 - 2, blank);
                }
            }
        })
    }
}

function changeStyle() {

    $(".block").height(function(m, n) {return n * 3 / order;});
    $(".block").width(function(m, n) {return n * 3 / order;});
    $(".block").css("font-size", parseFloat($(".block").css("font-size")) * 3 / order);
    $(".block").css("line-height", (parseFloat($(".block").css("line-height")) + (order - 3) * 2.5) + "px");
}

function blankAround(i) {

    switch (i) {

        case blank - order: return 1; break;
        case blank - 1: if ((blank) % order != 0) {return 1}; break;
        case blank + 1: if ((blank + 1) % order != 0) {return 1}; break;
        case blank + order: return 1; break;
    }
}

function changePosition(i, blank) {

    var temp2 = array[i];
    array[i] = array[blank];
    array[blank] = temp2;

    if (isWin()) {

        game  = 0;

        $("div").eq(i + 2).text("");
        $("div").eq(i + 2).fadeTo(0, 0);
        $("div").eq(i + 2).fadeTo(700, 1);
        $("div").eq(i + 2).text("WIN");
    } else {

        $("div").eq(i + 2).text("");
        $("div").eq(i + 2).fadeTo(700, 0);
    }

    $("div").eq(blank + 2).text(temp2);
    $("div").eq(blank + 2).fadeTo(700, 1);

    return i;
}

function isWin() {

    var i = 0;

    while (array[i] == equal[i] && i < order * order) {i++;}
    if (i == order * order) {return true}
}