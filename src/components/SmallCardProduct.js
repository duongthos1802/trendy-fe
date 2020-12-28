import React from "react"
import PropTypes from "prop-types"
import { imageUtils } from "../utils"
import { enumType } from "../constants"

const SmallCardProduct = ({ product, category, recipe }) => {
  if (product || recipe) {
    return (
      <div className='small-product-card'>
        {product ? (
          <img
            className='small-product-img'
            height='50'
            width='50'
            src={imageUtils.getBlockUrl(
              product.pictures[0],
              enumType.imagePath.Product
            )}
          />
        ) : (
          <img
            className='small-product-img'
            height='50'
            width='50'
            src={imageUtils.getBlockUrl(
              recipe.pictures[0],
              enumType.imagePath.Recipe
            )}
          />
        )}
        {/* <img
          className='small-product-img'
          height='50'
          width='50'
          src='https://mysterybean.vn/wp-content/uploads/2018/09/vien-nen-colonial-taste-1600-800x800.jpg'
        /> */}
        <div className='small-card-content'>
          <p className='small-card__title'>
            {product ? product?.name : recipe?.name}
          </p>
          <p className='small-card__cate'>{category?.name}</p>
        </div>
      </div>
    )
  }
}

export default SmallCardProduct
