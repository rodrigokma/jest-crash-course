const chunkArray = require("./chunk");

test("Chunk array function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("Should return chunked array", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
});

test("Should return chunked array with 1 length arrays", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
