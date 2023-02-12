const request = require("supertest");
const app = require("../index");

describe("Test the root endpoint", () => {
  test("It should response the GET method",  () => {
    const response =  request(app).get("/");
    expect(response.statusCode).toBe(404);
  });
});