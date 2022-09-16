import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home/index";
import {AddProduct} from "../pages/CreateProduct/index";
import {Task} from "../pages/Task/index";
import {Login} from "../pages/Auth/login/index";
import { Products } from "../pages/Product/index";
import { Register } from "../pages/Auth/register/index";
import { EditProduct } from "../pages/EditProduct";

const NavRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/tasks" element={<Task />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/editproduct/:id" element={<EditProduct />} />
        </Routes>
    )
}


export {NavRouter}