import React from 'react'
import Logo from "../Assets/pizzaLogo.png"
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
          <img src={Logo}/>
      </div>
      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>

    </div>
  )
}

export default Navbar