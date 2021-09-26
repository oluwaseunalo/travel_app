const app = require('../src/server/index')
const supertest = require('supertest');
const request = supertest(app);

it('should return status 200 for GET method', async () => {
    await request.get("/test")
        .expect(200)
        .then((response) =>
            expect(response.body.msg).toBe('pass!'))
})
