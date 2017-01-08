import React, { Component, PropTypes } from 'react';
import DrinkItem from './DrinkItem';

class DrinkList extends Component {

  render() {
    const { drinks } = this.props;
    return (<ul>
      {drinks.map(drink => <DrinkItem key={drink.id} drink={drink}/>)}
    </ul>);
  }
}

DrinkList.propTypes = {

};

export default DrinkList;
