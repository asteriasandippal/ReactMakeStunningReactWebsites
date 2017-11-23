import React, { Component } from 'react';
import Jumbotron from './components/common/Jumbotron';
import Button from './components/common/Button';
import ShowUser from './components/ShowUser';
import './App.scss';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

import { CSSTransitionGroup } from 'react-transition-group';

import GoogleMap from './components/GoogleMap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CSSTransitionGroup 
          transitionName="appfade"
          transitionAppear={true}
          transitionAppearTimeout={50000}
          transitionLeaveTimeout={3000}
          transitionEnter={false}
          transitionLeave={false}>
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
        </CSSTransitionGroup>
        <ShowUser/>
        <GoogleMap/>
      </div>
    );
  }
}

export default App;
