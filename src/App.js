import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          william
        </h1>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          >About me</a>
        <button className="App-button" onClick={() => alert('clicked')}>
          Click me
        </button>
        <footer className="App-footer"  >
          <p>Made with ❤️</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
