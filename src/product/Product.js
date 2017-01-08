import React, { Component, PropTypes } from 'react';
import ProductList from './components/ProductList';
import Order from './round/components/Order';
import { fetchProducts } from './api';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
          products: [],
          round: {},
          orderMode: false
        };

        this.handleAddItemClick = this.handleAddItemClick.bind(this);
        this.handleRemoveItemClick = this.handleRemoveItemClick.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
        this.handleViewOrderClick = this.handleViewOrderClick.bind(this);
        this.handleViewDrinksMenuClick = this.handleViewDrinksMenuClick.bind(this);
    }

    componentDidMount() {
      fetchProducts().then((products) => {
        this.setState({ products })
      });
    }

    handleAddItemClick(product) {
      const round = this.state.round;

      if (round[product.id]) {
        round[product.id].qty += 1;
      } else {
        round[product.id] = {
          product,
          qty: 1
        };
      }

      this.setState({ round });

    }

    handleRemoveItemClick(product) {
      const round = this.state.round;

      if (round[product.id]) {
        if (round[product.id].qty === 1) {
          delete round[product.id];
        } else {
          round[product.id].qty -= 1;
        }
      }

      this.setState({ round });

    }

    handleQtyChange(product, qty) {
      const round = this.state.round;

      if (qty <= 0) {
        qty = 0;
      }

      if (round[product.id]) {
        round[product.id].qty = qty;
      } else {
        round[product.id] = {
          product,
          qty
        };
      }

      this.setState({ round });

    }

    handleViewOrderClick() {
      this.setState({
        orderMode: true
      })
    }

    handleViewDrinksMenuClick() {
      this.setState({
        orderMode: false
      })
    }

    render() {
        const { products, round, orderMode } = this.state;
        return (orderMode ?
         <Order order={round} onViewDrinksMenuClick ={this.handleViewDrinksMenuClick}/> :
         <ProductList
            products={products}
            round={round}
            onViewOrderClick={this.handleViewOrderClick}
            onAddItemClick={this.handleAddItemClick}
            onRemoveItemClick={this.handleRemoveItemClick}
            onQtyChange={this.handleQtyChange}
          />
       );

    }
}

Product.propTypes = {

};

export default Product;
