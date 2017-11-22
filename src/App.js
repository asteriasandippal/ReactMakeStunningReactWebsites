import React, { Component } from 'react';
import Jumbotron from './components/common/Jumbotron';
import Button from './components/common/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="banner-jumbotron" containerfluid="true">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Button className="btn-primary btn-lg" disabled href="https://google.co.in">Hello, Where??</Button>
            <Button className="btn-danger" disabled>Hello i am </Button>
            <Button className="btn-info btn-block" href="https://google.co.in">This Button Block</Button>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
