import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginWidget from './Login/LoginWidget'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <LoginWidget />
      </MuiThemeProvider>
    );
  }
}

export default App;
