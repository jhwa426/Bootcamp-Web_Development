import React from "react";

var isDone = false;

function strike() {
  // isDone = true; //declarative programming
  document.getElementById("root").style.textDecoration = "line-through"; // imperative programming
}

function unStrike() {
  // isDone = false; //declarative programming
  document.getElementById("root").style.textDecoration = null; // imperative programming
}

function App() {
  return (
    // <div>
    //   <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
    //   <button onClick={strike}>Change to strike through</button>
    //   <button onClick={unStrike}>Change back</button>
    // </div>

    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Something to do</p>   {/*a ? something true : something false  */}

      <button onClick={strike}>Change to strike through</button>

      <br />

      <button onClick={unStrike}>Change back</button>

    </div >
  );
}

export default App;
