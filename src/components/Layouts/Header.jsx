import React, {useState} from 'react'
import '../../styles/HeaderStyle.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png"

function Header() {
  const [nav, setNav] = useState(false)
  // Scroll NavBar

  const changeValueOnScroll = () =>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue >100 ? setNav(true): setNav(false);
  };
  window.addEventListener("scroll", changeValueOnScroll)





  return (
    <div className='header'>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true?"sticky":""}`} >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
            <img src={Logo} alt="" className='img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">about</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">shop</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/contact">
              <div className="cart">
                <i className="bi bi-bag fs-5"></i>
                <em className='routndpoint'>2</em>
              </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
