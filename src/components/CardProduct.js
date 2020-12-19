import React from "react"
import { imageUtils } from "../utils"
import { enumType } from "../constants"

const CardProduct = ({ product, category, recipe }) => {
  if (product || recipe) {
    return (
      <div className='card-product mt-3'>
        <div>
          {product ? (
            <img
              src={imageUtils.getBlockUrl(
                product.pictures[0],
                enumType.imagePath.Product
              )}
            />
          ) : (
              <img
                src={imageUtils.getBlockUrl(
                  recipe.pictures[0],
                  enumType.imagePath.Recipe
                )}
              />
            )}
          {/* <img src={product.image} /> */}
        </div>
        <div className='title-product'>
          <p className='mb-0 font-size-18 font-weight-bold'>
            {product ? product?.name : recipe?.name}
          </p>
          <p className='mb-0 category'>{category?.name}</p>
        </div>
      </div>
    )
  }
}

export default CardProduct
