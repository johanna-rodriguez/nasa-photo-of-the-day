import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {

  const [nasaData,setNasaData]=useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=aXa5j4l7ciBzvWHr4inz69Ip4uAgOiUTZhbHwaZe`)
    .then(res => {
      setNasaData(res.data)
    })
    
  },[]);
  
  console.log(nasaData)
  

  return (
    <div className="App">
      <p>
        <Header nasaData={nasaData}/>
        <Navbar nasaData={nasaData}/>
        <Footer nasaData={nasaData}/>
      </p>
    </div>
  );
}

export default App;
