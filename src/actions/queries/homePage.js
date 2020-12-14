export default {
  htmlBlock() {
    return `
    query {
      getBlockHomePage{
        block{
          _id
          title
          description
          image
        }
        blockSecond{
          _id
          title
          image
          description
          content
        }
      }
    }`
  },
  introduceBlock() {
    return `
    query {
      getIntroduceBlock {
        _id
        title
        description
        image
      }
    }`
  },

  categoryProduct() {
    return `
    query {
      categoryProduct {
        _id
        option
        slug
        name
        description
        image
      }
    }`
  },

  categoryFeatures() {
    return `
    query {
      categoryFeatures {
        _id
        name
        slug
        products{
          _id
          name
          slug
          pictures
        }
      }
    }
    `
  }

}