import React, { useEffect, useState } from 'react'
import './navibar.css'
import logo from '../images/logob.png';
import { Link, useLocation } from 'react-router-dom';

function NaviBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // ✅ Moved inside the component

  const pageStyles = {
    '/project': 'project-button',
    '/about': 'about-button',
    '/contact': 'contact-button',
    '/inside' : 'inside-button',
    '/contact':'contact-button',
    '/about':'about-button'
  };

  const currentPageClass = pageStyles[location.pathname] || '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navi${scrolled ? ' scrolled' : ''}`}>
      <div className="home">
        <Link to={"/"}>
        <button style={{ flexDirection: 'row', justifyItems: 'center' }} className={currentPageClass}>
          <img src={logo} alt="" className='logo' style={{ height: '20px' }} />OneZeroX
        </button>
        </Link>
        <Link to="/project"><button className={currentPageClass}>Projects</button></Link>
      </div>

      <div className='btn'>
        <Link to={"/inside"}><button className={currentPageClass}>Inside</button></Link>
        <Link to={"/contact"}><button className={currentPageClass}>Contact</button></Link>
        <Link to={"/about"}><button className={currentPageClass}>About</button></Link>
      </div>
    </div>
  );
}

export default NaviBar;
