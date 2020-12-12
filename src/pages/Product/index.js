import React from 'react'
import Layout from '../../components/layouts/Layout'
import Banner from '../../components/Banner'
import ListProduct from './ListProduct'

const Product = () => {
  return (
    <Layout>
      <Banner />
      <div className="row">
        <div className="col-8">
          <ListProduct />
        </div>
        <div className="col-4">
          <div>menu</div>
        </div>
      </div>

    </Layout>
  )
}

export default Product