


import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../context/user/UserContext';
import jwt from "jwt-decode"

export const UserList = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null);
  // const [user,] = useContext(UserContext);



  useEffect(() => {
    
    const fetchData = async () => {
    
      setIsLoading(true);
      try {
        const response = await axios.get('https://backend-p5-g0l2.onrender.com/users',{
          headers: {
            "Authorization":"`{tokenDecodificado}`",
            "Content-Type":"application/json"
        }
       
        })
        //  const tokenDecodificado =jwt(response.token)

        setUsers(response.data);
        
       
      } catch (error) {
        setError(error)
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
 
    fetchData();
  }, []);

console.log(users)
  

  // const handleEdit = (userId) => {
  //   console.log('Editar usuario con ID:', userId);
  // };

  // const handleDelete = async (userId) => {
  //   try {
  //     await axios.delete(`https://backend-p5-g0l2.onrender.com/${userId}`);
  //     setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
  //   } catch (error) {
  //     console.error('Error al eliminar usuario:', error);
  //   }
  // };
  
    const renderUserRows = () => {
      return users?.map((usuario) => (
        <tr key={usuario.id}>
          <td>{usuario.username}</td>
          <td>{usuario.email}</td>
          <td>{/* Agrega botones de acción o enlaces aquí */}</td>
        </tr>
      ));
    };

  return (
    <div>
      <div></div>
      <h1>Lista de Usuarios</h1>
      {isLoading ? (
        <p>Cargando usuarios...</p>
      ) : error ? (
        <p>Error al cargar los usuarios.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{renderUserRows()}</tbody>
        </table>
      )}
    </div>
  );
};