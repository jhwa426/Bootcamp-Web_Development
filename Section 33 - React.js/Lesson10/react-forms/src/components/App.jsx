import React, { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");

    function handleChange(event) {
        setName(event.target.value);

        // console.log(event.target.value); // whatever I type in the "input"
        // console.log(event.target.type); // type="text"
        // console.log(event.target.placeholder); // placeholder="What's your name?"
    }

    function handleClick(event) {
        setHeading(name + "?");
        event.preventDefault();
    }


    return (
        <div className="container">
            <h1>Kia ora, {name}</h1>
            <h1>How are you, {headingText}</h1>
            <form onSubmit={handleClick}>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="What's your name?"
                    value={name}
                />
                <button type="submit" onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
