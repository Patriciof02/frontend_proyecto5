
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';




export const NavBar = () => {
    return (



     <nav>      
    {/* <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>


   </nav> */}
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Tienda Padel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/"  className="nav-link">home</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item >Palas</NavDropdown.Item>
              <NavDropdown.Item >
               Accesorios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Mostrar todo
              </NavDropdown.Item>
            </NavDropdown>
            
            <NavLink to="/admin"  className="nav-link">Administrador</NavLink>
            
          </Nav>
          <Form className="d-flex " >
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

      <Dropdown.Menu    align="end"
      title="Dropdown end"
      id="dropdown-menu-align-end">
        <Dropdown.Item><NavLink to="/login" className={"nav-link"}>login</NavLink></Dropdown.Item>
        <Dropdown.Item><NavLink to="/register" className={"nav-link"}>Register</NavLink></Dropdown.Item>
        <NavDropdown.Divider />
        <Dropdown.Item >Cerrar sesion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </nav>
  );
}






