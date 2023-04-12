import React from 'react';

function Heading() {
    const currentDate = new Date();
    const currentTime = currentDate.getHours();
    let greeting;

    const greetingStyle = {
        color: ""
    };

    if (currentTime < 12) {
        greeting = "Good Morning";
        greetingStyle.color = "yellow"
    } else if (currentTime < 18) {
        greeting = "Good Afternoon";
        greetingStyle.color = "green"
    } else {
        greeting = "Good Night";
        greetingStyle.color = "blue"
    }

    return (
        <p style={greetingStyle}> {greeting} </p>
    )
}

export default Heading;