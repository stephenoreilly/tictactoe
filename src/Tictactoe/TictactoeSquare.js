import React from 'react'
import {GridTile} from 'material-ui/GridList';

const styles = (number) => {
  let style = {
    textAlign: 'center',
    lineHeight: '100px',
    fontSize: '2em'
  }
  if ([1,2,3,4,5,6].includes(number)){
    style['borderBottom'] = '1px #ccc solid'
  }
  if([1,2,4,5,7,8].includes(number)){
    style['borderRight'] = '1px #ccc solid'
  }
  return style
}

class TictactoeSquare extends React.Component {
  render() {
    return(
      <GridTile
        style={styles(this.props.number)}
        onClick={this.props.squareClick}
      >
        <i className="material-icons">{this.props.value}</i>
      </GridTile>
    )
  }
}

export default TictactoeSquare