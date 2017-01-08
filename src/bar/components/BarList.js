import React, { Component, PropTypes } from 'react';
import BarItem from './BarItem';

class BarList extends Component {

  render() {
    const bars = this.props.bars;
    return (<ul>
      {bars.map(bar => <BarItem key={bar.id} bar={bar}/>)}
    </ul>);
  }
}

BarList.propTypes = {

};

export default BarList;
