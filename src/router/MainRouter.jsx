import { Route, Routes} from "react-router-dom"
import {HomePage} from "../pages/HomePage"
import {LoginPage} from "../pages/LoginPage"
import {RegisterPage} from "../pages/RegisterPage"
// import { RegisterPageAdmin } from "../components/UserAdministrator"
import { AdminProductsPage } from "../pages/AdminProductsPage"
import { AdminUsersPage } from "../pages/AdminUserPage"
import { ProfileUserPage } from "../pages/ProfileUserPage"
import ProductDetail from "../pages/ProductDetail"



export const MainRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/adminProducts" element={<AdminProductsPage/>} />
            <Route path="/adminUsers" element={<AdminUsersPage/>} />
            <Route path="/profile" element={<ProfileUserPage/>} />
            <Route path="/product/:productId" element={<ProductDetail/>} />
            <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
    )
}