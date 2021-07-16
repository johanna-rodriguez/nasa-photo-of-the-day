import React from "react";
import "./App.css";
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import styled from 'styled-components'

const ContentWrapper = styled.div`
max-width:1200px;
margin:auto;
padding: 20px 0;
`
const BackgroundImg = styled.div`
background-image: url('https://img.wallpapersafari.com/desktop/1920/1080/23/18/2tJ4sg.jpg');
background-color: #cccccc;
`

function App() {

  

  return (
    <BackgroundImg>
      <ContentWrapper>
          <Header />
          <SearchBar />
          <Footer />
      </ContentWrapper>
    </BackgroundImg>
  );
}

export default App;
