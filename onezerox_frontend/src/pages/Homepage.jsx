import React, { useEffect, useState } from 'react'
import './homepage.css'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'
import bgVideo from '../videos/background.mp4';
import Service from '../component/Service';
import Tec from '../component/Tec';


const para = {fontFamily: "'Inria Sans', Arial, sans-serif",color:'white',fontSize:"90px",BlobEvent} 

const messages = [
  "Our Goal is <br/>Customer Satisfaction",
  "Innovating <br/>Digital Solutions",
  "Empowering <br/>Your Business",
  "Building the <br/>Future Together"
]




function Homepage() {

  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % messages.length);
        setFade(true); // Fade in new message
      }, 500); // Duration matches CSS transition
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <NaviBar/>
    <main className='mainhome'>
      <video
        className="bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
        <div className='para' >
            <h1
            style={para}
            className={fade ? 'fade-in' : 'fade-out'}
            dangerouslySetInnerHTML={{ __html: messages[current] }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button style={{backgroundColor:'rgb(0, 255, 30)',padding:'10px 40px',borderRadius:'30px',textAlign:'center',color:'white',marginBottom:'20px'}}>Contact</button>
        </div>
    </main>
    <Service/>
    <Tec/>
    <Footer/>
    
    </>
  )
}

export default Homepage