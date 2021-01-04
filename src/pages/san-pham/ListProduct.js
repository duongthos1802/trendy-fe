import React from "react"
import CardProduct from "../../components/CardProduct"
import Link from "next/link"

const ListProduct = ({ products, category }) => {
  return (
    <div className='row'>
      {products && products.length
        ? products.map((product) => (
            <div className='col-md-4 col-12 mb-5'>
              <Link href={`san-pham/chi-tiet/${product?.slug}-${product._id}`}>
                <a>
                  <CardProduct product={product} category={category} />
                </a>
              </Link>
            </div>
          ))
        : null}
    </div>
  )
}

export default ListProduct
