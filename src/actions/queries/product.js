export default {
  getCategoryBySlug(clause) {
    return `
      query {
        categories(${clause}) {
          _id
          name
          slug
          option
          products(filter: {status: Published}){
            _id
            name
            slug
            pictures 
          }
        }
      }`
  }
}