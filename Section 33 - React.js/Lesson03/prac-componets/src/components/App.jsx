import React from "react";
import Entry from './Entry';
import emojipedia from '../emojipedia';

function showData(emojiTerm) {
    return (
        <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
        />
    );
}


// const minData = emojipedia.map(function (emojiTerm) {
//     return emojiTerm.meaning.substring(0, 100);
// });

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(showData)}


                {/* arrow function of emojipedia*/}
                {emojipedia.map(emojiTerm => (
                    <Entry
                        key={emojiTerm.id}
                        emoji={emojiTerm.emoji}
                        name={emojiTerm.name}
                        description={emojiTerm.meaning}
                    />
                ))}



            </dl>
        </div>
    );
}

export default App;
