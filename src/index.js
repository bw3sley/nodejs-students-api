import express from "express";

import { randomUUID } from "crypto";

const app = express();

let Students = [];

app.get("/", (req, res) => {
    return res.json(Students);
});

app.get("/:id", (req, res) => {
    const { id } = req.params;

    const student = Students.find(student => student.Id === id);

    return res.json(student);
});

app.post("/new", (req, res) => {
    const { name, email } = req.body;

    const NewStudent = {
        Id: randomUUID(),
        StudentName: name,
        StudentEmail: email
    }

    Students.push(NewStudent);

    return res.send(JSON.stringify({
        message: "Aluno cadastrado com sucesso!"
    }));
});

app.listen(3000, () => console.log("Running at port 3000"));