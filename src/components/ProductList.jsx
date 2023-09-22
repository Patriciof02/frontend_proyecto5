
import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { ProductContext } from '../context/products/productContext';
import jwt from "jwt-decode"
import Table from 'react-bootstrap/Table';

export const ProductList = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [product,dispatch] = useContext(ProductContext)
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);
  



  useEffect(() => {
    
    const fetchData = async () => {
    
      setIsLoading(true);
      try {
        const response = await axios.get('https://backend-p5-g0l2.onrender.com/products',{
          headers: {
           
            "Content-Type":"application/json"
        }
       
        })
        //  const tokenDecodificado =jwt(response.token)

        setProducts(response.data.detail);
        
       
      } catch (error) {
        setError(error)
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
 
    fetchData();
  }, []);

console.log(products)
  

  const handleEdit = (productId) => {
    console.log('Editar producto con ID:', productId);
  };

  const handleDelete = async (productId) => {
    try {
      // Realiza una solicitud DELETE para eliminar el producto por su ID
      await axios.delete('https://backend-p5-g0l2.onrender.com/products/',productId, {
        headers: {
          "Content-Type": "application/json"
          // Puedes agregar cualquier otro encabezado necesario aquí
        }
      });
      
      // Actualiza la lista de productos después de la eliminación
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      
      console.log('Eliminar producto con ID:', productId);
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      // Puedes agregar lógica adicional aquí para manejar el error, como mostrar un mensaje de error al usuario.
    }
  };
  
    const renderProductRows = () => {
      return products.map((product) => (
        <tr key={product._id}>
          <td>{product.productname}</td>
          <td>{product.image}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td>

          <button onClick={() => handleEdit(product._id)}>Editar</button>
          <button onClick={() => handleDelete(product._id)}>Eliminar</button>
         </td>
        </tr>
      ));
    };

  return (
    <div>
      
      <h1>Lista de Productos</h1>
      {isLoading ? (
        <p>Cargando Productos...</p>
      ) : error ? (
        <p>Error al cargar los Productos.</p>
      ) : (
        // <table>
        //   <thead>
        //     <tr>
        //       <th>productname</th>
        //       <th>image</th>
        //       <th>price</th>
        //       <th>description</th>

        //     </tr>
        //   </thead>
        //   <tbody>{renderProductRows()}</tbody>
        // </table>

        <Table striped bordered hover>
        <thead>
        <tr>
        <th>productname</th>
        <th>image</th>
        <th>price</th>
        <th>description</th>
        <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
       {renderProductRows()}
        </tbody>
        </Table>
      )}
    </div>
  );
};