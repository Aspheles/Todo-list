import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home/index";
import {AddProduct} from "../pages/CreateProduct/index";
import {Task} from "../pages/Task/index";
import {Login} from "../pages/auth/login/index";
import { Product } from "../pages/Product/index";
import { Register } from "../pages/auth/register/index";

const NavRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AddProduct />} />
            <Route path="/tasks" element={<Task />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addproduct" element={<Product />} />
            <Route path="/signup" element={<Register />} />
        </Routes>
    )
}


export {NavRouter}