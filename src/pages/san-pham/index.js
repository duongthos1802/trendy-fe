import React, { useEffect, useState } from "react"
import Router, { withRouter } from "next/router"
import Pagination from "react-js-pagination"
import Layout from "../../components/layouts/Layout"
import Banner from "../../components/Banner"
import ListProduct from "./ListProduct"
import MenuRight from "../../components/MenuRight"
import { getCategoryBySlug, getProducts } from "../../actions/productAction"
import { loadDataPager } from "../../actions/categoryAction"
import { useDispatch, useSelector } from "react-redux"
import Title from "../../components/Title"
import { DEFAULT_PAGE_SIZE, enumType } from "../../constants"

const Product = (props) => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [activePage, setActivePage] = useState(1)

  const categoriesData = useSelector((state) =>
    state.categories && state.categories.menuRight
      ? state.categories.menuRight
      : []
  )

  const totalItems = props.category?.products.length

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

  useEffect(() => {
    const products = props.category?.products.slice(
      (activePage - 1) * DEFAULT_PAGE_SIZE,
      activePage * DEFAULT_PAGE_SIZE
    )
    setProducts(products)
  }, [activePage, props.slug])

  return (
    <Layout>
      <Banner category={props.category} />
      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-3'>
              <Title category={props.category} customClass='custom-title' />
              {/* <p className='font-weight-bold py-2 title-category'>{category?.name}</p> */}
            </div>
            <div className='col-md-9 col-12'>
              <ListProduct products={products} category={props.category} />
              {totalItems > DEFAULT_PAGE_SIZE ? (
                <Pagination
                  hideFirstLastPages
                  activePage={activePage}
                  itemsCountPerPage={DEFAULT_PAGE_SIZE}
                  totalItemsCount={totalItems}
                  pageRangeDisplayed={5}
                  onChange={(page) => setActivePage(page)}
                  itemClass='page-item'
                  linkClass='page-link'
                  prevPageText={<i className='linearicons-chevron-left' />}
                  nextPageText={<i className='linearicons-chevron-right' />}
                  innerClass='pagination justify-content-center custom-pagination'
                />
              ) : null}
            </div>
            <div className='col-md-3 col-12'>
              <MenuRight menu={categoriesData} isGood={true} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Product.getInitialProps = async ({ query }) => {
  const { slug } = query
  let category = []
  if (slug) {
    const query = `filter: { slug: "${slug}" }`
    console.log("query.......", query)
    category = await getCategoryBySlug(query)
  } else {
    const query = `filter: { status: Published }`
    const products = await getProducts(query)
    console.log(products)

    category.push({
      name: "Sản phẩm",
      slug: "san-pham",
      option: enumType.categoryType.PRODUCT,
      parentId: null,
      products: products && products.length ? products : [],
    })
  }

  return {
    category: category[0],
    slug: slug,
  }
}

export default withRouter(Product)
