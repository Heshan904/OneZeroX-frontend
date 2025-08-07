
import React, { useEffect, useState } from 'react'
import './navibar.css'
import logo from '../images/logob.png';
import { Link } from 'react-router-dom';

function NaviBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to your desired scroll threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`navi${scrolled ? ' scrolled' : ''}`}>
        <div className="home">
            <button style={{flexDirection:'row',justifyItems:'center' }}><img src={logo} alt="" className='logo'style={{height:'20px'}}/>OneZeroX</button>
            <Link to="/project"><button>Projects</button></Link>

        </div>
        <div className='btn'>
            <button>Inside</button>
            <button>Contact</button>
            <button>Projects</button>
            <button>Aboute</button>
        </div>
    </div>
  )
}

export default NaviBar