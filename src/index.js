import express from "express";

import { randomUUID } from "crypto";

const app = express();

let Students = [];

app.get("/", (req, res) => {
    return res.json(Students);
});

app.listen(3000, () => console.log("Running at port 3000"));