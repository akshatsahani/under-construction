import React from 'react';
// import Navbar from '../Components/Navbar';
import yourImage from '../Components/Images/display_image.jpg'

const ComingSoon = () => {
  return (
    <div className="App">
      {/* Navbar component */}

      <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img 
        src={yourImage} 
        alt="Under Construction" 
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} 
      />
      </div>
    </div>
  );
}

export default ComingSoon;
