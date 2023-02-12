const request = require("supertest");
const mongoose = require("mongoose");
const User = require("../models/User");
const app = require("../app");

describe("Users Router", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });
  
  afterAll(async () => {
    await mongoose.connection.close();
  });
  
  describe("Update User", () => {
    it("should update a user", async () => {
      const user = new User({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password",
      });
      await user.save();