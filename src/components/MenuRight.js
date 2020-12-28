import React, { useEffect, useState } from "react"
import Link from "next/link"
import product from "../actions/queries/product"
import { getProducts } from "../actions/productAction"
import SmallCardProduct from "./SmallCardProduct"

const MenuRight = ({ menu, isGood }) => {
  const [goodProducts, setGoodProducts] = useState([])

  let cateParent = null
  if (menu && menu.length) {
    cateParent = menu.find((item) => !item.parentId)
  }
  const loadGoodProducts = async (queryClause) => {
    const products = await getProducts(queryClause)
    return products
  }
  useEffect(() => {
    const query = `filter: {goodProduct: true, status: Published}, limit: 5`
    const products = loadGoodProducts(query)
    products.then((value) => setGoodProducts(value))
  }, [])
  // console.log("goodProducts.......", goodProducts)
  return (
    <div class='sidebar px-2 d-none d-md-block'>
      <div className='widget'>
        <h5 className='font-weight-bold text-color-primary-blue'>Danh mục</h5>
        <ul className='widget_categories mt-4 mb-4'>
          {menu && menu.length
            ? menu.map((item) => {
                if (item.parentId) {
                  return (
                    <li>
                      <Link href={`/${cateParent.slug}/${item.slug}`}>
                        <a>
                          <span className='categories_name font-weight-bold font-size-14'>
                            {item?.name}
                          </span>
                        </a>
                      </Link>
                    </li>
                  )
                }
              })
            : null}
        </ul>

        {isGood ? (
          <h5 className='font-weight-bold text-color-primary-blue'>
            Sản phẩm đánh giá cao
          </h5>
        ) : null}
        {isGood ? (
          <ul className='widget_categories mt-4 mb-4'>
            {goodProducts && goodProducts.length
              ? goodProducts.map((product) => {
                  return (
                    <li>
                      <Link
                        href={`/san-pham/chi-tiet/${product?.slug}-${product._id}`}
                      >
                        <a>
                          <SmallCardProduct
                            product={product}
                            category={product?.category}
                          />
                        </a>
                      </Link>
                    </li>
                  )
                })
              : null}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default MenuRight
