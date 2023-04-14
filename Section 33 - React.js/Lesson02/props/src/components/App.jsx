import React from "react";
import Card from './Card';
import contacts from '../contacts';

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>

            <Card
                name="Beyonce"
                img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                tel="+123 456 789"
                email="b@beyonce.com"
            />

            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
            />



        </div>
    );
}


export default App;
