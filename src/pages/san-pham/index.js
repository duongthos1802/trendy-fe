import React, { useEffect } from "react"
import Router, { withRouter } from "next/router"
import ReactPaginate from "react-paginate"
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

  const categoriesData = useSelector((state) =>
    state.categories && state.categories.menuRight
      ? state.categories.menuRight
      : []
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

  // const [isLoading, setLoading] = useState(false)
  // //State for the loading indicator
  // const startLoading = () => setLoading(true)
  // const stopLoading = () => setLoading(false)

  // useEffect(() => {
  //   //After the component is mounted set router event handlers
  //   Router.events.on("routeChangeStart", startLoading)
  //   Router.events.on("routeChangeComplete", stopLoading)

  //   return () => {
  //     Router.events.off("routeChangeStart", startLoading)
  //     Router.events.off("routeChangeComplete", stopLoading)
  //   }
  // }, [])

  const paginationHandler = (page) => {
    console.log(props.router)
    const currentPath = props.router.pathname
    const currentQuery = {}
    currentQuery.pageIndex = page.selected + 1
    currentQuery.pageSize = DEFAULT_PAGE_SIZE
    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }

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
              <ListProduct
                products={props.category?.products ?? []}
                category={props.category}
              />

              <ReactPaginate
                breakLabel={"..."}
                breakClassName={"break-me"}
                initialPage={props.currentPage - 1}
                pageCount={Math.ceil(props.pageCount / DEFAULT_PAGE_SIZE)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={paginationHandler}
                hrefBuilder={() => props.router.pathname}
                // style
                containerClassName={
                  "pagination pagination_style1 justify-content-center"
                }
                // subContainerClassName={'pages pagination'}
                activeClassName={"page-item active"}
                // style page
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                // style next
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                // style previous
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                // lable next & previous
                previousLabel={<i className='linearicons-chevron-left'></i>}
                nextLabel={<i className='linearicons-chevron-right'></i>}
              />
            </div>
            <div className='col-md-3 col-12'>
              <MenuRight menu={categoriesData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Product.getInitialProps = async ({ query }) => {
  const { slug } = query
  const skip = (query.pageIndex - 1) * query.pageSize || 0
  const limit = query.pageSize || DEFAULT_PAGE_SIZE
  let category = []
  let pageCount = 0
  if (slug) {
    const query = `filter: { slug: "${slug}" }, skip: ${skip}, limit: ${limit}`
    console.log("query.......", query)
    category = await getCategoryBySlug(query)
  } else {
    const query = `where: { skip: ${skip}, limit: ${limit} }`
    const { products, total } = await getProducts(query)
    pageCount = total
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
    currentPage: 1,
    pageCount: pageCount,
  }
}

export default withRouter(Product)
