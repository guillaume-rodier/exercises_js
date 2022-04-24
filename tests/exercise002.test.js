const { forgottenLetter } = require("../exercises/exercise002");

describe('exercice002 - forgottenLetter', () => {
  test("Should be an empty array when param is empty", () => {
    expect(forgottenLetter()).toStrictEqual([]);
  });

  test("Should be an empty array when param is an empty array", () => {
    expect(forgottenLetter()).toStrictEqual([]);
  });

  test("Should be return c when param is an array with a, b and d", () => {
    expect(forgottenLetter(["a", "b", "d"])).toStrictEqual(["c"]);
  });

  test("Should be return w when param is an array with a, b and d", () => {
    expect(forgottenLetter(["v", "x"])).toStrictEqual(["w"]);
  });

  test("Should be return e and i when param is an array only this 2 forgotten letters", () => {
    expect(forgottenLetter(
      ["a", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
    ).toStrictEqual(["e", "i"]);
  });
});
