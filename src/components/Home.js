import React from "react";
import styled from 'styled-components'

const PhotoDiv = styled.div`
width:840px;
padding: 20px 0;
margin: auto;
border: 1px solid;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
background: white;

`

const PhotoImg = styled.img`
width:800px;
margin: auto;
display:block;
`

function Home(props) {

  if (!props.nasaData) return <h3>Loading...</h3>;


  return (
    <PhotoDiv>
      
          <PhotoImg src={props.nasaData.hdurl} />
       
      
    </PhotoDiv>
  );
}

export default Home;
