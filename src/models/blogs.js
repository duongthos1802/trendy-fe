export const blogs = {
  state: {
    blog: null,
    blogsFeatures: [],
    categoryBlogFeatures: []
  },
  reducers: {
    getBlogById(state, payload) {
      return {
        ...state,
        blog: payload ? payload : null
      }
    },

    getBlogsFeatures(state, payload) {
      return {
        ...state,
        blogsFeatures: payload ? payload : []
      }
    },

    getCategoryBlogFeatures(state, payload) {
      return {
        ...state,
        categoryBlogFeatures: payload ? payload : []
      }
    }
  },
  effects: dispatch => ({
  }),
}