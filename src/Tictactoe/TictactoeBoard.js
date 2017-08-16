import React from 'react'
import {GridList} from 'material-ui/GridList';
import {map} from 'lodash';
import TictactoeSquare from './TictactoeSquare'

const styles = {
  gridList: {
    width: 300,
    height: 300,
  },
};

class TictactoeBoard extends React.Component {
  squares() {
    return (map([1,2,3,4,5,6,7,8,9], (num) => {
      return <TictactoeSquare number={num} key={num} />
    }))
  }

  render() {
    return(
      <div>
        <GridList style={styles.gridList} cols={3} padding={0} cellHeight={100}>
          {this.squares()}
        </GridList>
      </div>
    )
  }
}

export default TictactoeBoard