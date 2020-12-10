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
  }
}