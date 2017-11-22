import React, { Component } from 'react';

import Button from './components/common/Button';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button className="btn-primary btn-lg" disabled href="https://google.co.in" />
        <Button className="btn-danger" disabled />
        <Button className="btn-info btn-block" href="https://google.co.in" />
      </div>
    );
  }
}

export default App;
