import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';
import Test from './Test';

function Card(props) {
    return (
        <div>
            <div className="card">

                <div className="top">
                    <h2 className='name'>{props.name}</h2>
                    <Avatar img={props.img} />
                </div>

                <div className="bottom">
                    <Detail
                        detailInfo={props.tel} // tel -> App.js Card - attribute
                    />
                    <Detail
                        detailInfo={props.email} //email -> App.js Card - attribute
                    />
                    <Test
                        testInfo={props.test} //testInfo that I created in Test.jsx
                    />
                </div>

            </div>
        </div>
    );
}

export default Card;