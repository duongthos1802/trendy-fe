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
    recipeList: {
      path: "/cong-thuc",
      component: "/Recipe",
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
    InspiredList: {
      path: "/cam-hung",
      component: "/Inspired",
      text: "",
    },
    blog: {
      path: "/cam-hung/:slug",
      component: "/Inspired",
      text: "",
    },
    InspiredDetail: {
      path: "/cam-hung/chi-tiet/:slug",
      component: "/InspiredDetail",
      text: "",
    },
    introduce: {
      path: "/gioi-thieu",
      component: "/Introduce",
      text: "",
    },
    contactUs: {
      path: "/lien-he",
      component: "/ContactUs",
      text: "",
    },
  },
}
