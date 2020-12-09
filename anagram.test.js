const isAnagram = require("./anagram");

test("isAnagram a function", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("'cinema' is an anagram of 'iceman' ", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test('"hello" is NOT an anagram of "aloha"', () => {
  expect(isAnagram("hello", "aloha")).toBeFalsy;
});

// test("", () => {});
