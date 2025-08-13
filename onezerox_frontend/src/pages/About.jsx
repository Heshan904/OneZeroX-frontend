import React from 'react'
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'
import './about.css'


function About() {
  return (
    <>
    <NaviBar/>
    <div className="about-container">
      <header className="about-header">
        <h1>About OneZeroX</h1>
        <p>Innovating software solutions for a smarter future.</p>
      </header>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          OneZeroX is a forward-thinking software company dedicated to building
          innovative, scalable, and user-friendly digital solutions. We combine
          creativity, technology, and expertise to bring ideas to life.
        </p>

        <h2>Our Mission</h2>
        <p>
          To empower businesses and individuals by providing cutting-edge
          software that simplifies processes, enhances productivity, and
          creates lasting value.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be a global leader in technology innovation, delivering solutions
          that inspire and transform the way the world works.
        </p>
      </section>
      <img src={'https://res.cloudinary.com/da2wbtci0/image/upload/v1755115110/flogo_ag9ulf.png'} alt="" />

     </div>

    <Footer/>
    </>
  )
}

export default About