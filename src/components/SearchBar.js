import React, {useState, useEffect} from 'react';
import Home from './Home'
import styled from 'styled-components'
import axios from 'axios';
import Search from './Search'


const PhotoDiv = styled.div`
margin:auto;
`

const SearchBar = props => {

  const [nasaData,setNasaData]=useState();
  const [date,setDate]=useState('2021-07-16');


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=aXa5j4l7ciBzvWHr4inz69Ip4uAgOiUTZhbHwaZe&date=` + date)
    .then(res => {
      setNasaData(res.data)
    })
    
  },[date]);
  
  console.log(nasaData)
  console.log(date)
  

  return (
    <PhotoDiv >
      <Search setDate={setDate} />
      <Home nasaData={nasaData}/>
     
    </PhotoDiv>
  );
};

export default SearchBar;