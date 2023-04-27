import React, { useState } from "react";

function App() {

    const [headingText, settingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false); // Boolean can be figured out easily

    function handleClick() {
        settingText("Submitted");
    }

    // Mouse Over / Out area
    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false)
    }

    // TEST AREA
    function backToMain() {
        settingText("Hello");
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button
                style={{ backgroundColor: isMouseOver ? "black" : "white" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Submit</button>

            {/* TEST AREA */}
            <div className='back'>
                <button
                    style={{ backgroundColor: isMouseOver ? "red" : "white" }}
                    onClick={backToMain}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}

                >
                    Back</button>
            </div>
            {/* TEST AREA */}

        </div>
    );
}

export default App;
