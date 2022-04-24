function forgottenLetter(letterArray) {
    let forgottenLetters = [];

    if (letterArray != null && letterArray != undefined && letterArray.length > 0) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let startingPoint = alphabet.indexOf(letterArray[0]);

        for (let i = 0; i < letterArray.length; i++) {
            if (
                letterArray[i] != alphabet[startingPoint + i] &&
                letterArray[i] != undefined &&
                letterArray[i] != null
            ) {
                forgottenLetters.push(alphabet[startingPoint + i]);
                startingPoint += 1;
            }
        }
    }

    return forgottenLetters;
};

module.exports = forgottenLetter;

console.log("#########################################");
console.log("Some test of first exercise");
console.log("#########################################");
console.log("");
console.log("undefined => \"\":", forgottenLetter());
console.log("");
console.log("[] => \"\":", forgottenLetter([]));
console.log("");
console.log("[\"a\", \"b\", \"d\"] => \"c\":", forgottenLetter(["a", "b", "d"]));
console.log("");
console.log("[\"v\", \"x\"] => \"\":", forgottenLetter(["v", "x"]));
console.log("");
console.log(
    "[\"a\", \"b\", \"c\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"] => \"e\", \"i\" :",
    forgottenLetter(["a", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
);
console.log("");
console.log("#########################################");
console.log("");