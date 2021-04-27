import { apiService } from './api/axiosProvider'

import query from './queries'

const GRAPHQL_PATH = ''

export const loadDataPager = async (clause) => {

  try {
    const queryData = query.blogQuery.loadDataPager(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.blogs
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}

export const loadData = async (clause) => {

  try {
    const queryData = query.blogQuery.loadData(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.blog
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}

export const categoryBlogFeatures = async (clause) => {
  try {
    const queryData = query.blogQuery.categoryBlogFeatures(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.categoriesBlogFeatures
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}

export const getBlogBySlugId = async (clause) => {
  try {
    const queryData = query.blogQuery.getListBlogBySlugId(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.searchBlogBySlugId
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}


export const getBlogs = async (clause) => {
  try {
    const queryData = query.blogQuery.getBlogs(clause)

    const result = await apiService().post(GRAPHQL_PATH, {
      query: queryData,
      variables: null
    })

    if (result.status === 200 && !result.data.errors) {
      const resultData = result.data.data
        ? result.data.data.searchBlogByOption
        : null
      return resultData
    }

  } catch (error) {
    console.log('error........', error);
  }
}
