const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User API', () => {
  let token;

  beforeAll(async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        age: 30,
        city: 'Test City',
        zipCode: '12345'
      });

    token = res.body.token;
  });

  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/worko/user')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'New User',
        email: 'newuser@example.com',
        age: 25,
        city: 'New City',
        zipCode: '67890'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all users', async () => {
    const res = await request(app)
      .get('/api/worko/user')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a user by ID', async () => {
    const user = await User.findOne({ email: 'newuser@example.com' });
    const res = await request(app)
      .get(`/api/worko/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', user.id);
  });

  it('should update a user', async () => {
    const user = await User.findOne({ email: 'newuser@example.com' });
    const res = await request(app)
      .put(`/api/worko/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Updated User',
        age: 26,
        city: 'Updated City',
        zipCode: '54321'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated User');
  });

  it('should delete a user', async () => {
    const user = await User.findOne({ email: 'newuser@example.com' });
    const res = await request(app)
      .delete(`/api/worko/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(204);
  });
});