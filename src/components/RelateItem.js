import Link from "next/link"
import React from "react"
import CardProduct from "./CardProduct"

const RelateItem = ({ products, recipes, category }) => {
  return (
    <div className='row mt-3'>
      {recipes
        ? recipes.map((recipe) => {
            return (
              <div className='col-md-3 col-12 mb-5'>
                <Link href={`cong-thuc/chi-tiet/${recipe?.slug}-${recipe._id}`}>
                  <a>
                    <CardProduct recipe={recipe} category={category} />
                  </a>
                </Link>
              </div>
            )
          })
        : null}
      {products
        ? products.map((product) => {
            return (
              <div className='col-md-3 col-12 mb-5'>
                <Link
                  href={`cong-thuc/chi-tiet/${product?.slug}-${product._id}`}
                >
                  <a>
                    <CardProduct product={product} category={category} />
                  </a>
                </Link>
              </div>
            )
          })
        : null}
    </div>
  )
}

export default RelateItem
