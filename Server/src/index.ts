import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as pgConnector from "./Api/Utils/pg.connector";
import * as userController from "./Api/users/controller";

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
pgConnector.connect();

app.get("/users", userController.GetUsers);
app.get("/user/:id", userController.getUserById);
app.post("/create", userController.CreateUser);

app.listen(PORT, () => {
    console.log(`We are currently live on http://localhost:${PORT}`);
})
