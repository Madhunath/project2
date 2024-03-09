import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBook } from "react-icons/fa";
import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useSelector} from 'react-redux';


function Navigationbar(){

  const cart = useSelector(state => state.cart);
  const cartItemCount = Array.isArray(cart) ? cart.length : 0;

    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    const location = useLocation();
    const isDropdownActive = ['/Ourteam', '/Testimoniall', '/Notfound'].includes(location.pathname);


return(
  <div>
<Navbar expand="lg" className="menu bg-tertiary fixed-top shadow">
 <Link to='#epwkde' className='navbar-brand'><FaBook className='book-logo'/> eLEARNING</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
  <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="navs me-auto" style={{ position: 'relative' }}>

  <Link to='/' id='nlink'className={location.pathname === '/' ? 'active-link' : 'inactive-link'} >HOME</Link>
  <Link to='/About' id='nlink' className={location.pathname === '/About' ? 'active-link' : 'inactive-link'} >ABOUT</Link>
  <Link to='/Courses' id='nlink' className={location.pathname === '/Courses' ? 'active-link' : 'inactive-link'}>COURSES</Link>

  <NavDropdown title="PAGES"
       id="basic-nav-dropdown" 
       className={isDropdownActive ? 'dropdown-active' : 'dropdown-inactive'}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       show={showDropdown}>
 <div className='drop-m' style={{ position: 'absolute', top: '-1px', left: 0, zIndex: 1000, width:"100%",transition:'.5s'  }}>

<NavDropdown.Item ><Link to='/Ourteam' id='nlink' className={location.pathname === '/Ourteam' ? 'active-link' : 'inactive-link'}>Our Team</Link></NavDropdown.Item>

<NavDropdown.Item ><Link to='/Testimoniall' id='nlink' className={location.pathname === '/Testimoniall' ? 'active-link' : 'inactive-link'}>Testimonial</Link></NavDropdown.Item>

<NavDropdown.Item ><Link to='/Notfound' id='nlink' className={location.pathname === '/Notfound' ? 'active-link' : 'inactive-link'} >404 Page</Link></NavDropdown.Item></div>
  </NavDropdown>

 <Link to='/Contact' id='nlink' className={location.pathname === '/Contact' ? 'active-link' : 'inactive-link'}>CONTACT</Link>

 <div className='cart-batch'>
 <Link to='/Cart'>< FaCartPlus className='cart-ico' style={{color:'#181d38', fontSize:'25px', marginTop:'7px'}}/>
 <div className="badge py-1" style={{ color: 'white' }}>{cartItemCount}</div>
</Link>
 </div>

  </Nav>
    </Navbar.Collapse>

  <Link to='/Contact' className='join d-lg-block d-none py-4 px-lg-5'><h6 className='joinNow1'>Join Now <FaArrowRight /></h6> </Link>

   </Navbar>
        </div>
    )
}
export default Navigationbar;