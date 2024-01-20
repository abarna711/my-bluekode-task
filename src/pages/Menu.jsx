import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { FiShoppingCart } from 'react-icons/fi';
// import logo from './image/logo.png';
// import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


function Menu(){
  const navbarStyles = {
    position: 'fixed',
    width: '100%',
  }
return(
  <div className='container-fulid'>
    <div >


      <Navbar expand="lg" className=" navbar fixed-top " style={{ ...navbarStyles }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menubar ms-5' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav ms-5 ps-5">
            <Link to="/homesec" className='nav-link'>Home</Link>
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/service" className='nav-link'>Service</Link>
            <Link to="/contact" className='nav-link'>Contact Us</Link>
            <Link to="/page" className='nav-link'>Pages</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='fixed-top'>
      <div className='icon'style={{fontSize:'20px'}}>
          <i class="bi bi-telephone-fill"></i>
          <span className="badge" style={{ color: 'white' }}> </span>

        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
);
 }

export default Menu;  