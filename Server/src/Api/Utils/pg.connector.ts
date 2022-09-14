import {Pool} from "pg";
import * as dotenv from "dotenv";

dotenv.config();

let pool : Pool;

 const connect = () => {
    try{
         pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DB,
            password: process.env.DB_PASSWORD,
            port: process.env.PORT
        });

        console.log("Connected to the database");
    }catch(error: any){
        console.error(`[pg.connector][init][Error] : ${error}`);
        throw new Error('Failed to initialize pool');
    }

}


export {pool, connect}