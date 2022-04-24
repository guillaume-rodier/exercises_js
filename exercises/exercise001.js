'use strict';

function contentAllNumbers(numberParam) {
    let containEachNumber = false;

    if (
        numberParam !== null &&
        numberParam !== undefined &&
        Number.isInteger(numberParam) &&
        !Number.isNaN(numberParam)
    ) {
        for (let i = 0; i <= 9; i++) {
            if (!numberParam.toString().includes(i)) {
                containEachNumber = false;
                break;
            } else {
                containEachNumber = true;
            }
        }
    }

    return containEachNumber;
};

module.exports = { contentAllNumbers };
