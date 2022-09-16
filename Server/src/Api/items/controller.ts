import { pool } from "../Utils/pg.connector";
import * as queries from "./queries";


const getItems = (req : any, res : any) => {
    pool.query(queries.getItems, (err : any, results : any) => {
        if(err) throw(err);
       
        res.status(200).json(results.rows);
    })

}

const getItemsById = (req : any, res : any) => {
    const id = parseInt(req.params.id);
    console.log(id);
    pool.query(queries.getItemsById, [id], (err : any, results : any) => {
        if(err) throw(err);
       
        res.status(200).json(results.rows);
    })

}


const CreateItem = (req : any, res : any) => {
    const {name,category,description,price,img_url} = req.body;

    if(!name || !category || !description || !price || !img_url){
        res.send("All inputs need to be filled in");
        return;
    }

    pool.query(queries.checkNameExists, [name], (error:any, results:any) => {
        if(error) throw(error);

        if(results.rows.length){
            res.send("Item with that name already exists");
        }else{
            pool.query(queries.createItem, [name,category,description,price,img_url], (error : any, results : any) => {
                if(error) throw(error);
                res.status(201).send("Item has been created");
            })
        }
    })

    
}

const EditItem = (req : any, res : any) => {
    const id = parseInt(req.params.id);
    const {name,category,description,price,img_url} = req.body;

    if(!name || !category || !description || !price || !img_url){
        res.send("All inputs need to be filled in");
        return;
    }

    pool.query(queries.checkNameExists, [name], (error:any, results:any) => {
        if(error) throw(error);

        if(results.rows.length){
            res.send("Item with that name already exists");
        }else{
            pool.query(queries.updateItem, [name,category,description,price,img_url, id], (error : any, results : any) => {
                if(error) throw(error);
                res.status(201).send("Item has been updated");
            })
        }
    })

    
}


export { CreateItem, getItems, getItemsById, EditItem}