exports.routers = {
  defined: {
    homepage: {
      path: "/",
      component: "/trang-chu",
      text: "",
    },
    TrangChu: {
      path: "/trang-chu",
      component: "/trang-chu",
      text: "",
    },
    productList: {
      path: "/san-pham",
      component: "/san-pham",
      text: "",
    },
    product: {
      path: "/san-pham/:slug",
      component: "/san-pham",
      text: "",
    },
    productDetail: {
      path: "/san-pham/chi-tiet/:slug",
      component: "/ProductDetail",
      text: "",
    },
    recipeList: {
      path: "/cong-thuc",
      component: "/cong-thuc",
      text: "",
    },
    recipe: {
      path: "/cong-thuc/:slug",
      component: "/cong-thuc",
      text: "",
    },
    recipeDetail: {
      path: "/cong-thuc/chi-tiet/:slug",
      component: "/RecipeDetail",
      text: "",
    },
    blogLevelOne: {
      path: "/tin-tuc",
      component: "/tin-tuc",
      text: "",
    },
    blog: {
      path: "/tin-tuc/:slug",
      component: "/tin-tuc",
      text: "",
    },
    blogDetail: {
      path: "/tin-tuc/chi-tiet/:slug",
      component: "/BlogDetail",
      text: "",
    },
    InspiredList: {
      path: "/cam-hung-sang-tao",
      component: "/cam-hung-sang-tao",
      text: "",
    },
    blog: {
      path: "/cam-hung/:slug",
      component: "/cam-hung-sang-tao",
      text: "",
    },
    InspiredDetail: {
      path: "/cam-hung/chi-tiet/:slug",
      component: "/InspiredDetail",
      text: "",
    },
    introduce: {
      path: "/gioi-thieu",
      component: "/gioi-thieu",
      text: "",
    },
    contactUs: {
      path: "/lien-he",
      component: "/lien-he",
      text: "",
    },
  },
}
