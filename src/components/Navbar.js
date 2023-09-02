import React from 'react'

const Navbar = () => {

  return (
    <nav className="navbar"> 
            <h1> Your task planner </h1>
            <div className="links" >
              <a href="/TaskWrapper"> Home </a>
              <a href="/Logout"> Logout </a>
            </div>
        
        </nav>
  )
}

export default Navbar