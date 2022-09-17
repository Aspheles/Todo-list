interface Product {
    name: string;
    description: string;
    category: string;
    price: number;
    img_url: string;
}

interface User {
    username: string;
    password: string;
    email: string;
}


interface QueryResult<T>{
    rows: T[];
}


export type {Product, User, QueryResult}