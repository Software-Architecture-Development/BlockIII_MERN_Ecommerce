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