
import React, { useState, useEffect } from 'react';
import './tec.css';

function getResponsiveFontSizes() {
  const width = window.innerWidth;
  if (width < 500) {
    return { h1: '1.5rem', span: '1.5rem', p: '0.9rem' };
  } else if (width < 900) {
    return { h1: '4rem', span: '4rem', p: '1.1rem' };
  } else {
    return { h1: '4rem', span: '4rem', p: '1.5rem' };
  }
}


function Tec() {
  const [fontSizes, setFontSizes] = useState(getResponsiveFontSizes());

  useEffect(() => {
    const handleResize = () => {
      setFontSizes(getResponsiveFontSizes());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hilight = {
    color: 'rgba(4, 255, 0, 1)',
    fontSize: fontSizes.span,
    fontFamily: "'Inter', sans-serif"
  };

  return (
    <div className="tmain">
      <h1
        style={{
          marginLeft: 'auto',
          marginRight: '3vw',
          fontFamily: "'Inter', sans-serif",
          fontSize: fontSizes.h1,
          textAlign: 'end',
          wordBreak: 'break-word'
        }}
      >
        We are <span style={hilight}>upgraded</span> with latest <br /> technologies
      </h1>
      <div className="par">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center',
            fontSize: fontSizes.p,
            wordBreak: 'break-word',
            margin: 0
          }}
        >
          We are excited to announce that we have upgraded our systems<br/> with the latest technologies to enhance performance, security, and scalability. This upgrade allows us to deliver faster, more reliable services while staying aligned with current industry standards. By embracing modern frameworks and tools, we’re better equipped to innovate and meet the evolving needs of our users.
        </p>
      </div>
    </div>
  );
}

export default Tec