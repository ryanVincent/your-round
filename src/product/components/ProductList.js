import React, { Component, PropTypes } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

  render() {
    const { products, round, onAddItemClick, onRemoveItemClick, onQtyChange } = this.props;
    return (<ul>
      {products.map(product => <ProductItem key={product.id} round={round} product={product} onRemoveClick={onRemoveItemClick} onAddClick={onAddItemClick} onChange={onQtyChange} />)}
    </ul>);
  }
}

ProductList.propTypes = {

};

export default ProductList;
