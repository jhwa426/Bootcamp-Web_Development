import logo from './logo.svg';
import './App.css';

// JSX Attributes & Styling React Elements
const name = "Jeff Hwang";
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const date = currentDate.getDate();
const currentTime = currentDate.getHours();


// Inline Styling for React Elements
const customStyle = {
    color: "blue",
    fontSize: "20px",
    border: "1px solid black"
};

customStyle.color = "red";


// React Styling Practice
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



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello, World!
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <p>Created by {name}</p>
                <p style={customStyle}> Copyright {year}.{month}.{date} </p>
                <p style={greetingStyle}> {greeting} </p>

            </header>
        </div>
    );
}

export default App;
