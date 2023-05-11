import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


// ...Spread operator

// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"]; // ...citrus -> "Apple", "Lime", "Lemon", "Orange", "Banana", "Coconut"

// const fullName = {
//     fName: "Jeff",
//     lName: "Hwang"
// }

// const user = {
//     ...fullName,
//     id: 1,
//     username: "jhwa426"
// }
// //     fName: "Jeff", lName: "Hwang", id: 1, username: "jhwa426"