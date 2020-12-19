import { enumType } from "../constants"
import { routesMenu } from "../constants/enum"

const titleRoutes = {
  HOME: "Nguyên liệu Trendy",
  PRODUCT: "Sản phẩm",
  RECIPE: "Công thức",
}

const pathRoutes = {
  HOME: "/",
  PRODUCT: "/san-pham",
  RECIPE: "cong-thuc",
}

export const generateTitleBreadcrumb = (option) => {
  switch (option) {
    case enumType.categoryType.HOME:
      return titleRoutes.HOME
    case enumType.categoryType.PRODUCT:
      return titleRoutes.PRODUCT
    case enumType.categoryType.RECIPE:
      return titleRoutes.RECIPE
    default:
      return titleRoutes.HOME
  }
}

export const generatePath = (option) => {
  switch (option) {
    case enumType.categoryType.HOME:
      return pathRoutes.HOME
    case enumType.categoryType.PRODUCT:
      return pathRoutes.PRODUCT
    case enumType.categoryType.RECIPE:
      return pathRoutes.RECIPE
    default:
      return pathRoutes.HOME
  }
}

export const generateRoutes = (option) => {
  switch (option) {
    case enumType.categoryType.HOME:
      return routesMenu.HOME
    case enumType.categoryType.PRODUCT:
      return routesMenu.PRODUCT
    case enumType.categoryType.RECIPE:
      return routesMenu.RECIPE
    case enumType.categoryType.BLOG:
      return routesMenu.BLOG
    case enumType.categoryType.INSPIRED:
      return routesMenu.INSPIRED
    default:
      return ''
  }
}

export const getIdByUrl = (url) => {
  if (!url) return null
  const arrayStringUrl = url.split("-")
  const idUrl = arrayStringUrl.slice(
    arrayStringUrl.length - 1,
    arrayStringUrl.length
  )
  return idUrl
}
