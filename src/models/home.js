export const homes = {
  state: {
    bannerHome: [],
    htmlBlock: null
  },
  reducers: {
    getHtmlBlock(state, payload) {
      return {
        ...state,
        htmlBlock: payload
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