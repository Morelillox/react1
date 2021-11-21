//Component NavBar
import {Link} from "react-router-dom";
import {Navbar, Nav, Container} from "react-bootstrap";
import CardWidget from "./CartWidget";

const NavBar = () => {
  
    return(
        <Navbar bg="dark" variant="dark" >
        <Container >
        
        <Nav className="me-auto" style={{display: "contents"}}>
		
		<Link className="nav-link" to="/">Mil Budines</Link>
		<Link className="nav-link"  to="/category/todos">Productos</Link>
		<Link className="nav-link"  to="/category/nosotros">Nosotros</Link>
		<Link className="nav-link"  to="/category/Torta">Tortas</Link>
		<Link className="nav-link"  to="/category/Budin">Budines</Link>
		<Link className="nav-link"  to="/category/Alfajor">Alfajores</Link>
			
          
        <Link to="/cart" className="nav-link ms-5 ps-5">
				<CardWidget />
		</Link>
        </Nav>
        </Container>
      </Navbar>
      
    )
}

export default NavBar;

