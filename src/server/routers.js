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
      path: "/san-pham/chi-tiet/:slug",
      component: "/ProductDetail",
      text: "",
    },
    recipe: {
      path: "/recipe",
      component: "/Recipe",
      text: "",
    },
    recipeDetail: {
      path: "/recipe-detail",
      component: "/RecipeDetail",
      text: "",
    },
  },
}
