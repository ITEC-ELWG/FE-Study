$(window).load(function () {
    var a = [
        [2, 4, 5],
        [1, 0, 8],
        [3, 6, 7]
    ];
    var max = 2;

    init(a);

    var $list = $('ul li');
    $('ul').on('click', 'li', function () {
        var $this = $(this);
        var index = $this.index('ul li');
        var col = index % 3;
        var row = parseInt(index / 3);
        if (a[row][col] === 0) {
            return;
        }
        var row_up = (row - 1) < 0 ? row : (row - 1);
        var row_down = (row + 1) > max ? max : (row + 1);
        var col_left = (col - 1) < 0 ? col : (col - 1);
        var col_right = (col + 1) > max ? max : (col + 1);
        if (a[row_up][col] === 0) {
            a[row_up][col] = a[row][col];
            a[row][col] = 0;
            init(a);
            return;
        }
        else if (a[row][col_right] === 0) {
            a[row][col_right] = a[row][col];
            a[row][col] = 0;
            init(a);
            return;
        }
        else if (a[row_down][col] === 0) {
            a[row_down][col] = a[row][col];
            a[row][col] = 0;
            init(a);
            return;
        }
        else if (a[row][col_left] === 0) {
            a[row][col_left] = a[row][col];
            a[row][col] = 0;
            init(a);
            return;
        }
    })

    $('a').on('click', function () {
        $.get('array.php', function (res) {
            a = $.parseJSON(res).array;
            init(a);
        })
    })
})

function init(array) {
    var str = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            str += '<li>' + array[i][j] + '</li>'
        }
    }
    $('ul').html(str);
}
