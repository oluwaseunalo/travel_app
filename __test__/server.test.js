import regeneratorRuntime from "regenerator-runtime";
import app from '../src/server/server'
const supertest = require('supertest');
const request = supertest(app);

describe("the test endpoint", () => {

    test('the post endpoints', async () => {
        const response = await request.post('/test')
        expect(response.statusCode).toBe(200)
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
        expect(response.body).toBeDefined();
    })
  });