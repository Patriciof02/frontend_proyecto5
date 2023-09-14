import { Route, Routes} from "react-router-dom"
import {HomePage} from "../pages/HomePage"
import {LoginPage} from "../pages/LoginPage"
import {RegisterPage} from "../pages/RegisterPage"
// import { RegisterPageAdmin } from "../components/UserAdministrator"
import { AdminPage } from "../pages/AdminPage"

export const MainRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
    )
}