import React, { useState } from "react"; //to handle synchronous components


function App() {
    // ////////////////////////////////////////////////////////////////////////////// TEST AREA //////////////////////////////////////////////////////////////////////////////

    // 
    const [count, setCount] = useState(0);

    // This was used to be below
    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    ////////////////////////////////////////////////////////////////////////////// TEST AREA //////////////////////////////////////////////////////////////////////////////



    // Time area
    setInterval(updateTime, 1000); // this is automatically updated time.

    const currentTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(currentTime);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={updateTime}>Get Time</button>
            <br />

            {/* TEST AREA */}
            <div className="container-data">
                <h1>TEST AREA</h1>
                <h1>{count}</h1>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
            {/* TEST AREA */}
        </div>
    );
}

export default App;
