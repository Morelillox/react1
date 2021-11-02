import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  
    return(
        <Navbar bg="dark" variant="dark" >
        <Container >
        <Navbar.Brand href="#home">Mil Budines</Navbar.Brand>
        <Nav className="me-auto" style={{display: "contents"}}>
          <Nav.Link href="home">Inicio</Nav.Link>
          <Nav.Link href="nosotros">Nosotros</Nav.Link>
          <Nav.Link href="productos">Productos</Nav.Link>
          <CartWidget/>
        </Nav>
        </Container>
      </Navbar>
      
    )
}

export default NavBar
