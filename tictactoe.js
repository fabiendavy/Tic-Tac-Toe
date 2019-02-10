let move = 1;
let play = true;
let numberP1 = 0;
let numberP2 = 0;

$('td').click(function() {
    if ($(this).text() === '' && play) {
        if ((move % 2) === 1) {
            $(this).append('X');
            $('#turn').text('Player 2\'s turn');
        } else {
            $(this).append('O');
            $('#turn').text('Player 1\'s turn');
        }
        move++;
    }

    if (checkWinner() !== -1) {
        if (checkWinner() === 'X') {
            $('#turn').text('');
            move = 1;
            if (play) {
                $('h2').append('Player 1 wins');
                numberP1++;
                $('#numberPlayer1').text(numberP1);
            }
            play = false;
        } else {
            $('#turn').text('');
            move = 2;
            if (play) {
                $('h2').append('Player 2 wins');
                numberP2++;
                $('#numberPlayer2').text(numberP2);
            }
            play = false;
        }
    }

    if (checkWinner() !== 'X' && checkWinner() !== 'O' && $('#one').text() !== '' && $('#two').text() !== '' && $('#three').text() !== '' && $('#four').text() !== '' && $('#five').text() !== '' && $('#six').text() !== ''  && $('#seven').text() !== '' && $('#eight').text() !== '' && $('#nine').text() !== '') {
        $('h2').text('Tie !');
        move = move - 9;
        $('#turn').text('');
    }

});

$('#restart').on('click', () => restart());
$('#scoreButton').on('click', () => scoreToZero());

function restart() {
    $('td').text('');
    $('h2').text('');
    play = true;
    if (move % 2 === 1) {
        $('#turn').text('Player 1\'s turn');
    } else {
        $('#turn').text('Player 2\'s turn');
    }
}

function scoreToZero() {
    numberP1 = 0;
    numberP2 = 0
    move = 1;
    $('#numberPlayer1').text(numberP1);
    $('#numberPlayer2').text(numberP2);
    restart();
}

function checkWinner() {
    let val1 = $('#one').text();
    let val2 = $('#two').text();
    let val3 = $('#three').text();
    let val4 = $('#four').text();
    let val5 = $('#five').text();
    let val6 = $('#six').text();
    let val7 = $('#seven').text();
    let val8 = $('#eight').text();
    let val9 = $('#nine').text();

    // check rows
    if      (val1 == val2 && val2 == val3 && val3 !== '') {return val3;}
    else if (val4 == val5 && val5 == val6 && val6 !== '') {return val6;}
    else if (val7 == val8 && val8 == val9 && val9 !== '') {return val9;}
    // check columns
    else if (val1 == val4 && val4 == val7 && val7 !== '') {return val7;}
    else if (val2 == val5 && val5 == val8 && val8 !== '') {return val8;}
    else if (val3 == val6 && val6 == val9 && val9 !== '') {return val9;}
    // check diagonals
    else if (val1 == val5 && val5 == val9 && val9 !== '') {return val9;}
    else if (val3 == val5 && val5 == val7 && val7 !== '') {return val7;}
    // if no winner
    else {return -1;}
}
