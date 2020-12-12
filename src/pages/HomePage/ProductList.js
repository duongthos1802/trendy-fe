import React from 'react'
import CardProduct from '../../components/CardProduct'

const ProductList = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="heading_s1 text-center" data-animation="fadeInUp" data-animation-delay="0.02s">
              <h2 className="text-color-black">Cà phê rang xay</h2>
            </div>
            <div className="hr-title">
              <hr />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <CardProduct />
          </div>
          <div className="col-md-3">
            <CardProduct />
          </div>
          <div className="col-md-3">
            <CardProduct />
          </div>
          <div className="col-md-3">
            <CardProduct />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList