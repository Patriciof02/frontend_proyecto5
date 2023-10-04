import React from "react"
import { useState} from "react"
import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import  ProductContext from "../context/products/ProductContext"
import {types} from "../context/products/productReducer"
import axios from "axios"
import Dropzone from "dropzone"


export const RegisterProducts = () => {

    const [isLoading,setIsLoading] = useState(false)

    const [product, dispatch] = useContext(ProductContext)

    const navigate = useNavigate()

    const initialProduct = {
        productname:"",
        image:"",
        price:"",
        description:""

    }
    const [formProduct, setFormProduct] = useState(initialProduct)

    const handleChange = (e) =>{
        setFormProduct({
            ...formProduct,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try{
        const {data} = await axios.post("https://backend-p5-g0l2.onrender.com/products",formProduct,{
        headers: {
            "Content-Type":"application/json"
        }
       
    })

        dispatch ({
            type: types.setProductState,
            payload: data
        })
        window.alert('Producto Registrado')
        setIsLoading(false)
           setformUser(initialProduct)
         
           } catch (error) {
            console.log(error.response)
            window.alert('Error al registrar producto')
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
        <form id="upload-form" className="dropzone" onSubmit={handleSubmit}>
            <label htmlFor="productname">Productname</label>
            <input type="text" id="productname" name="productname" onChange={handleChange}/>
            <div className="previews"></div>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" name="image" onChange={handleChange}/>
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" onChange={handleChange}/>
            <label htmlFor="description">Descrition</label>
            <input type="text" id="description" name="description" onChange={handleChange}/>
            <button type="submit" disabled={isLoading}>Register</button>
            
        </form>
          </div>
        </div>
    </>
     )}

   