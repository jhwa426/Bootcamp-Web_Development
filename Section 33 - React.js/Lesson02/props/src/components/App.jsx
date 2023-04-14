import React from "react";
import Card from './Card';
import contacts from '../contacts';
import Avatar from './Avatar';

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar
                img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
            />

            <Card
                name="Beyonce"
                img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                tel="+123 456 789"
                email="b@beyonce.com"
                test="Test Area"
            />

            <Card
                name={contacts[1].name}
                img={contacts[1].imgURL}
                tel={contacts[1].phone}
                email={contacts[1].email}
            />



        </div>
    );
}


export default App;
