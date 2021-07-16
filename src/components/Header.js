import React from 'react';
import styled from 'styled-components'

const HeaderDiv = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
border: 1px solid;
box-shadow: 5px 10px #888888;
margin-bottom: 20px;
background: white;
`
const HeaderH1 = styled.h1`
font-size:50px;
`
const HeaderImg = styled.img`
width:200px;
`
const HeaderH3 = styled.h3`
margin-right:20px;
padding-top:20px;

`
const Header = props => {

  var today = new Date().toLocaleDateString();

  return (

    <HeaderDiv>
       <HeaderImg
          alt='header logo'
          src={require('../assets/logo.png')}
        />
      <HeaderH1>Welcome to Nasa Photo of the Day</HeaderH1>
     <HeaderH3>{today}</HeaderH3>
    </HeaderDiv>

  );
};

export default Header;