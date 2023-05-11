import React, { useState } from "react";


function App() {

    // text
    const [inputText, setInputText] = useState("");

    // item
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        setItems((previousItem) => { //"previousItem" can be any text.
            return [...previousItem, inputText];
        });
        setInputText("");
    }


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    onChange={handleChange}
                    type="text"
                    value={inputText}
                />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((todoItem) => {
                        return <li>{todoItem}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
