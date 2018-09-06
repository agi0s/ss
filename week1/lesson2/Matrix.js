function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i+= 1){
        console.log(matrix[i].join(' '));
    }
}

function addMatrix(matrix) {
    let tbody = ``;
    for (let i = 0; i < matrix.length; i+= 1){
        let currentArr = matrix[i].length - 1,
            row = '';
        console.log('matrix');
                    while(currentArr){
                        row += `<td>${matrix[i][currentArr]}</td>`;
                        currentArr -= 1;
                    }

        tbody += `<tr>${row}</tr>`;
    }

    
    let table = `<table>
                    <tr><th>Matrix for ${matrix ^ 2};</th></tr>
                    ${tbody}
                </table>`;
    document.write(table);
}

function make2DArray(size = 5) {
    const matrix = [];
    let i = size;
    while(i){
        matrix.push(new Array(size));
        i -= 1;
    }
    return matrix;
}

function makeMatrix(number) {
    const matrix = make2DArray(number);
    let i = 0,
        j = 0,
        di = 0,
        dj = 1,
        currentNumber = 1;

    while (currentNumber <= number * number) {
        matrix[i][j] = currentNumber;
        currentNumber += 1;

        if (j + dj === number ||
            i + di === number ||
            j + dj === -1 ||
            matrix[i + di][j + dj])
        {
                let tempDI = di;
                di = dj;
                dj = -tempDI;
        }

        i += di;
        j += dj;
    }

    return matrix;
}

printMatrix(makeMatrix(5));