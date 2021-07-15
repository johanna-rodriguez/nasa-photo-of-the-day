import React from 'react';
import Home from './Home'

const Navbar = props => {



  return (
    <div className='navbar'>
      
      <Home nasaData={props.nasaData}/>
     
    </div>
  );
};

export default Navbar;