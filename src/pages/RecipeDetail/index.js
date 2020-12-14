import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layouts/Layout"

const RecipeDetail = () => {
  return (
    <Layout>
      <Banner />
      <div className='container'>
        <div className='row recipe'>
          <div className='recipe-media col-md-12 col-xl-6'>
            <img src='https://www.monin.com/asia/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/8/8/881-bully_mary-hd.jpg' />
          </div>
          <div className='recipe-info-main col-md-12 col-xl-6'>
            <div className='recipe-info-main-content'>
              <h1 className='page-title'>3R (Regenerate, Recharge, Relieve)</h1>
              <div className='recipe_content_information'>
                <div>
                  <h3>Ingredients</h3>
                  <ul>
                    <li>15 ml Le Fruit Williams Pear</li>
                    <li>100 ml chamomile tea&nbsp;</li>
                    <li>100 ml watermelon juice</li>
                    <li>Cucumber slice</li>
                    <li>Mint leaves</li>
                  </ul>
                </div>
                <div>
                  <h3>Instructions </h3>
                  <ol>
                    <li>Combine all ingredients into blender</li>
                    <li>Blend well</li>
                    <li>Fill glass with ice</li>
                    <li>Top up the mix</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RecipeDetail
