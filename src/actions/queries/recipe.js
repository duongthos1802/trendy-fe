export default {
  // loadDataPager(clause) {
  //   return `
  //     query {
  //       searchCategoriesBySlug(${clause}) {
  //         categories {
  //           _id
  //           name
  //           slug
  //           description
  //           banner
  //           parentId {
  //             _id
  //             name
  //           }
  //           recipes {
  //             _id
  //           }

  //         }
  //         category {
  //           _id
  //           name
  //           description
  //           banner
  //           parentId {
  //             _id
  //             name
  //           }
  //           recipes {
  //             _id
  //             slug
  //             name
  //             pictures
  //             description
  //           }
  //         }
  //         recipes {
  //           _id
  //           slug
  //           name
  //           pictures
  //           description
  //         }
  //         total
  //     }
  //   }`
  // },

  // searchCategoriesRecipeBySlugId(clause) {
  //   return `
  //     query {
  //       searchCategoriesRecipe(${clause}) {
  //         recipes {
  //           _id
  //           slug
  //           name
  //           pictures
  //           description
  //         }
  //         total
  //         categories {
  //           _id
  //           name
  //           slug
  //           parentId {
  //             _id
  //             name
  //           }
  //           recipes{
  //             _id
  //           }
  //         }
  //         category {
  //           _id
  //           name
  //           description
  //           banner
  //           slug
  //           parentId {
  //             _id
  //             name
  //             parentId{
  //               name
  //             }
  //           }
  //           recipes {
  //             _id
  //             slug
  //             name
  //             pictures
  //             description
  //           }
  //         }
  //     }
  //   }`
  // },

  // searchCategoriesRecipe(clause) {
  //   return `
  //     query {
  //       category(${clause}) {
  //       _id
  //       name
  //       banner
  //       parentId {
  //         _id
  //         name
  //       }
  //       description
  //       recipes {
  //         _id
  //         slug
  //         name
  //         pictures
  //         description
  //       }
  //     }
  //   }`
  // },
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
}
