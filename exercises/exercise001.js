function contentAllNumber(numberParam) {
    let containEachNumber = false;

    if (
        numberParam !== null &&
        numberParam !== undefined &&
        Number.isInteger(numberParam) &&
        !Number.isNaN(numberParam)
    ) {
        for (i = 0; i <= 9; i++) {
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

console.log("#########################################");
console.log("Some test of first exercise");
console.log("#########################################");
console.log("");
console.log("Empty (false):", contentAllNumber());
console.log("");
console.log("147938383 (false):", contentAllNumber(147938383));
console.log("");
console.log("98410783562910 (true):", contentAllNumber(98410783562910));
console.log("");
console.log("09864523148090 (false):", contentAllNumber(09864523148090));
console.log("");
console.log("18273645 (false):", contentAllNumber(18273645));
console.log("");
console.log("\"9876543210\" in string (false):", contentAllNumber("9876543210"));
console.log("");
console.log("9876543210 in number (true):", contentAllNumber(9876543210));
console.log("");
console.log("#########################################");
console.log("");
