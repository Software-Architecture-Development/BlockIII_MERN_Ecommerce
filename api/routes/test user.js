const request = require('supertest');
const app = require('express')();
const router = require('../routes/auth');
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