const getItems = "SELECT * FROM items ORDER BY id";
const getItemsById = "SELECT * FROM items where id = $1";
const createItem = "INSERT INTO items (name,category,description,price,img_url) VALUES($1,$2,$3,$4,$5)";
const checkNameExists = "SELECT * FROM items WHERE name = $1";
const checkNameInUpdateExists = "SELECT * FROM items WHERE name = $1 AND id!=$2";
const updateItem = "UPDATE items SET name=$1, category=$2, description=$3, price=$4, img_url=$5 WHERE id = $6";

export {
    getItems,
    getItemsById,
    createItem,
    checkNameExists,
    checkNameInUpdateExists,
    updateItem
}