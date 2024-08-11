import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function BasicExample() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Link to="/">
          <img
            src="https://vigilwineclub.com/images/logo_image?dpr=1&h=100&q=80&version=d5ded"
            className="imgBrand"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center me-auto">

            <Link className='navLinkHome' to="/">INICIO</Link>


            <NavLink className='navLink' to="varietal/Tinto">TINTO</NavLink>
            <NavLink className='navLink' to="varietal/Blanco">BLANCO</NavLink>
            <NavLink className='navLink' to="varietal/Rosado">ROSADO</NavLink>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />

      </Container>
    </Navbar>
  );
}

export default BasicExample;