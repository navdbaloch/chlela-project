// thried party imports
import express from "express";
import cors from 'cors';
import * as dotenv from "dotenv";
import fileUplaod from 'express-fileupload';

import { absPath } from "./utils";
import { PublishRequest, publishRequestHandler } from "./request-handlers/publish";

// load configurations
dotenv.config({ path: absPath('.env') });

console.log(absPath(process.env.STORAGE_PATH));
// boot application
const app = express()
    .use(cors())
    .use(fileUplaod())
    .use(express.static(absPath(process.env.STORAGE_PATH)));

const port = process.env.PORT || 8080;

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.post("/publish", async (req, res) => {
    const response = await publishRequestHandler((req as any) as PublishRequest);
    res.send(JSON.stringify(response));
});

// start the Express server
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});