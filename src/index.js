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

app.put("/update/:id", (req, res) => {
    const { id } = req.params;

    const { name, email } = req.body;

    const studentId = Students.findIndex(student => student.Id === id);

    Students[studentId] = {
        ...Students[studentId],
        StudentName: name,
        StudentEmail: email
    }

    return res.send(JSON.stringify({
        message: "Aluno atualizado com sucesso!"
    }));
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    const studentId = Students.findIndex(student => student.Id === id);

    Students.splice(studentId, 1);

    return res.send(JSON.stringify({
        message: "Aluno deletado com sucesso!"
    }))
});

app.listen(3000, () => console.log("Running at port 3000"));