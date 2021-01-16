import express from "express";
import bodyParser from "body-parser";
import router from "./routes/heroes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/heroes", router);

export default app;
