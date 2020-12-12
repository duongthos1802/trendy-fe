import React from 'react'
import Banner from '../../components/Banner'
import Layout from '../../components/layouts/Layout'
import CategoryProduct from './CategoryProduct'
import HtmlBlock from './HtmlBlog'
import ProductList from './ProductList'
import Information from './Information'
import Introduce from './Introduce'

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <CategoryProduct />
      <ProductList />
      <HtmlBlock />
      <Introduce />
      <Information />
    </Layout>
  )
}

export default HomePage