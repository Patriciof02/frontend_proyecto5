import React from "react"
import { useState} from "react"
import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import {UserContext} from "../context/user/UserContext"
import jwt from "jwt-decode"
import {types} from "../context/user/userReducer"
import axios from "axios"

export const UserAdmin = () => {

    const [isLoading,setIsLoading] = useState(false)

    const [user, dispatch] = useContext(UserContext)

    const navigate = useNavigate()

    const initialUser = {
        username:"",
        pass:"",
        mail:"",
        phone:"",
        adress:"",
        admin:"",

    }
    const [formUser, setFormUser] = useState(initialUser)

    const handleChange = (e) =>{
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try{
        const {data} = await axios.post("https://backend-p5-g0l2.onrender.com/users",formUser,{
        headers: {
            "Content-Type":"application/json"
        }
       
    })
    const tokenDecodificado = jwt(data .token)
    console.log(tokenDecodificado)

        dispatch ({
            type: types.setUserState,
            payload: tokenDecodificado
        })
        window.alert('Usuario Registrado')
        setIsLoading(false)
        //    setformUser(initialUser)
           navigate('/')
           } catch (error) {
            console.log(error.response)
            window.alert('Error al registrar usuario')
            dispatch({
                type: types.setError,
                payload:error
            })
            setIsLoading(false)
           }
         }
        
    return (
        <>
        <div className="caja1">
        <div className="formulario1" >
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" onChange={handleChange}/>
            <label htmlFor="mail">Email</label>
            <input type="email" id="mail" name="mail" onChange={handleChange}/>
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="pass" onChange={handleChange}/>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" onChange={handleChange}/>
            <label htmlFor="adress">Adress</label>
            <input type="text" id="adress" name="adress" onChange={handleChange}/>
            <label htmlFor="admin">Role</label>
            <select name="admin" id="admin" onChange={handleChange} >
              <option value="false">User</option>
              <option value="true">Admin</option>
            </select>
            
           <button type="submit" disabled={isLoading}>Register</button>
            
            
        </form>
          </div>
        </div>
    </>
     )}

  