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
      const res = await request(app)
        .put(`/api/users/${user._id}`)
        .send({ name: "Jane Doe" });
      
      expect(res.status).toBe(200);
      expect(res.body.name).toBe("Jane Doe");
    });
    
    it("should return a 500 error if the update fails", async () => {
      const res = await request(app).put("/api/users/invalidid");
      
      expect(res.status).toBe(500);
      expect(res.body).toEqual({});
    });
  });
  
  describe("Delete User", () => {
    it("should delete a user", async () => {
      const user = new User({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password",
      });
      await user.save();
      
      const res = await request(app).delete(`/api/users/${user._id}`);
      
      expect(res.status).toBe(200);
      expect(res.text).toBe("User has been deleted...");
    });
    
    it("should return a 500 error if the delete fails", async () => {
      const res = await request(app).delete("/api/users/invalidid");
      
      expect(res.status).toBe(500);
      expect(res.body).toEqual({});
    });
  });
  
  describe("Get User", () => {
    it("should get a user", async () => {
      const user = new User({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password",
      });
      await user.save();
      
      const res = await request(app).get(`/api/users/find/${user._id}`);
      
      expect(res.status).toBe(200);
      expect(res.body._id).toBe(user._id.toString());
    });
    
    it("should return a 500 error if the get fails", async () => {
      const res = await request(app).get("/api/users/find/invalidid");
      
      expect(res.status).toBe(500);
      expect(res.body).toEqual({});
    });
  });
  const res = await request(app).delete(`/api/users/${user._id}`);
      
      expect(res.status).toBe(200);
      expect(res.text).toBe("User has been deleted...");
    });
    
    it("should return a 500 error if the delete fails", async () => {
      const res = await request(app).delete("/api/users/invalidid");
      
      expect(res.status).toBe(500);
      expect(res.body).toEqual({});
    });
  });
  
  