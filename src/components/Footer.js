import React from 'react';

const Footer = props => {



  return (
    <div className='footer'>
      <img
          alt='footer logo'
          className='footer-logo'
          src={require('../assets/logo.png')}
        />
     <h3>National Aeronautics and Space Administration
NASA Official: Brian Dunbar</h3>     
    </div>
  );
};

export default Footer;