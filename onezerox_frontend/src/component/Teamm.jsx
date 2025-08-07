import React from 'react'
import './team.css'
import heshan from '../images/team/heshan.png'
import yasiru from '../images/team/yasiru.png'




const hilight = { color: 'rgba(4, 255, 20, 1)'}





function Teamm() {
  return (
    <div className="temain">
            <h1 className='team-heading'>Our <span style={hilight}>team</span></h1>   
            <div className='bmain'>
                <div className="tbox">
                    <img src={heshan} alt="" className='timg'/>
                    <div className="tdis">
                        <h1>Heshan</h1>
                        <div className="tpara">
                            <p>Welcome to my portfolio! I am a Full Stack Web Developer and Graphic Designer with a passion for creating innovative solutions. My journey in web development has equipped me with the skills to build dynamic and responsive websites, while my design background allows me to create visually appealing user interfaces.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="tbox">
                    <img src={yasiru} alt="" className='timg'/>
                    <div className="tdis">
                        <h1>Yasiru</h1>
                        <div className="tpara">
                            <p>I'm Yasiru Kodikara, a fullstack web developer at OneZeroX. I specialize in building dynamic, responsive web applications using Angular, Node.js, and MySQL. With a strong focus on clean architecture and performance, I enjoy creating seamless digital experiences that solve real-world problems. Outside of coding, I have a passion for music, which inspires my creativity and attention to detail in every project I take on</p>
                            
                        </div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default Teamm