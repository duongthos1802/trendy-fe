export default {
  getInspired(clause) {
    return `
      query {
        searchInspiredByOption(${clause}) {
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
  getListInspiredBySlug(clause) {
    return `
      query {
        searchInspiredBySlug(${clause}) {
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


}