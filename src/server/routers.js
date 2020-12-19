exports.routers = {
  defined: {
    homepage: {
      path: "/",
      component: "/HomePage",
      text: "",
    },
    TrangChu: {
      path: "/trang-chu",
      component: "/HomePage",
      text: "",
    },
    productList: {
      path: "/san-pham",
      component: "/Product",
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
      path: "/cong-thuc/:slug",
      component: "/Recipe",
      text: "",
    },
    recipeDetail: {
      path: "/cong-thuc/chi-tiet/:slug",
      component: "/RecipeDetail",
      text: "",
    },
    blogLevelOne: {
      path: "/tin-tuc",
      component: "/Blog",
      text: "",
    },
    blog: {
      path: "/tin-tuc/:slug",
      component: "/Blog",
      text: "",
    },

    blogDetail: {
      path: "/tin-tuc/chi-tiet/:slug",
      component: "/BlogDetail",
      text: "",
    },

    introduce: {
      path: "/gioi-thieu",
      component: "/Introduce",
      text: "",
    },
  },
}
