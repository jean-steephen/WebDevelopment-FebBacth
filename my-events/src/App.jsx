import React from 'react';


/*
function App(){

function handleClick(){
  alert('Button was clicked!');
}


  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
export default App;

*/

//Example 2 Instagram follow Button
/*
import {useState} from 'react';

function App(){

const[isFollowed , setIsFollowed] = useState(false); 


  return (
    <div>
      <button onClick={()=> setIsFollowed(!isFollowed)}>
          {isFollowed ? "Following" : "Follow"}
      </button>
    </div>
  )
}
export default App;

*/

//Example Live Search System
/*
import {useState} from 'react';

function App(){
const [text , setText] = useState("");


  return (
    <div>
      <input type="search" placeholder="Search..." onChange={(e) => setText(e.target.value)}/>
      <h3>You typed: {text}</h3>
    </div>
  )
}
export default App;
*/

//Example 4 : 
/*
import {useState} from "react";

function App(){
  const [color, setColor] = useState("white");
  const [dark , setDark] = useState(false);

function handleClick(){
  setColor("black");
  setDark(!dark);
}  

  return (   
    <div style={{backgroundColor: color, height: "100vh"}}>
      <button onClick={handleClick}>
        {dark ? "☀️" : "🌙"}
      </button>
    </div>
  )
}
export default App;
