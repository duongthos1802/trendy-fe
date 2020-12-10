// import { enumType } from "../constants"
// import routes from "../constants/routes"

// export const generateRoutes = (option) => {

//   switch (option) {
//     case enumType.categoryType.HOME:
//       return ''
//     case enumType.categoryType.PRODUCT:
//       return routes.PRODUCT
//     case enumType.categoryType.RECIPE:
//       return routes.RECIPE
//     case enumType.categoryType.VIDEO:
//       return routes.VIDEO
//     case enumType.categoryType.SERVICE:
//       return routes.SERVICES
//     case enumType.categoryType.BLOG:
//       return routes.BLOG
//     default:
//       return ''
//   }
// }

// export const getIdByUrl = (url) => {
//   if (!url) return null
//   const arrayStringUrl = url.split('-')
//   const idUrl = arrayStringUrl.slice(arrayStringUrl.length - 1, arrayStringUrl.length)
//   return idUrl
// }