export default {
  loadCategoriesBySlug(clause) {
    return `
      query {
        categories(${clause}) {
          _id
          name
          slug
          option
          recipes(filter: {status: Published}){
            _id
            name
            slug
            pictures 
          }
        }
      }`
  },

  loadData(clause) {
    return `
      query {
        recipe(${clause}) {
          _id
          name
          description
          slug
          ingredient
          pictures
          method
          decorate
          category {
            _id
            name
            banner
            slug
            parentId {
              _id
              name
              slug
            }
          }
      }
    }`
  },
  getRecipes(clause) {
    return `
      query {
        recipes(${clause}){
          _id
          name
          slug
          pictures
        }
      }`
  },
}
