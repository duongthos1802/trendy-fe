exports.routers = {
  defined: {
    homepage: {
      path: "/",
      component: "/HomePage",
      text: "",
    },
    product: {
      path: "/san-pham/:slug",
      component: "/Product",
      text: "",
    },
    productDetail: {
      path: "/product-detail",
      component: "/ProductDetail",
      text: "",
    },
    recipe: {
      path: "/recipe",
      component: "/Recipe",
      text: "",
    },
    recipeDetail: {
      path: "/cong-thuc/chi-tiet/:slug",
      component: "/RecipeDetail",
      text: "",
    },
  },
}
