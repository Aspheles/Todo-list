import { pool } from "../Utils/pg.connector";
import * as queries from "./queries";

const GetUsers = (req : any, res : any) => {
    pool.query(queries.getUsers, (err : any, results : any) => {
        if(err) throw(err);
       
        res.status(200).json(results.rows);
    })

}

const getUserById = (req : any, res : any) => {
    const {id} = req.params;
    pool.query(queries.getUserById, [id], (err : any, results : any) => {
        if(err) throw(err);
       
        res.status(200).json(results.rows);
    })

}

const CreateUser = (req : any, res : any) => {
    const {username, password, email} = req.body;

    //Check if email or username exists
    pool.query(queries.checkCredentailsExist, [email, username], (err : any, results : any) => {
        if(results.rows.length){
            if(err) throw(err);
            res.send("Email or username is already taken");
        }else{
            pool.query(queries.createAccount, [username,password,email], (error : any, results : any) => {
                if(error) throw(error);
                res.status(201).send("Account has been created");
            })
        }
    })

}


export {CreateUser, GetUsers, getUserById}
