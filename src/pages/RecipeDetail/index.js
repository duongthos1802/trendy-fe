import React from "react"
import ImageGallery from "react-image-gallery"
import { getRecipeDetail } from "../../actions/recipeAction"
import Banner from "../../components/Banner"
import Layout from "../../components/layouts/Layout"
import { enumType } from "../../constants"
import { htmlContentWithBBCode } from "../../extensions/html"
import { getIdByUrl } from "../../extensions/routes"
import { imageUtils } from "../../utils"

const renderImageGallery = (pictures) => {
  let imagesData = []
  if (pictures && pictures.length) {
    imagesData = pictures.map((item, index) => {
      const img = imageUtils.getUrlImageProduct(item, enumType.imagePath.Recipe)
      return { original: img, thumbnail: img }
    })
  }
  return (
    <ImageGallery
      items={imagesData}
      showThumbnails={true}
      sizes={"width:400px;height:400px"}
    />
  )
}

const RecipeDetail = ({ recipe }) => {
  return (
    <Layout>
      <Banner />
      <div className='container'>
        <div className='row recipe'>
          <div className='recipe-media col-md-12 col-xl-5'>
            {renderImageGallery(recipe?.pictures)}
          </div>
          <div className='recipe-info-main col-md-12 col-xl-7'>
            <div className='recipe-info-main-content'>
              <h1 className='page-title'>{recipe.name}</h1>
              <div className='recipe_content_information'>
                {recipe?.ingredient ? (
                  <div>
                    <h3>Ingredients</h3>
                    <div className='recipe_content'>
                      {recipe.ingredient
                        ? htmlContentWithBBCode(recipe.ingredient)
                        : null}
                    </div>
                  </div>
                ) : null}
                {recipe?.method ? (
                  <div>
                    <h3>Method</h3>
                    <div className='recipe_content'>
                      {recipe.ingredient
                        ? htmlContentWithBBCode(recipe.method)
                        : null}
                    </div>
                  </div>
                ) : null}
                {recipe?.decorate ? (
                  <div>
                    <h3>Decorate</h3>
                    <div className='recipe_content'>
                      {recipe.decorate
                        ? htmlContentWithBBCode(recipe.decorate)
                        : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

RecipeDetail.getInitialProps = async (context) => {
  const { slug } = context.query
  console.log("slug........", slug)
  const id = getIdByUrl(slug)
  const clause = `_id: "${id}"`

  const recipeDetail = await getRecipeDetail(clause)

  return { recipe: recipeDetail }
}

export default RecipeDetail
