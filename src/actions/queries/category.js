export default {
  loadDataPager(clause) {
    return `
      query {
        categories (${clause}) {
          _id
          name
          isMega
          isPriority
          option
          description
          slug
          index
          parentId{
            _id
          }
        }
      }`
  },
  loadData(clause) {
    return `
      query {
        category(${clause}) {
          _id
          name
          isMega
          isPriority
          description
          index
          parentId{
            _id
          }
        }
      }`
  },
  trendingItem(clause) {
    return `
      query {
        trendingItems{
          category {
          _id
          name
          index
          parentId {
            _id
            name
          }
          products(${clause}){
            _id
            name
            slug
            pictures
            description
          }
          option
          }
        }
      }`
  },

  categoryFeatures(clause) {
    return `
    query {
      categoryFeatures(${clause}) {
        id
        index
        name
        slug
        parentId {
          _id
          name
        }
        products{
          _id
          name
          pictures
          status
        }
      }
    }  
    `
  },
}
