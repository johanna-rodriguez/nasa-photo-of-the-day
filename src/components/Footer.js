import React from 'react';
import styled from 'styled-components'

const FooterDiv = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: flex-start;
border: 1px solid;
box-shadow: 5px 10px #888888;
margin-top: 20px;
background: white;

`

const FooterH3 = styled.h3`
font-size:20px;
`
const FooterImg = styled.img`
width:200px;
`


const Footer = props => {



  return (
    <FooterDiv >
      <FooterImg
          alt='footer logo'
          src={require('../assets/nasa.jpeg')}
        />
     <FooterH3>National Aeronautics and Space Administration
NASA Official: Brian Dunbar</FooterH3>     
    </FooterDiv>
  );
};

export default Footer;