import React from 'react';
import Home from './Home'
import styled from 'styled-components'



const SearchDiv = styled.div`
margin:auto;
display: flex;
justify-content: center;
padding-bottom: 10px;
`

const SearchInput = styled.input`
font-size: 18px;

`
const Search = props => {

  const handleOnChange = event => {
    props.setDate(event.target.value)
  }


  return (
    <SearchDiv >
      <SearchInput type="date" onChange={handleOnChange}></SearchInput>
     
    </SearchDiv>
  );
};

export default Search;