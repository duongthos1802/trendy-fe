export default {
  getCategoryBySlug(clause) {
    return `
      query {
        categories(${clause}) {
          _id
          name
          slug
          option
          parentId {
            _id
          }
          products(filter: {status: Published}){
            _id
            name
            slug
            pictures 
          }
        }
      }`
  },

  getProductById(clause) {
    return `
      query {
        product(${clause}) {
          _id
          name
          slug
          description
          pictures
          packing
          preservation
          recipeSuggestion
          application
          recipes {
            _id
            name
            pictures
          }
          category {
            name
          }
          productSuggestion{
            _id
            pictures
            name
          }
        }
      }`
  },
  getProducts(clause) {
    return `
      query {
        products(${clause}){
            _id
            name
            slug
            pictures
            category {
              name
            }
        }
      }`
  },
}
