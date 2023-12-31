import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { useContext } from "react"
import  UserContext  from "../context/user/UserContext"
import { types } from "../context/user/userReducer"
import jwt from "jwt-decode"
import axios from "axios"
import { NavLink } from "react-router-dom"


export const LoginPage = () => {

    const [isLoading,setIsLoading] = useState(false)

    const [, dispatch] = useContext(UserContext)

    const navigate = useNavigate()

    const initialUser = {
        mail:"",
        pass:"",
 
    }



 const [user, setUser]= useState(initialUser)

 const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
 }

 const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
   try {
    const {data} =await axios.post("https://backend-p5-g0l2.onrender.com/users/login",user,{
        headers: {
            "Content-Type":"application/json"
        }
    })

    const tokenDecodificado =jwt(data.token)


   dispatch({
    type:types.setUserState,
    payload: tokenDecodificado
   })
   window.alert('Usuario Logueado')
   setIsLoading(false)
//    setUser(initialUser)
   navigate('/')
   } catch (error) {
    window.alert('Error al loguear usuario')
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
    <h1>Login</h1>
    <form  onSubmit={handleSubmit}>
        <label htmlFor="mail">Email</label>
        <input type="email" id="mail" name="mail"onChange={handleChange}/>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" name="pass" onChange={handleChange}/>
        <button type="submit" disabled={isLoading}>{isLoading?'Cargando...':'Ingresar'}</button>
        <NavLink to="/register">Register</NavLink>
    </form>
    </div>
    </div>
    </>

 )}
