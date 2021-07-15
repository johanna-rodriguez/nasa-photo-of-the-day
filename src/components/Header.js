import React from 'react';

const Header = props => {


  return (
    <div className='header'>
       <img
          alt='header logo'
          className='header-logo'
          src={require('../assets/logo.png')}
        />
      <h1>Welcome to Nasa Photo of the Day</h1>
     <h3>Date</h3>
    </div>
  );
};

export default Header;