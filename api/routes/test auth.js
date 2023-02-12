const request = require('supertest');
const app = require('express')();
const router = require('./auth');
const User = require('../models/User');
app.use(router);

describe('POST /register', () => {
    let newUser;
    beforeEach(() => {
        newUser = {
            name: 'Javed',
            lastname: 'javed',
            username: 'javed',
            email: 'javed@example.com',
            password: 'password',
            confirm_password: 'password'
        };
    });
    it('responds with 201 status and returns the saved user when a new user is registered successfully', async (done) => {
        const res = await request(app)
            .post('/register')
            .send(newUser);
        expect(res.status).toBe(201);
        expect(res.body).toMatchObject({
            name: 'John',
            lastname: 'Doe',
            username: 'johndoe',
            email: 'johndoe@example.com',
            password: expect.any(String),
            confirm_password: 'password'
        });
        