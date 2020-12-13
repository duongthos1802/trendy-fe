import React from 'react'
import CardProduct from '../../components/CardProduct'

const ListProduct = ({ products, category }) => {
  return (
    <div className="row">
      {
        products && products.length
          ? products.map(product => (
            <div className="col-6">
              <CardProduct
                product={product}
                category={category}
              />
            </div>
          ))
          : null
      }


    </div>
  )
}

export default ListProduct