import { apiService } from './api/axiosProvider'

import query from './queries'

const GRAPHQL_PATH = ''


export const getInspired = async (clause) => {
  try {
    const queryData = query.inspiredQuery.getInspired(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.searchInspiredByOption
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}

export const getInspiredBySlug = async (clause) => {
  try {
    const queryData = query.inspiredQuery.getListInspiredBySlug(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.searchInspiredBySlug
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}
