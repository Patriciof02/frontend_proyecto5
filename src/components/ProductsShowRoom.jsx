import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import  ProductContext from "../context/products/ProductContext"
import jwt from 'jwt-decode';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ProductsShowRoom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, dispatch] = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://backend-p5-g0l2.onrender.com/products', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setProducts(response.data.detail);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderProductRows = () => {
    return products.map((product) => (
      <Col className="" key={product._id} xs={12} sm={6} md={4} lg={3}>
        <Card className='producto m-2 w-auto  '>
          <Card.Img variant="top" src="pala1.jpg" /> {/* Reemplaza con la fuente de imagen real */}
          <Card.Body>
            <Card.Title>{product.productname}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Card.Text>
              {product.price}
            </Card.Text>
            <Button variant="success" className='position-absolute bottom-0 end-0 m-2'>comprar</Button>{' '}
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div className='sectionproductos'>
      <h1 className='tituloproductos'>Productos</h1>
      {isLoading ? (
        <p>Cargando Productos...</p>
      ) : error ? (
        <p>Error al cargar los Productos.</p>
      ) : (
        <Container>
          <Row className='productos'>
            {renderProductRows()}
          </Row>
        </Container>
      )}
    </div>
  );
};