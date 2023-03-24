import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navContainer">
      <Link className='link' to='/' ><h2>Home</h2></Link>
      <Link className='link' to='/bookmarks' ><h2>Bookmarks</h2></Link>
    </div>
  )
}

export default NavBar