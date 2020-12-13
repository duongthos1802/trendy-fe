import React from 'react'
import Layout from '../../components/layouts/Layout'
import Banner from '../../components/Banner'
import ListRecipe from './ListRecipe'
import MenuRight from '../../components/MenuRight'

const Recipe = () => {
  return (
    <Layout>
      <Banner />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-bold py-2">Công thức</h2>
            </div>
            <div className="col-md-8 col-12">
              <ListRecipe />
            </div>
            <div className="col-md-4 col-12">
              <MenuRight />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Recipe