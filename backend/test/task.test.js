const request = require("supertest")
const {app, server} = require("../index")
const mongoose = require("mongoose")

describe("GET api/tasks", ()=>{
    it("it should return 200 ok", async()=>{
        const response = await request(app).get("/api/tasks")
        expect(response.statusCode).toBe(200)
    })

     it("response data should array", async()=>{
        const response = await request(app).get("/api/tasks")
        expect(typeof response.body == "object").toBe(true)
        expect(response.body).toHaveProperty("tasks")
        console.log("seeded data", response.body.tasks)
    })
})


afterAll(async()=>{
    await mongoose.connection.close()
    await server.close();
})