import React from 'react'
import { imageUtils } from '../utils'
import { enumType } from '../constants'

const CardProduct = ({ product, category }) => {
  return product && (
    <div className="card-product mt-3">
      <div>
        <img src={imageUtils.getBlockUrl(product.pictures[0], enumType.imagePath.Product)} />
        {/* <img src={product.image} /> */}
      </div>
      <div className="title-product">
        <p className="mb-0 font-size-18 font-weight-bold text-color-black">{product?.name}</p>
        <p className="mb-0 category">{category?.name}</p>
      </div>

    </div>
  )
}

export default CardProduct 
