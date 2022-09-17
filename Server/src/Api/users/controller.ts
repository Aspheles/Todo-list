import { pool } from "../Utils/pg.connector";
import * as queries from "./queries";
import {Request, Response} from "express";
import { QueryResult, User } from "../../interfaces/global_interfaces";

const GetUsers = async (req : Request, res : Response) => {
    pool.query(queries.getUsers, (err : Error, results : QueryResult<User>) => {
        if(err) throw(err);
       
        res.status(200).json(results.rows);
    })

}

const getUserById = async (req : Request, res : Response): Promise<void> => {
    const {id} = req.params;
    pool.query(queries.getUserById, [id], (err : Error, results : any) => {
        if(err) throw(err);
       
        res.status(200).json(results.rows);
    })

}

const createUser = async (req : Request, res : Response): Promise<void> => {
    const {username, password, email} = req.body;

    if(!username || !password ||!email){
        res.send("Some information is missing");
        return;
    }

    try{
        const checkEmail = await pool.query(queries.checkCredentailsExist, [
            email,
            username
        ]);

        if(checkEmail.rows.length > 0){
            res.status(400).json({message: "Email or Username already exists"});
        }

        const newUser = await pool.query(queries.createAccount, [
            username,
            password,
            email
        ]);

        res.status(201).json({message: "User created succesfully"});
    }catch(err){
        res.send("Email or Username is already taken");
    }

    //Check if email or username exists
    // pool.query(queries.checkCredentailsExist, [email, username], (err : any, results : any) => {
    //     if(err) throw(err);
        
    //     if(results.rows.length){
    //         res.send("Email or username is already taken");
    //     }else{
    //         pool.query(queries.createAccount, [username,password,email], (error : any, results : any) => {
    //             if(error) throw(error);
    //             res.status(201).send("Account has been created");
    //         })
    //     }
    // })

}

const LoginRequest = (req:any, res:any) => {
    const {username, password} = req.body;
    console.log(username);
    console.log(password);
    pool.query(queries.checkLoginCredentails, [username, password], (err: any, results: any) => {
        if(err) throw(err);

        if(results.rows.length){
            res.status(200).json(results.rows);
        }else{
            res.send("Wrong username or password");
        }
    })
}


export {createUser, GetUsers, getUserById, LoginRequest}
