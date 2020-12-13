import React from 'react'
import Layout from '../../components/layouts/Layout'
import Banner from '../../components/Banner'
import ListProduct from './ListProduct'
import MenuRight from '../../components/MenuRight'

const Product = ({ category }) => {
  return (
    <Layout>
      <Banner />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-bold py-2">Cà phê rang xay</h2>
            </div>
            <div className="col-md-8 col-12">
              <ListProduct />
            </div>
            <div className="col-md-4 col-12">
              <MenuRight />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

Product.getInitialProps = async (ctx) => {
  const { slug } = ctx.query
  if (slug) {

  }


  return {
    category: []
  }
}

export default Product