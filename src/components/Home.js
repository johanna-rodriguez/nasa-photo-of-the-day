import React from "react";


function Home(props) {

  if (!props.nasaData) return <h3>Loading...</h3>;


  return (
    <div className="App">
      <p>
          <img src={props.nasaData.hdurl} />
       
      </p>
    </div>
  );
}

export default Home;
