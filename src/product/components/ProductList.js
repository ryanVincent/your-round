import React, { Component, PropTypes } from 'react';
import ProductItem from './ProductItem';
import {browserHistory} from 'react-router';

class ProductList extends Component {

  render() {
    const { products, round, onAddItemClick, onRemoveItemClick, onQtyChange, onViewOrderClick } = this.props;
    return (<div>
      <ul>
        {products.map(product => <ProductItem key={product.id} round={round} product={product} onRemoveClick={onRemoveItemClick} onAddClick={onAddItemClick} onChange={onQtyChange} />)}
      </ul>
      <button onClick={onViewOrderClick}>View Order</button>
      <button onClick={()=> {browserHistory.push('/bars')}}>View Pubs</button>
    </div>);
  }
}

ProductList.propTypes = {

};

export default ProductList;
