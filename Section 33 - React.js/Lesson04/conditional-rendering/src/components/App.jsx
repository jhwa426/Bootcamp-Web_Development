import React from "react";
import Login from './Login';


var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return (
      <h1>Hello</h1>
    );
  } else {
    return (
      <Login />
    );
  }
}

const currentTime = new Date().getHours();



function App() {
  return (
    <div className="container">

      {/* Using function */}
      {/* {renderConditionally()} */}


      {/* Ternary Operator */}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}


      {/*AND Operator*/}
      {currentTime > 12 && <h1>Are you still working?</h1>}

      {currentTime > 12 ? <h1>Hello</h1> : null}
      {/* Both are literally  same above*/}

    </div >
  );
}

export default App;
