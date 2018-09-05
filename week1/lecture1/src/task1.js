function drawChessboard(width=6, height=4, symbol="*") {
    var board = ``;

    //for loops specifying number of lines and symbols per line
    for (var i = 0; i < height; i++) {
        while ()
        for (var w = 0; w < width; w++) {
            board += `${symbol}  `;
        }

        board += '\n';

        if (i % 2 === 0) {
            board += '  ';
        }
    }

    return board;
}