interface TProduct {
    name: string;
    description: string;
    category: string;
    price: number;
    img_url: string;
}

interface User {
    username: string;
    password: string;
    repeatPassword: string;
    email: string;
}


export type {TProduct, User}