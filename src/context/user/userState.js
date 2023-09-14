
import React, { useReducer } from 'react'

import UserContext from '../user/UserContext'
import userReducer from '../user/userReducer'

import axiosClient from './../../../axios'

const UserState = (props) => {

    // 1. ESTADO INICIAL
    const initialState = {
        users: [""]
    }

    // 2. DISPATCHING Y REDUCERS 
    const [state, dispatch] = useReducer(userReducer, initialState)

    // 3. FUNCIONES 
    // NOS VAN A AYUDAR A CAPTURAR LOS EVENTOS DE LOS COMPONENTES

    // A. CREAR GUITARRA
    // CAPTURAREMOS A TRAVÉS DE ESTA FUNCIÓN LOS DATOS DE UN FORMULARIO QUE NOS PERMITIRÁN CREAR UNA GUITARRA
    const createUser = async (dataForm) => {

        const form = {
           
      username:dataForm.username,   
      pass: dataForm.pass,
      mail: dataForm.mail,
      phone:dataForm.phone,
      adress: dataForm.adress,
      admin: dataForm.admin
        }

        try {
            await axiosClient.post(`/login`, form)
            getUsers()

        } catch (error) {
            console.log(error)
        }

    }


    // B. LEER GUITARRAS
    // AL EJECUTAR ESTA FUNCIÓN, NOS PERMITE ACTUALIZAR NUESTRO ESTADO GLOBAL, A PARTIR DE UNA LLAMADA ASÍNCRONA "GET" HACIA EL SERVIDOR
    const getUsers = async () => {

        try {

            const res = await axiosClient.get(`https://backend-p5-g0l2.onrender.com/users`)

            dispatch({
                type: types.setUserState,
                payload: res.data.users
            })
console.log(users)
        } catch (error) {

        }
    }

    // C. ACTUALIZAR GUITARRA
    // ACTUALIZA EL DATO DE UNA GUITARRA A PARTIR DE UN FORMULARIO HACIA NUESTRA BASE DE DATOS.
    const updateUser = async (id, dataForm) => {

        const form = {
            id,
            username:dataForm.username,   
      pass: dataForm.pass,
      mail: dataForm.mail,
      phone:dataForm.phone,
      adress: dataForm.adress,
      admin: dataForm.admin
        }

        try {
            await axiosClient.put(`/actualizar-usuario`, form)

            getUsers()

        } catch (error) {
            console.log(error)
        }

    }

    // D. BORRAR GUITARRA
    // BORRA UNA GUITARRA HACIA LA BASE DE DATOS, A TRAVÉS DE UNA RUTA CON EL MÉTODO DELETE
    const deleteUser = async (id) => {

        const data = { id }

        try {
            await axiosClient.delete(`/borrar-usuario`, { data })

            getUsers()

        } catch (error) {
            console.log(error)
        }

    }

    // 4. RETORNO DE ESTADO GLOBAL
    return (
        <UserContext.Provider
            value={{
                users: state.users,
                createUser,
                getUsers,
                updateUser,
                deleteUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    )

}

// export default UserState
