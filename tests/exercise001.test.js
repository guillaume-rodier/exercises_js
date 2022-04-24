const { contentAllNumbers } = require("../exercises/exercise001");

describe('exercice001 - containAllNumber', () => {
  test("Should be false when param is empty", () => {
    expect(contentAllNumbers()).toBe(false);
  });

  test("Should be false when param is equal to 147938383", () => {
    expect(contentAllNumbers(147938383)).toBe(false);
  });

  test("Should be true when param is equal to 98410783562910", () => {
    expect(contentAllNumbers(98410783562910)).toBe(true);
  });

  // TODO: See for octal error

  // test("Should be false when param is equal to 09864523148090", () => {
  //   expect(contentAllNumbers(09864523148090)).toBe(false);
  // });

  test("Should be false when param is equal to 18273645", () => {
    expect(contentAllNumbers(18273645)).toBe(false);
  });

  test("Should be false when param is equal to \"9876543210\"", () => {
    expect(contentAllNumbers("9876543210")).toBe(false);
  });

  test("Should be true when param is equal to 9876543210", () => {
    expect(contentAllNumbers(9876543210)).toBe(true);
  });
});
