const getItems = "SELECT * FROM items";
const getItemsById = "SELECT * FROM items where id = $1";
const createItem = "INSERT INTO items (name,category,description,price,img_url) VALUES($1,$2,$3,$4,$5)";
const checkNameExists = "SELECT * FROM items WHERE name = $1";

export {
    getItems,
    getItemsById,
    createItem,
    checkNameExists
}