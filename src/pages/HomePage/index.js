import React from 'react'
import Banner from '../../components/Banner'
import Layout from '../../components/layouts/Layout'
import FetureProduct from './FetureProduct'

const HomePage = () => {
  return (
   <Layout>
      <Banner />
      <FetureProduct /> 
   </Layout>
  )
}

export default HomePage