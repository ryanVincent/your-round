import React, { Component, PropTypes } from 'react';
import DrinkList from './components/DrinkList';
import { fetchDrinks } from './api';
class Drink extends Component {
    constructor(props) {
        super(props);

        this.state = {
          drinks: []
        };
    }

    componentDidMount() {
      fetchDrinks().then((drinks) => {
        this.setState({ drinks })
      });
    }

    render() {
        const { drinks } = this.state;
        return <DrinkList drinks={drinks} />;
    }
}

Drink.propTypes = {

};

export default Drink;
