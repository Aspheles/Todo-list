const getUsers = "SELECT * FROM accounts";
const getUserById = "SELECT * FROM accounts WHERE id = $1";
const checkCredentailsExist = "SELECT * FROM accounts WHERE email = $1 OR username = $2";
const createAccount = "INSERT INTO accounts (username,password,email) VALUES($1,$2,$3)";
const checkLoginCredentails = "SELECT * FROM accounts WHERE username = $1 AND password = $2";


export {
    getUsers,
    getUserById,
    checkCredentailsExist,
    createAccount,
    checkLoginCredentails
}