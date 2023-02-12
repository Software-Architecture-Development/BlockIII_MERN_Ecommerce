const request = require("supertest");
const express = require("express");
const stripe = require("stripe");

const router = require("./payment");
const app = express();
app.use(express.json());
app.use(router);

describe("Test the payment endpoint", () => {
  beforeAll(() => {
    process.env.STRIPE_KEY = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";
    stripe.charges = jest.fn().mockImplementation((params, callback) => {
      if (params.amount === 1000) {
        return callback(null, {
          id: "ch_test_charge",
          amount: 1000,
          currency: "usd",
        });
      }
      return callback({ message: "Invalid amount" }, null);
    });
});
test("It should respond with a successful payment", async () => {
    const response = await request(app)
      .post("/payment")
      .send({
        tokenId: "tok_visa",
        amount: 1000,
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.amount).toBe(1000);
    expect(response.body.currency).toBe("usd");
  });

  test("It should respond with an error for an invalid amount", async () => {
    const response = await request(app)
      .post("/payment")
      .send({
        tokenId: "tok_visa",
        amount: 500,
      });
    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBe("Invalid amount");
  });
});
test("It should respond with a successful payment", async () => {
    const response = await request(app)
      .post("/payment")
      .send({
        tokenId: "tok_visa",
        amount: 1000,
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.amount).toBe(1000);
    expect(response.body.currency).toBe("usd");
  });

  






