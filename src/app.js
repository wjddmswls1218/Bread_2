import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();







const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.set(morgan(`dev`));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(PORT, () => {
    console.log(`${PORT} SEVER START`);
});