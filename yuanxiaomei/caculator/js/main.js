/**
 * Created by JOYyuan on 15/12/25.
 */
var $button = $('.btn'),
    $display = $('#display').children('span');

var entries = [], caculated = false;

$(document).ready(function(){
    $button.click(function(){
        var value = $(this).text();

        var displayText = $display.text();

        if (!isNaN(parseInt(value)) || value === '.' || value === '%'){
            if (caculated){
                caculated = false;
                displayText = '';
            }
            $display.text(displayText+value);

        } else if (value === 'AC'){
            $display.text('');
            entries = [];
        } else if (value === 'CE'){
            $display.text('');
        } else if (value === '÷'){
            entries = [];
            entries.push(displayText);
            entries.push('÷');
            $display.text('');
        } else if (value === 'X'){
            entries = [];
            entries.push(displayText);
            entries.push('X');
            $display.text('');
        } else if (value === '-'){
            entries = [];
            entries.push(displayText);
            entries.push('-');
            $display.text('');
        } else if (value === '+'){
            entries = [];
            entries.push(displayText);
            entries.push('+');
            $display.text('');
        }else if (value === '='){
            entries.push(displayText);
            $display.text(isNaN(caculate(entries))? 'Syntax Error' : caculate(entries).toString().substr(0,9));
            caculated = true;
            entries = [];
        }
    });
});

function caculate(entries) {
    var value1, value2;
    if (entries[0][entries[0].length -1] === '%'){
        value1 = parseFloat(entries[0]) / 100;
    } else {
        value1 = parseFloat(entries[0]);
    }
    if (entries[2][entries[2].length -1] === '%'){
        value2 = parseFloat(entries[2]) / 100;
    } else {
        value2 = parseFloat(entries[2]);
    }

    if (entries[1] === '÷'){
        console.log(value1, value2);
        return value1 / value2;
    } else if (entries[1] === 'X'){
        return value1 * value2;
    } else if (entries[1] === '-'){
        return value1 - value2;
    } else if (entries[1] === '+'){
        return value1 + value2;
    };
}