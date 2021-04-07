import { apiService } from "./api/axiosProvider"

import query from "./queries"

const GRAPHQL_PATH = ""

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

export const getCategoryBySlug = async (clause) => {
  try {
    const queryData = query.recipeQuery.loadCategoriesBySlug(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null,
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data ? result.data.data.categories : null
      return resultData
    }
  } catch (error) {
    console.log("error........", error)
  }
}

export const getRecipes = async (clause) => {
  try {
    const queryData = query.recipeQuery.getRecipes(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null,
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data ? result.data.data.recipes : null
      return resultData
    }
  } catch (error) {
    console.log("error........", error)
  }
}
