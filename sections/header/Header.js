import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem, { NavItemDropDown } from '../../cpmponents/navItem/NavItem';
import { Link } from 'react-router-dom';


function Header() {
  return (
 
    
<div >
<nav className="navbar navbar-expand-md navbar-dark  cyborg-navbar text-white fixed-top">
<div className='container'>
  <Link className="navbar-brand" to="/">
     <img src={logo} alt="" /> 
     </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
   aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
  
      <NavItem>
      <Link className="nav-link" to="/#">Home</Link>
      </NavItem>
  <NavItem>
  <Link className="nav-link" to="/featturedGames">FeatturedGames </Link>
  </NavItem>
        
    <NavItemDropDown>  
        <Link className="nav-link dropdown-toggle" to="/#" 
        id="navbarDropdown" role="button" data-toggle="dropdown"
         aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" href="/#">Action</Link>
          <Link className="dropdown-item" href="/#">Another action</Link>
          <Link className="dropdown-item" href="/#">Something else here</Link>
        </div>
        </NavItemDropDown>
      <NavItem>
      <Link className="nav-link disabled" to="/#">Disabled</Link>

      </NavItem>
      <NavItem>
      <Link className="nav-link" to="/profile">Profile</Link>

      </NavItem>
     
    </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Header;