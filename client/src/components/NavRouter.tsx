import {Routes, Route} from "react-router-dom";
import {HomePage} from "../pages/home";
import {ProductsPage} from "../pages/products";
import {TasksPage} from "../pages/tasks";
import {LoginPage} from "../pages/login";

const NavRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}


export {NavRouter}