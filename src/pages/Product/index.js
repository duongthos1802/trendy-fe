import React, { useEffect } from "react"
import Layout from "../../components/layouts/Layout"
import Banner from "../../components/Banner"
import ListProduct from "./ListProduct"
import MenuRight from "../../components/MenuRight"
import { getCategoryBySlug } from "../../actions/productAction"
import { loadDataPager } from "../../actions/categoryAction"
import { useDispatch, useSelector } from "react-redux"

const Product = ({ category }) => {

  const dispatch = useDispatch()

  const categoriesData = useSelector((state) =>
    state.categories && state.categories.menuRight ? state.categories.menuRight : []
  )

  const getMenuRight = async (queryClause) => {
    const categories = await loadDataPager(queryClause)
    dispatch.categories.getMenuRight(
      categories && categories.length ? categories : []
    )
  }

  useEffect(() => {
    const query = `filter: { option: Product, status: Published }`
    getMenuRight(query)
  }, [])

  return (
    <Layout>
      <Banner category={category} />
      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p className='font-weight-bold py-2 title-category'>{category?.name}</p>
            </div>
            <div className='col-md-8 col-12'>
              <ListProduct
                products={category?.products ?? []}
                category={category}
              />
            </div>
            <div className='col-md-4 col-12'>
              <MenuRight
                menu={categoriesData}
              />
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
