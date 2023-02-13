const request = require("supertest");
const Cart = require("../models/Cart");
const app = require("../app");

describe("Cart routes", () => {
  let cartId;
  beforeEach(async () => {
    const cart = new Cart({ userId: "testUserId" });
    const savedCart = await cart.save();
    cartId = savedCart._id;
  });
  afterEach(async () => {
    await Cart.deleteMany({});
  });
  describe("POST /", () => {
    it("should create a new cart", async () => {
      const response = await request(app)
        .post("/carts")
        .send({ userId: "testUserId" });

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("userId", "testUserId");
    });
  });

  describe("PUT /:id", () => {
    it("should update a cart", async () => {
      const response = await request(app)
        .put(`/carts/${cartId}`)
        .send({ userId: "updatedTestUserId" });

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("userId", "updatedTestUserId");
    });
  });

  describe("DELETE /:id", () => {
    it("should delete a cart", async () => {
      const response = await request(app).delete(`/carts/${cartId}`);

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("Cart has been deleted...");
    });
  });

  describe("GET /find/:userId", () => {
    it("should get a user's cart", async () => {
      const response = await request(app).get(`/carts/find/testUserId`);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("userId", "testUserId");
    });
  });

  describe("GET /", () => {
    it("should get all carts", async () => {
      const response = await request(app).get("/carts");

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
   });
});






  





