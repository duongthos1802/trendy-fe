export default {
  loadDataPager(clause) {
    return `
        query {
          blogs(${clause}) {
            _id
            name
            slug
            pictures
            description
          }
      }`
  },

  loadData(clause) {
    return `
        query {
          blog(${clause}) {
            _id
            name
            slug
            description
            pictures
            images
            content
            viewCount
            createdAt
          }
      }`
  },

  categoryBlogFeatures(clause) {
    return `
        query {
          categoriesBlogFeatures(${clause}) {
            blogFeatures {
              _id
              slug
              name
              pictures
              createdAt
            }
            categoryBlog{
              _id
              slug
              name
            }
          }
      }`
  },

  getListBlogBySlugId(clause) {
    return `
      query {
        searchBlogBySlugId(${clause}) {
          category {
            _id
            name
            banner
          }
          total
          blogs {
            _id
            name
            slug
            pictures
          }
        }
      }`
  },

  getBlogs(clause) {
    return `
      query {
        searchBlogByOption(${clause}) {
          category {
            _id
            name
            banner
          }
          total
          blogs {
            _id
            name
            slug
            pictures
          }
        }
      }`
  }

}