
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from "../Image/images.png";

import React, { useState } from 'react'

function Navbar({searchTerm,setSearchTerm}) {

    


  return (
    <div className='navbar'>
        <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pokemon">Pokemon</Link></li>
        <li><Link to="/abilities">Abilities</Link></li>
        <li><Link to="/types">Types</Link></li>
        <li><Link to="/colors">Colors</Link></li>
        <li><Link to="/habitats">Habitats</Link></li>
        <li><Link to="/shapes">Shapes</Link></li>
        <li><Link to="/dective-pikachu">Dective Pikachu</Link></li>
        <input type='text' placeholder='search pokemon' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value.toLowerCase())}/>
        

        </ul>
    </div>
  )
}

export default Navbar