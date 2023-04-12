import React from 'react';
import pi, { doublePi, triplePi } from './math';
import { add, multiply, subtract, divide } from "./calculate";

// equivalent above import
// import * as pi from "./math";

function List() {
    return (
        <ul>
            <li>This is a List</li>
            <li>Hello, Jeff Hwang</li>
            <li>Have a good day!</li>
            <li>{pi}</li>
            <li>{doublePi()}</li>
            <li>{triplePi()}</li>

            <li>{add(1, 2)}</li>
            <li>{multiply(2, 3)}</li>
            <li>{subtract(7, 2)}</li>
            <li>{divide(5, 2)}</li>

{/*         equivalent above <li>
            <li>{pi.default}</li>
            <li>{pi.doublePi}</li>
            <li>{pi.triplePi}</li> */}

        </ul>
    )
}

export default List;