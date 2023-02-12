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
    const response = await request(app)
    .put(`/orders/${newOrder._id}`)
    .set("Authorization", `Bearer ${token}`)
    .send(updatedOrder)
    .expect(200);

  expect(response.body).toMatchObject(updatedOrder);
});
});

describe("DELETE /orders/:id", () => {
it("should delete an order", async () => {
  const newOrder = new Order({
    userId: "123456789",
    amount: 100,
  });
  await newOrder.save();

  const response = await request(app)
    .delete(`/orders/${newOrder._id}`)
    .set("Authorization", `Bearer ${token}`)
    .expect(200);

  expect(response.body).toBe("Order has been deleted...");
});
});

describe("GET /orders/find/:userId", () => {
it("should get user orders", async () => {
  const newOrder = new Order({
    userId: "123456789",
    amount: 100,
  });
  await newOrder.save();

  const response = await request(app)
    .get("/orders/find/123456789")
    .set("Authorization", `Bearer ${token}`)
    .expect(200);

  expect(response.body).toEqual([newOrder]);
});
});

describe("GET /orders", () => {
it("should get all orders", async () => {
  const newOrder = new Order({
    userId: "123456789",
    amount: 100,
  });
  await newOrder.save();

  const response = await request(app)
    .get("/orders")
    .set("Authorization", `Bearer ${token}`)
   




