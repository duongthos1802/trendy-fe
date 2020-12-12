import React, { useEffect } from 'react'
import CardProduct from '../../components/CardProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryFeature } from '../../actions/homeAction'

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
    <>
      {
        categoryFeature.map(category => (
          <div className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="heading_s1 text-center" data-animation="fadeInUp" data-animation-delay="0.02s">
                    <h2 className="text-color-black">{category?.name}</h2>
                  </div>
                  <div className="hr-title">
                    <hr />
                  </div>
                </div>
              </div>
              <div className="row">

                {
                  category.products && category.products.length
                    ? category.products.map(product => (
                      <div className="col-md-3">
                        <CardProduct
                          product={product}
                          category={category}
                        />
                      </div>
                    ))
                    : null

                }
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ProductList