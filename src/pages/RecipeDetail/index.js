import React from "react"
import ImageGallery from "react-image-gallery"
import { getRecipeDetail } from "../../actions/recipeAction"
import Banner from "../../components/Banner"
import GenerateSeo from "../../components/GenerateSeo"
import Layout from "../../components/layouts/Layout"
import RelateItem from "../../components/RelateItem"
import { DEFAULT_HTTP_SITE, enumType } from "../../constants"
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
      showPlayButton={false}
      showFullscreenButton={false}
      sizes={"width:400px;height:400px"}
    />
  )
}

const RecipeDetail = ({ recipe }) => {
  return (
    <Layout>
      <GenerateSeo
        title={recipe?.name}
        description='Các công thức chuẩn và mới nhất'
        url={`${DEFAULT_HTTP_SITE}/cong-thuc`}
      />
      {/* <Banner /> */}
      <div className='container'>
        <div className='row recipe'>
          <div className='recipe-media col-md-12 col-xl-5'>
            {renderImageGallery(recipe?.pictures)}
          </div>
          <div className='recipe-info-main col-md-12 col-xl-7'>
            <div className='recipe-info-main-content'>
              <h1 className='page-title'>{recipe?.name}</h1>
              <div className='recipe_content_information'>
                {recipe?.ingredient ? (
                  <div>
                    <h3>Thành phần</h3>
                    <div className='recipe_content'>
                      {recipe.ingredient
                        ? htmlContentWithBBCode(recipe.ingredient)
                        : null}
                    </div>
                  </div>
                ) : null}
                {recipe?.method ? (
                  <div>
                    <h3>Cách làm</h3>
                    <div className='recipe_content'>
                      {recipe.ingredient
                        ? htmlContentWithBBCode(recipe.method)
                        : null}
                    </div>
                  </div>
                ) : null}
                {recipe?.decorate ? (
                  <div>
                    <h3>Trang trí</h3>
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
          {
            recipe && recipe.products && recipe.products.length 
            ?  <div className='col-12'>
                <h4 className='font-weight-bold custom-border-bottom d-inline'>
                  Sản phẩm liên quan
                </h4>
                <RelateItem
                  products={recipe.products.slice(0, 4)}
                  category={recipe.category[0]}
                />
              </div>
            : null
          }
        </div>
      </div>
    </Layout>
  )
}

RecipeDetail.getInitialProps = async (context) => {
  const { slug } = context.query
  const id = getIdByUrl(slug)
  const clause = `_id: "${id}"`

  const recipeDetail = await getRecipeDetail(clause)

  return { recipe: recipeDetail }
}

export default RecipeDetail
