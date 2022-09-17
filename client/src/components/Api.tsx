import axios from "axios";
import { User } from "../interfaces/global_interfaces";

const client = axios.create({
    baseURL: "http://localhost:3001"
});

const fetchItems = async (): Promise<void> => {
    try{
        let res = await client.get("/items");
        if(res.status === 200){
            return res.data;
        }
    }
    catch(err){
        console.log(err);
    }
    
}


export {fetchItems}