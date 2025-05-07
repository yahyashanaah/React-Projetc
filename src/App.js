import './App.css';
import FormWithState from './FormWithState';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App</h1>
        <FormWithState />
      </header>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Getting Started
        </a>
      </p>
    </div>
  );
}



export default App;
