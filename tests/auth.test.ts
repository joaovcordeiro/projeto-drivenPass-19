import superteste from "supertest";
import app from "../src/index.js";
import { prisma } from "../src/config/database.js";
import * as userFactory from "./factories/userFactory.js";
const agent = superteste(app);

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users" CASCADE;`;
})

describe("POST /sign-up", () => {
    it("should return a user", async () => {
        const body = await userFactory.createUser();

        const result = await agent.post("/sign-up").send(body);
        const status = result.status;

        const userCreated = await userFactory.verifyUser(body);

        expect(status).toBe(200);
        expect(userCreated).not.toBeNull();
    });

    it("should return a error, because password has a incorrect format", async () => {
        const body = await userFactory.createUser(5);
        const result = await agent.post("/sign-up").send(body);
        const status = result.status;

        const userCreated = await userFactory.verifyUser(body);


        expect(status).toBe(422);
        expect(userCreated).toBeUndefined();
    });

    it("should return a error, because the email already exists", async () => {
        const body = await userFactory.createUser();

        await agent.post("/sign-up").send(body);
        const result = await agent.post("/sign-up").send(body);
        const status = result.status;
        const userCreated = await userFactory.verifyUser(body);

        expect(status).toBe(500);
        expect(userCreated).not.toBeNull();
    });

    it("should return a error, because the email is empty", async () => {
        const body = await userFactory.createUser();
        body.email = "";

        const result = await agent.post("/sign-up").send(body);
        const status = result.status;
        const userCreated = await userFactory.verifyUser(body);

        expect(status).toBe(422);
        expect(userCreated).toBeUndefined();
    });

});

describe("POST /sign-in", () => {
    it("should return a token", async () => {
        const body = await userFactory.createUser();

        await agent.post("/sign-up").send(body);

        const result = await agent.post("/sign-in").send(body);
        const status = result.status;
        const token = result.body.data.token;

        expect(status).toBe(200);
        expect(token).toBeDefined();

    });

    it("should return a error, because password is incorrect", async () => {
        const signUpBody = await userFactory.createUser();

        const signInBody = {
            ...signUpBody,
            password: "wrong password"
        }

        await agent.post("/sign-up").send(signUpBody);
        const result = await agent.post("/sign-in").send(signInBody);
        const status = result.status;

        const userCreated = await userFactory.verifyUser(signUpBody);

        expect(status).toBe(500);
        expect(userCreated).not.toBeNull();
    });

    it("should return a error, because email is incorrect", async () => {
        const signUpBody = await userFactory.createUser();

        const signInBody = {
            ...signUpBody,
            email: "wrong@gmail.com"
        }

        await agent.post("/sign-up").send(signUpBody);
        const result = await agent.post("/sign-in").send(signInBody);
        const status = result.status;

        const userCreated = await userFactory.verifyUser(signUpBody);

        expect(status).toBe(500);
        expect(userCreated).not.toBeNull();
    });

    it("should return a error, because email is empty", async () => {
        const signUpBody = await userFactory.createUser();

        const signInBody = {
            ...signUpBody,
            email: ""
        }

        await agent.post("/sign-up").send(signUpBody);
        const result = await agent.post("/sign-in").send(signInBody);
        const status = result.status;

        const userCreated = await userFactory.verifyUser(signUpBody);

        expect(status).toBe(422);
        expect(userCreated).toBeUndefined();
    });

    it("should return a error, because password is empty", async () => {
        const signUpBody = await userFactory.createUser();

        const signInBody = {
            ...signUpBody,
            password: ""
        }

        await agent.post("/sign-up").send(signUpBody);
        const result = await agent.post("/sign-in").send(signInBody);
        const status = result.status;

        const userCreated = await userFactory.verifyUser(signUpBody);

        expect(status).toBe(422);
        expect(userCreated).toBeUndefined();
    });

    it("should return a error, because email has a invalid format", async () => {
        const signUpBody = await userFactory.createUser();

        const signInBody = {
            ...signUpBody,
            email: "wrong"
        }

        await agent.post("/sign-up").send(signUpBody);
        const result = await agent.post("/sign-in").send(signInBody);
        const status = result.status;

        const userCreated = await userFactory.verifyUser(signUpBody);

        expect(status).toBe(422);
        expect(userCreated).toBeUndefined();
    });
});
