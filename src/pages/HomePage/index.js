import React from "react"
import BannerHome from "../../components/BannerHome"
import Layout from "../../components/layouts/Layout"
import CategoryProduct from "./CategoryProduct"
import HtmlBlock from "./HtmlBlog"
import ProductList from "./ProductList"
import Information from "./Information"
import Introduce from "./Introduce"
import { getBannerHome } from "../../actions/homeAction"

const HomePage = ({ bannerHome }) => {
  return (
    <Layout>
      {bannerHome && bannerHome.banner && bannerHome.banner.length ? (
        <BannerHome banner={bannerHome.banner} />
      ) : null}
      <CategoryProduct />
      <ProductList />
      <HtmlBlock />
      <Introduce />
      {/* <Information /> */}
    </Layout>
  )
}

HomePage.getInitialProps = async (ctx) => {
  const query = `filter:{ published: true }`
  const banner = await getBannerHome(query)

  return {
    bannerHome: banner,
  }
}

export default HomePage
