import React from 'react';
import NaviBar from '../component/NaviBar';
import Footer from '../component/Footer';
import './project.css';
import comweb from '../images/project/proc.png';



const hilight = { color: 'rgba(4, 255, 20, 1)',fontSize:"60px",BlobEvent}


function Project() {
  return (
    <>
      <NaviBar />
      <div className="pro">
        <div className="prh">
                <h1 style={{ fontSize:"40px"}}>Our compleated <span style={hilight} >projects</span></h1>

          </div>
        <div className="subpro">
          
          <div
            className="img"
            style={{
              backgroundImage: `url(${comweb})`
            }}
          ></div>
          <div className="pdis">
            <h1>Our company website</h1>
            <p>The frontend is developed using React.js and Bootstrap, offering a seamless, fast, and interactive interface optimized for all devices. With component-based architecture and responsive design, the site ensures high performance and accessibility.</p>
            <p>The backend is powered by Node.js and MySQL, providing a robust and scalable foundation for data management, API integrations, and secure server-side operations.</p>
            <a href="https://my-portfolio-theta-ivory-88.vercel.app/" target='_blank' rel='noreferrer'><button style={{border:"2px solid green", borderRadius:"10px", width:"fit-content", cursor:"pointer",fontSize:"20px",alignSelf:"center" ,color:'black'}}>View preview</button></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
