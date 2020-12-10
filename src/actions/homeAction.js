
import { apiService } from './api/axiosProvider'
import query from './queries'

const GRAPHQL_PATH = ''

export const getHtmlBlock = async () => {
  try {
    const queryData = query.homeQuery.htmlBlock()

    console.log('queryData....', queryData);

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.getBlockHomePage
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}