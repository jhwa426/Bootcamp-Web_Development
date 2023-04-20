import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from '../notes';

// noteData function (normal)
function noteData(item) {
    return (
        <Note
            key={item.key}
            title={item.title}
            content={item.content}
        />
    );
}

function App() {
    return (
        <div>
            <Header />

            {/* <Note /> */}

            {/* {notes.map(noteData)} */}

            {/* arrow function */}

            {notes.map(noteItem => (
                <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))}

            <Footer />
        </div>
    );
}

export default App;
