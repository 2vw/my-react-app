import logo from './logo.svg';
import './App.css';
import * as React from 'react';

/**
 * This function renders the App component.
 *
 * If the URL contains query parameters `email` and `password`, it renders a
 * welcome message with the email.
 *
 * Otherwise, it renders a sign-up form with fields for an email and password.
 *
 * TODO: this should send a POST request to the server if the form is submitted.
 * TODO: this should redirect to a login page if the user is already logged in.
 */
function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const email = queryParameters.get('email');
  const pasword = queryParameters.get('password');

  if (email && pasword) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height="200" width="200"/>
          <h1>
            Welcome {email}!
          </h1>
        </header>
      </div>
    )
    // TODO: this should send a POST request to the server
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="200" width="200"/>
        <h1>
          Sign up
        </h1>
        <form>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Sign up</button>
        </form>
        {/* TODO: this should send a POST request to the server */}
      </header>
    </div>
  );
}

export default App;
