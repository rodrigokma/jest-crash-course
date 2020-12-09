const functions = require("./functions");
const axios = require("axios");

// beforeEach(() => initDatabase());
// afterEach(() => closedDatabase());
//Vai rodar initDatabase() toda vez antes de chamar um teste
//Ao finalizar cada teste, vai rodar closeDatabase

//beforeAll(() => initDatabase());
// afterAll(() => closedDatabase());
//Vai rodar initDatabase() antes de iniciar todos os testes
//Vai rodar closeDatabase() somente depois de finalizar todos os testes

// const initDatabase = () => console.log("Database Initialized...");
// const closedDatabase = () => console.log("Database Closed...");

const nameCheck = () => console.log("Checking name...");

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

test("Should be UNDER 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
