export const homes = {
  state: {
    bannerHome: [],
    htmlBlock: null,
    introduceBlock: null,
    categoryProduct: [],
    categoryFeature: []
  },
  reducers: {
    getHtmlBlock(state, payload) {
      return {
        ...state,
        htmlBlock: payload
      }
    },
    getIntroduceBlock(state, payload) {
      return {
        ...state,
        introduceBlock: payload
      }
    },
    getCategoryProduct(state, payload) {
      return {
        ...state,
        categoryProduct: payload
      }
    },
    getCategoryFeature(state, payload) {
      return {
        ...state,
        categoryFeature: payload
      }
    }
  },


  effects: dispatch => ({
    // async loadDataPagerCallback(queryClause) {
    //   const data = await loadDataPager(queryClause)
    //   dispatch.categories.getCategories(data ? data : [])
    // },
  }),
}