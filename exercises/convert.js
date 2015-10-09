module.exports = (function () {
    'use strict';

    function convert(text, rows) {
        if (rows <= 1) {
            return text;
        }
        text = text.split('');
        var zigzag = [],
            res = '',
            count = 0,
            col = 0,
            direction = 1,
            flag = false,
            half = rows - 1;
        zigzag[col] = [];
        text.forEach((item, index) => {
            if (count > rows - 1 && !flag) {
                direction *= -1;
                col++;
                zigzag[col] = [];
                count += direction;
                count += direction;
            }
            if (direction >= 1 && !flag) {
                flag = true
                zigzag[col][count] = item;
            }
            if (direction === -1 && !flag) {
                flag = true
                zigzag[col][count] = item;
                if (count !== 0) {
                    col++;
                    zigzag[col] = [];
                }
                if (count === 0) {
                    direction *= -1;
                }
            }
            flag = false;
            count += direction;

        });
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c <= col; c++) {
                if (zigzag[c][r]) {
                    res += zigzag[c][r];
                }
            }
        }
        return res;
    }

    return convert;
}());
