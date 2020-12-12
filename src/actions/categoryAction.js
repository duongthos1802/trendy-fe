import { apiService } from "./api/axiosProvider"

import query from "./queries"

const GRAPHQL_PATH = ""

export const loadDataPager = async (clause, path) => {
  try {
    const queryData = query.categoryQuery.loadDataPager(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null,
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data ? result.data.data.categories : null
      return resultData
    }
  } catch (error) {
    console.log("error.........", error)
  }
}
