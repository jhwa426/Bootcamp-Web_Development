// Destructuring array

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice"

// Destructuring array - This is how Destructuring array
// WHY - The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

// we can set any variable of array here
const [tesla, honda] = cars;

// detailing indexing - that makes it possible to unpack values from arrays

// IMPORTANT!!!! -- the variable of an array must be matched with "cars" array object like model, coloursByPopularity, speedStats...
// speed
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

const { speedStats: { topSpeed: hondaTopSpeed } } = honda;

// zeroToSixty
const { speedStats: { zeroToSixty: teslazeroToSixty } } = tesla;

const { speedStats: { zeroToSixty: hondazeroToSixty } } = honda;

// colour
const { coloursByPopularity: [, teslaTopColour] } = tesla; // , can nth indexing - //i.e. teslaTopColour = "white"

const { coloursByPopularity: [hondaTopColour] } = honda;

// Type
const { type: [, teslaType] } = tesla; // , can nth indexing ----> "Sedan"

const { type: [hondaType] } = honda;
// const { type: [, , hondaType] } = honda; // ----> "Truck"

ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Zero to Sixty</th>
            <th>Top Colour</th>
            <th>Type</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslazeroToSixty}</td>
            <td>{teslaTopColour}</td>
            <td>{teslaType}</td>
            {/* OR below */}
            {/* <td>{tesla.type}</td> */}
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondazeroToSixty}</td>
            <td>{hondaTopColour}</td>
            <td>{hondaType}</td>
        </tr>
    </table>,
    document.getElementById("root")
);
