import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function ProductDetail() {
  const { productId } = useParams(); // Obtiene el productId de la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-p5-g0l2.onrender.com/products/${productId}`);
        setProduct(response.data.detail);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div>
      <h2>{product.productname}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {/* Agrega cualquier otro detalle del producto que desees mostrar */}
    </div>
  );
}

export default ProductDetail;