import React, { useContext} from 'react';
import  UserContext  from "../context/user/UserContext"
import Table from 'react-bootstrap/Table';


export const ProfileUserPage = () => {
  const [state, ] = useContext(UserContext)


    return(
    <>
    { state?.user && 
    <div>
    <h2>Datos usuario:{state.user.username}</h2>
    <Table striped bordered hover>
    
    <thead key={state.user._id}>
      <tr>
        <td>id</td>
        <td>{state.user._id}</td>
      
      </tr>
        <tr>
            <td>usuario</td>
            <td>{state.user.username}</td>
            <td>
          <button onClick={() => handleEdit(user._id)}>Editar</button>
        
          </td>
        </tr>
        <tr>
            <td>email</td> 
            <td>{state.user.mail}</td>
            <td>
          <button onClick={() => handleEdit(user._id)}>Editar</button>
        
          </td>
        </tr>
        <tr>
            <td>dirección</td>
            <td>{state.user.adress}</td>
            <td>
          <button onClick={() => handleEdit(user._id)}>Editar</button>
         
          </td>
           
        </tr>
        <tr>
            <td>telefono</td>
            <td>{state.user.phone}</td>
            <td>
          <button onClick={() => handleEdit(user._id)}>Editar</button>
          </td>
        </tr>
     

    </thead>
   
   </Table>
  </div>
    
    }



    </>
    )
    
    }

