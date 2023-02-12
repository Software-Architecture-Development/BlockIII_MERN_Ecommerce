const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const Product = require("../models/Product");

describe("Product routes", () => {
  let newProduct;
  beforeEach(async () => {
    newProduct = new Product({
      name: "test product",
      price: 10,
      categories: ["test"],
    });
    await newProduct.save();
  });
  afterEach(async () => {
    await Product.deleteMany({});
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe("POST /", () => {
    it("should create a new product", async () => {
      const res = await request(app)
        .post("/product")
        .send({
          name: "new product",
          price: 20,
          categories: ["new"],
        })