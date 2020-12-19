import React, { useEffect } from 'react'
import CardProduct from '../../components/CardProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryFeature } from '../../actions/homeAction'
import Link from 'next/link'
import Title from '../../components/Title'

const ProductList = () => {

  const dispatch = useDispatch()

  const categoryFeature = useSelector(state => state.homes && state.homes.categoryFeature ? state.homes.categoryFeature : [])

  const loadCategoryFeature = async () => {
    const products = await getCategoryFeature()
    dispatch.homes.getCategoryFeature(products)
  }

  useEffect(() => {
    loadCategoryFeature()
  }, [])
  return categoryFeature && categoryFeature.length && (
    <div className="py-4">
      {
        categoryFeature.map(category => (
          <div>
            {
              category.products && category.products.length
                ? <div className="section py-4">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-8">

                        <Title category={category} />
                        {/* <div className="heading_s1 text-center" data-animation="fadeInUp" data-animation-delay="0.02s">
                          <Link href={`san-pham/${category?.slug}`}>
                            <a>
                              <h2>{category?.name}</h2>
                            </a>
                          </Link>
                        </div>
                        <div className="hr-title">
                          <hr />
                        </div> */}
                      </div>
                    </div>
                    <div className="row">
                      {
                        category.products.map(product => (
                          <div className="col-lg-3 col-md-6 col-12">
                            <Link href={`san-pham/chi-tiet/${product?.slug}-${product._id}`}>
                              <a>
                                <CardProduct
                                  product={product}
                                  category={category}
                                />
                              </a>
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
                : null
            }

          </div>

        ))
      }
    </div>
  )
}

export default ProductList