import React from 'react'


import PropTypes from 'prop-types'
import './ProductTable.css'
const ProductTable = ({products}) => (
   
<table className="table">
  <thead>
    <tr>
      <th scope="col">Category</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    { products.map(product => <tr className={product.price > 100 ? "red" : "blue"}>
    <td>{product.category}</td>
    <td>{product.name}</td>
    <td>{`${product.price} $`}</td>
    </tr>)}
  </tbody>
</table>
)

ProductTable.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
}






export default ProductTable