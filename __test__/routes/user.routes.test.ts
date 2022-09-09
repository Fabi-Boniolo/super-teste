import request from 'supertest'
import app from"../../src/app"

describe("Use routes", () => {
    test("Get All users", async () => {
        const res = await request(app).get("/users")
        expect(res.body).toEqual(["joão", "Miguel", "Pedro"])
    })
})