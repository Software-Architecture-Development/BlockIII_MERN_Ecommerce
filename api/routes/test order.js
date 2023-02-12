const request = require("supertest");
const app = require("../app");
const Order = require("../models/Order");

describe("Orders routes", () => {
  let token;

  beforeAll(async () => {
    // setup: create a user, generate a token, etc.
  });

  afterAll(async () => {
    await Order.deleteMany({});
  });

  describe("POST /orders", () => {
    it("should create an order", async () => {
      const order = {
        userId: "123456789",
        amount: 100,
      }; const response = await request(app)
      .post("/orders")
      .set("Authorization", `Bearer ${token}`)
      .send(order)
      .expect(200);

    expect(response.body).toMatchObject(order);
  });
});

describe("PUT /orders/:id", () => {
  it("should update an order", async () => {
    const newOrder = new Order({
      userId: "123456789",
      amount: 100,
    });
    await newOrder.save();

    const updatedOrder = {
      amount: 200,
    };
