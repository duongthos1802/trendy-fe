import React from 'react'
import BannerHome from '../../components/BannerHome'
import Layout from '../../components/layouts/Layout'
import CategoryProduct from './CategoryProduct'
import HtmlBlock from './HtmlBlog'
import ProductList from './ProductList'
import Information from './Information'
import Introduce from './Introduce'

const HomePage = () => {
  return (
    <Layout>
      <BannerHome />
      <CategoryProduct />
      <ProductList />
      <HtmlBlock />
      <Introduce />
      <Information />
    </Layout>
  )
}

export default HomePage