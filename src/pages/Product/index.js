import React from "react"
import Layout from "../../components/layouts/Layout"
import Banner from "../../components/Banner"
import ListProduct from "./ListProduct"
import MenuRight from "../../components/MenuRight"
import { getCategoryBySlug } from "../../actions/productAction"

const Product = ({ category }) => {
  return (
    <Layout>
      <Banner category={category} />
      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='font-weight-bold py-2'>{category?.name}</h2>
            </div>
            <div className='col-md-8 col-12'>
              <ListProduct
                products={category?.products ?? []}
                category={category}
              />
            </div>
            <div className='col-md-4 col-12'>
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

  let category = []
  if (slug) {
    const query = `filter: { slug: "${slug}" }`
    category = await getCategoryBySlug(query)
  }

  return {
    category: category[0],
  }
}

export default Product
