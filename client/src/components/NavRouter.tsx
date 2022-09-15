import {Routes, Route} from "react-router-dom";
import {HomePage} from "../pages/homepage";
import {ProductsPage} from "../pages/productspage";
import {TasksPage} from "../pages/taskspage";
import {LoginPage} from "../pages/loginpage";
import { AddProductPage } from "../pages/addproductpage";
import { RegisterPage } from "../pages/registerpage";

const NavRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/addproduct" element={<AddProductPage />} />
            <Route path="/signup" element={<RegisterPage />} />
        </Routes>
    )
}


export {NavRouter}