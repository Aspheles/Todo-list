import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as pgConnector from "./Api/Utils/pg.connector";
import * as userController from "./Api/users/controller";
import * as itemController from "./Api/items/controller";


const PORT:Number = 3001;
const app : Express.Application | undefined = Express();

app.use(Express.json());
app.use(cors());
app.use(bodyParser.json());
pgConnector.connect();

//Accounts
app.get("/users", userController.GetUsers);
app.get("/user/:id", userController.getUserById);
app.post("/register", userController.createUser);
app.post("/login", userController.LoginRequest);

//Items
app.get("/items", itemController.getItems);
app.get("/item/:id", itemController.getItemsById);
app.post("/createitem", itemController.CreateItem);
app.post("/updateitem/:id", itemController.EditItem);

app.listen(PORT, () => {
    console.log(`We are currently live on http://localhost:${PORT}`);
})
