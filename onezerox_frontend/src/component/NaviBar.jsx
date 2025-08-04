import React from 'react'
import './navibar.css'
import logo from '../images/logo.png';


function NaviBar() {
  return (
    <div className='navi'>
        <div className="home">
            <img src={logo} alt="" className='logo'  />
            <button>Projects</button>

        </div>
        <div className='btn'>
            <button>About me</button>
            <button>Skills</button>
            <button>Projects</button>
            <button>Contact</button>
        </div>
    </div>
  )
}

export default NaviBar