
import React, { useContext } from "react";
import UserContext from "../context/user/UserContext";
import { types } from "../context/user/userReducer"

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { NavLink, } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const NavBar = () => {

  const [state, dispatch] = useContext(UserContext);

  const logout = () => {
    // Envía una acción al reductor para actualizar el estado
    dispatch({ type: types.setUserState, payload: null });
  };

  return (
    <nav>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Tienda Padel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <NavLink to="/" className="nav-link">home</NavLink>

              {state && state.user ? (
                <>
                  <NavLink to="/products" className="nav-link">Productos</NavLink>

                  <NavDropdown title="Administrador" id="navbarScrollingDropdown">
                    <NavLink to="/adminUsers" className="nav-link">Usuarios</NavLink>
                    <NavDropdown.Divider />
                    <NavLink to="/adminProducts" className="nav-link">Productos</NavLink>
                  </NavDropdown>
                </>
              ) : null}

              {state && state.user ? null : (
                <>
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                  <NavLink to="/register" className="nav-link">Register</NavLink>
                </>
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>

              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle className="ms-3 " variant="success" id="dropdown-basic">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src="/usericon2.png" // Reemplaza con la ruta de tu imagen
                      alt="Icono de acceso"
                      width={20} // Ajusta el ancho de la imagen según tus necesidades
                      height={20} // Ajusta la altura de la imagen según tus necesidades
                      className="" // Agrega margen derecho para separar la imagen del texto
                    />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu align="end" title="Dropdown end" id="dropdown-menu-align-end">
                  {state && state.user ? (
                    <>
                      <h2>Bienvenido {state.user.username}</h2>
                      <NavLink to="/profile" className={"nav-link"}>MyProfile</NavLink>
                      <NavDropdown.Divider />
                      <Dropdown.Item onClick={logout}>Cerrar sesión</Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login" className={"nav-link"}>login</NavLink>
                      <NavLink to="/register" className={"nav-link"}>Register</NavLink>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

