import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu" onClick={() => document.getElementById('navbarMenu').classList.toggle('is-active')}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className="navbar-menu" id="navbarMenu">
          <div className="navbar-end">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/about">
              About
            </a>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          hi lol
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
