
import { apiService } from './api/axiosProvider'
import query from './queries'

const GRAPHQL_PATH = ''

export const getCategoryBySlug = async (clause) => {
  try {
    const queryData = query.productQuery.getCategoryBySlug(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.categories
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}

export const getProductById = async (clause) => {
  try {
    const queryData = query.productQuery.getProductById(clause)

    console.log('queryData......', queryData);



    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.product
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}
