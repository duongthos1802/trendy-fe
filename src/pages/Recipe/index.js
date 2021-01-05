import React, { useEffect, useState } from "react"
import Layout from "../../components/layouts/Layout"
import Pagination from "react-js-pagination"
import Banner from "../../components/Banner"
import ListRecipe from "./ListRecipe"
import MenuRight from "../../components/MenuRight"
import { getCategoryBySlug, getRecipes } from "../../actions/recipeAction"
import { useDispatch, useSelector } from "react-redux"
import { loadDataPager } from "../../actions/categoryAction"
import Title from "../../components/Title"
import { DEFAULT_HTTP_SITE, DEFAULT_PAGE_SIZE, enumType } from "../../constants"
import GenerateSeo from "../../components/GenerateSeo"

const Recipe = ({ category, slug }) => {
  const dispatch = useDispatch()
  const [recipes, setRecipes] = useState([])
  const [activePage, setActivePage] = useState(1)

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
  const totalItems = category?.recipes.length

  useEffect(() => {
    const query = `filter: { option: Recipe, status: Published }`
    getMenuRight(query)
  }, [])

  useEffect(() => {
    const recipes = category?.recipes.slice(
      (activePage - 1) * DEFAULT_PAGE_SIZE,
      activePage * DEFAULT_PAGE_SIZE
    )
    setRecipes(recipes)
  }, [activePage, slug])

  return (
    <Layout>
      <GenerateSeo
        title='Công thức - cách làm - trang trí'
        description='Các công thức chuẩn và mới nhất'
        url={`${DEFAULT_HTTP_SITE}/cong-thuc`}
      />
      <Banner category={category} />
      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-3'>
              <Title category={category} customClass='custom-title' />
              {/* <h2 className='font-weight-bold py-2 title-category'>{category?.name}</h2> */}
            </div>
            <div className='col-md-9 col-12'>
              <ListRecipe recipes={recipes ?? []} category={category} />
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
              <MenuRight menu={categoriesData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Recipe.getInitialProps = async (context) => {
  const { slug } = context.query

  let category = []
  if (slug) {
    const query = `filter: { slug: "${slug}" }`
    category = await getCategoryBySlug(query)
  } else {
    const query = `filter: { status: Published }`
    const recipes = await getRecipes(query)
    category.push({
      name: "Công thức",
      slug: "cong-thuc",
      option: enumType.categoryType.RECIPE,
      parentId: null,
      recipes: recipes && recipes.length ? recipes : [],
    })
  }

  return { category: category[0], slug: slug }
}

export default Recipe
