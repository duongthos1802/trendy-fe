import { apiService } from "./api/axiosProvider"

import query from "./queries"

const GRAPHQL_PATH = ""

export const getRecipe = async (clause) => {
  try {
    const queryData = query.recipeQuery.loadDataPager(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null,
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.searchCategoriesBySlug
        : null
      return resultData
    }
  } catch (error) {
    console.log("error........", error)
  }
}

export const searchCategoriesRecipe = async (clause) => {
  try {
    const queryData = query.recipeQuery.searchCategoriesRecipeBySlugId(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null,
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.searchCategoriesRecipe
        : null
      return resultData
    }
  } catch (error) {
    console.log("error........", error)
  }
}

export const getRecipeDetail = async (clause) => {
  try {
    const queryData = query.recipeQuery.loadData(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null,
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data ? result.data.data.recipe : null
      return resultData
    }
  } catch (error) {
    console.log("error........", error)
  }
}

export const getRecipeByCategoryId = async (clause) => {
  try {
    const queryData = query.recipeQuery.loadCategoriesById(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null,
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data ? result.data.data.category : null
      return resultData
    }
  } catch (error) {
    console.log("error........", error)
  }
}
