import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import blog from './../assets/blog.jpg'
const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
      <img src={blog}/>
        <div className='nav'>
            <h2>My Post</h2>
            <h2>Blog</h2>
            {/* <button id='login'><Link to='/'>Login/Signup</Link></button> */}
            <button type="button" class="btn btn-outline-info"><Link  style ={{textDecoration:"none",color:"black"}} to='/'>Login/Signup</Link></button>
        </div>
      </div>
    </>
  )
}

export default Navbar
