import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TictactoeBoard from './Tictactoe/TictactoeBoard'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TictactoeBoard />
      </MuiThemeProvider>
    );
  }
}

export default App;
