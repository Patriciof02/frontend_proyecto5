


import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import  UserContext  from '../context/user/UserContext';
import jwt from "jwt-decode"
import Table from 'react-bootstrap/Table';

export const UserList = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const[user, dispatch] = useContext(UserContext)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null);
  



  useEffect(() => {
    
    const fetchData = async () => {
    
      setIsLoading(true);
      try {
        const response = await axios.get('https://backend-p5-g0l2.onrender.com/users',{
          headers: {
            
            "Content-Type":"application/json"
        }
       
        })
        //  const tokenDecodificado =jwt(response.token)

        setUsers(response.data.detail);
        
       
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
  

  const handleEdit = (userId) => {
    console.log('Editar usuario con ID:', userId);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete('https://backend-p5-g0l2.onrender.com/',userId,{
        headers:{
          "Content-Type":"application/json"
        }


      });
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      console.log('eliminar usuario con ID', userId)
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };
  
    const renderUserRows = () => {
      return users?.map((user) => (
        <tr key={user._id}>
          <td>{user.username}</td>
          <td>{user.mail}</td>
          <td>
          <button onClick={() => handleEdit(user._id)}>Editar</button>
          <button onClick={() => handleDelete(user._id)}>Eliminar</button>
          </td>
        </tr>
      ));
    };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {isLoading ? (
        <p>Cargando usuarios...</p>
      ) : error ? (
        <p>Error al cargar los usuarios.</p>
      ) : (
        // <table>
        //   <thead>
        //     <tr>
        //       <th>Username</th>
        //       <th>Email</th>
        //       <th>Acciones</th>
        //     </tr>
        //   </thead>
        //   <tbody>{renderUserRows()}</tbody>
        // </table>
             <Table striped bordered hover>
             <thead>
             <tr>
             <th>Username</th>
             <th>Email</th>
             <th>Acciones</th>
             </tr>
             </thead>
             <tbody>
            {renderUserRows()}
             </tbody>
             </Table>
      )}
    </div>
  );
};