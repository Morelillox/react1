import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" >
        <Container >
        <Navbar.Brand href="#home">Mil Budines</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Nosotros</Nav.Link>
          <Nav.Link href="#pricing">Carrito</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
    )
}

export default NavBar
