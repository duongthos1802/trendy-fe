import React, { useEffect } from "react"
import Layout from "../../components/layouts/Layout"
import Banner from "../../components/Banner"
import ListRecipe from "./ListRecipe"
import MenuRight from "../../components/MenuRight"
import { getCategoryBySlug, getRecipes } from "../../actions/recipeAction"
import { useDispatch, useSelector } from "react-redux"
import { loadDataPager } from "../../actions/categoryAction"
import Title from "../../components/Title"
import { enumType } from "../../constants"

const Recipe = ({ category }) => {

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
    const query = `filter: { option: Recipe, status: Published }`
    getMenuRight(query)
  }, [])

  return (
    <Layout>
      <Banner category={category} />
      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Title category={category} customClass="custom-title" />
              {/* <h2 className='font-weight-bold py-2 title-category'>{category?.name}</h2> */}
            </div>
            <div className='col-md-8 col-12'>
              <ListRecipe
                recipes={category?.recipes ?? []}
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
      recipes: recipes && recipes.length ? recipes : []
    })
  }

  return { category: category[0] }
}

export default Recipe
