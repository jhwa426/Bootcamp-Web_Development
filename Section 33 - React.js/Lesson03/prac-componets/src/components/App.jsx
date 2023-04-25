import React from "react";
import Entry from './Entry';
import emojipedia from '../emojipedia';

function showData(emojiTerm) {
    return (
        <Entry
            key={emojiTerm.id} //key must be set as a default
            emoji={emojiTerm.emoji} // "emoji" is from Entry component (props.emoji)
            name={emojiTerm.name} // "name" is from Entry component (props.emoji)
            description={emojiTerm.meaning} // "description" is from Entry component (props.emoji) || "meaning" is from emojipedia object in array.
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
                {/* function mapping */}
                {emojipedia.map(showData)}

                {/* direct arrow function of emojipedia*/}
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
