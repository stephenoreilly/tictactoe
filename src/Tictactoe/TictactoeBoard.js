import React from 'react'
import {GridList} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import {each, map, difference} from 'lodash';
import TictactoeSquare from './TictactoeSquare'

const styles = {
  gridList: {
    width: 300,
    height: 300,
    padding: 20,
  },
  paddedArea: {
    padding: 20,
  }
};

class TictactoeBoard extends React.Component {
  constructor(props) {
    super(props)
    let map = {}
    each([1,2,3,4,5,6,7,8,9], (num) => { map[num] = null })
    this.state = {
      numberMap: map,
      player: 'player1',
      xs: [],
      os: [],
      winner: null,
    }
    this.numberOfXWins = 0
    this.numberOfOWins = 0
    this.winningArrays = [[1,2,3],[1,4,7],[4,5,6],[2,5,8],[7,8,9],[3,6,9],[1,5,9],[3,5,7]]
  }

  checkForWinner(arr, winner) {
    each(this.winningArrays, (winArr) => {
      if(arr.length - difference(arr, winArr).length === 3) {
        (winner === "X's") ? this.numberOfXWins++ : this.numberOfOWins++
        this.setState({winner})
      }
    })
  }

  updateState(num) {
    if (this.state.winner) { return false }

    let tempState = this.state.numberMap
    if (tempState[num] === null) {
      if (this.state.player === 'player1') {
        tempState[num] = "close"
        this.setState({ numberMap: tempState })
        let tempArr = this.state.xs
        tempArr.push(parseInt(num, 10))

        this.setState({xs: tempArr})
        this.setState({player: 'player2'})
        this.checkForWinner(this.state.xs, "X's")
      } else {
        tempState[num] = "panorama_fish_eye"
        this.setState({ numberMap: tempState })
        let tempArr = this.state.os
        tempArr.push(parseInt(num, 10))

        this.setState({os: tempArr})
        this.setState({player: 'player1'})
        this.checkForWinner(this.state.os, "O's")
      }
    }
  }

  squares() {
    return (map(this.state.numberMap, (val, num) => {
      let tempNum = parseInt(num, 10)
      return <TictactoeSquare number={tempNum} key={tempNum} value={val} squareClick={(()=>{this.updateState(num)})}/>
    }))
  }

  clearState() {
    let map = {}
    console.log("clear")
    each([1,2,3,4,5,6,7,8,9], (num) => { map[num] = null })

    this.setState({
      numberMap: map,
      player: 'player1',
      xs: [],
      os: [],
      winner: null,
    })
  }

  buttonLabel() {
    if (this.state.winner) {
      return `Congrats ${this.state.winner}! (click here for another game)`
    } else {
      return 'Reset'
    }
  }

  render() {
    return(
      <div>
        <GridList style={styles.gridList} cols={3} padding={0} cellHeight={100}>
          {this.squares()}
        </GridList>
        <div style={styles.paddedArea}>
          <div>
            {`O: ${this.numberOfOWins}\tX: ${this.numberOfXWins}`}
          </div>
          <RaisedButton
            primary={!!this.state.winner}
            secondary={!this.state.winner}
            onClick={this.clearState.bind(this)}
            label={this.buttonLabel()} />
          </div>
      </div>
    )
  }
}

export default TictactoeBoard