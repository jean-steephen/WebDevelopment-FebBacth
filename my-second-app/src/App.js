import React from "react";
import ProfileCard from "./ProfileCard";

function App(){

//js part

var company = "Amazon"


//{} - Indicate Js part in Html

  return(
    <div>
      <h1>Profile Card for {company}</h1>
      <ProfileCard />
    </div>

  )
}

export default App;