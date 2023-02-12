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
        .expect(200);
      expect(res.body).toHaveProperty("name", "new product");
      expect(res.body).toHaveProperty("price", 20);
      expect(res.body).toHaveProperty("categories", ["new"]);
    });
  });

  describe("PUT /:id", () => {
    it("should update a product", async () => {
      const res = await request(app)
        .put(`/product/${newProduct._id}`)
        .send({
          name: "updated product",
        })
        .expect(200);
      expect(res.body).toHaveProperty("name", "updated product");
      expect(res.body).toHaveProperty("price", 10);
      expect(res.body).toHaveProperty("categories", ["test"]);
    });
  });

  describe("DELETE /:id", () => {
    it("should delete a product", async () => {
      const res = await request(app)
        .delete(`/product/${newProduct._id}`)
        .expect(200);
      expect(res.body).toEqual("Product has been deleted...");
      const product = await Product.findById(newProduct._id);
      expect(product).toBeNull();
    });
  });

  describe("GET /find/:id", () => {
    it("should get a product by id", async () => {
      const res = await request(app)
        .get(`/product/find/${newProduct._id}`)
        .expect(200);
      expect(res.body).toHaveProperty("name", "test product");
      expect(res.body).toHaveProperty("price", 10);
      expect(res.body).toHaveProperty("categories", ["test"]);
    });
  });

 



