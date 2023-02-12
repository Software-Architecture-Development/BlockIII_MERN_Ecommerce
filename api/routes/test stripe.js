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
  