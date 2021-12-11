import request from "supertest";
import app from "./app.js";

describe('Given a username and password',() => {
    test('Should respond with a 200 status code', async () => {
        const response = await request(app).post("/users").send({
            username:"username",
            password:"password"
        });
        expect(response.statusCode).toBe(200);
    });

    test('Should specify json in the content type header', async () => {
        const response = await request(app).post("/users").send({
            username:"username",
            password:"password"
        });
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        );
    });
    
    test('Should response has userId', async () => {
        const response = await request(app).post("/users").send({
            username:"username",
            password:"password"
        });
        expect(response.body.userId).toBeDefined();
    });
});


describe('Missing username or password',() => {
    test('Should response with status code 400', async () => {
        const bodyData = [{username:"username"}, {password:"password"}, {}]
        for (const body of bodyData) {
            const response = await request(app).post("/users").send(body);
            expect(response.statusCode).toBe(400);
        }
    });
});