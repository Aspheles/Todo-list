import {Routes, Route} from "react-router-dom";
import {HomePage} from "../pages/homepage";
import {ProductsPage} from "../pages/productspage";
import {TasksPage} from "../pages/taskspage";
import {LoginPage} from "../pages/loginpage";
import { AddProduct } from "./addproduct";

const NavRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
    )
}


export {NavRouter}