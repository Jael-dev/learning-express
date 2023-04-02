import express from "express";
import bodyParser from "body-parser";



const app = express();

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


import app1 from "./routes/student.route.js";



app.get("/", (req, res) => {
    res.json({ message: "Welcome to the test api application." });
});


app.listen(3001, () => {
    console.log("Server is running on port 3001.");
});