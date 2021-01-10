import React, { useEffect } from "react"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layouts/Layout"
import MenuRight from "../../components/MenuRight"
import { getIdByUrl } from "../../extensions/routes"
import { getProductById } from "../../actions/productAction"
import { htmlContentWithBBCode } from "../../extensions/html"
import Information from "./Information"
import { DEFAULT_HTTP_SITE, enumType } from "../../constants"
import { imageUtils } from "../../utils"
import { useDispatch, useSelector } from "react-redux"
import { loadDataPager } from "../../actions/categoryAction"
import RelateItem from "../../components/RelateItem"
import GenerateSeo from "../../components/GenerateSeo"

const mapImage = (pictures) => {
  let imagesData = []

  if (pictures && pictures.length) {
    pictures.map((item, index) => {
      const img = imageUtils.getUrlImageProduct(
        item,
        enumType.imagePath.Product
      )
      return imagesData.push({
        original: img,
        thumbnail: img,
      })
    })
  }
  return imagesData
}

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch()

  const categoriesData = useSelector((state) =>
    state.categories && state.categories.menuRight
      ? state.categories.menuRight
      : []
  )

  const getMenuRight = async (queryClause) => {
    const categories = await loadDataPager(queryClause)
    dispatch.categories.getMenuRight(
      categories && categories.length ? categories : []
    )
  }

  useEffect(() => {
    const query = `filter: { option: Product, status: Published }`
    getMenuRight(query)
  }, [])

  const imageItem = mapImage(product.pictures)
  return (
    <Layout>
      <GenerateSeo
        title={product?.name}
        description='Các sản phẩm pha chế chất lượng và mới nhất'
        url={`${DEFAULT_HTTP_SITE}/san-pham`}
      />
      {product ? (
        <div className='section product-detail'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <div className='product-image'>
                  <ImageGallery
                    items={imageItem}
                    showPlayButton={false}
                    showFullscreenButton={false}
                  />
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='product-name'>
                  <h2 className='font-weight-bold'>{product?.name}</h2>
                </div>
                <div className='description mt-5'>
                  <p className='text-color-primary-blue line-height-15'>
                    {htmlContentWithBBCode(product?.description)}
                  </p>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <MenuRight menu={categoriesData} isGood={true} />
              </div>

              <div className='col-12 col-md-8 mb-4'>
                <Information product={product} />
              </div>


              {product.productSuggestion &&
                product.productSuggestion.length ? (
                  <div className='col-12'>
                    <h4 className='font-weight-bold custom-border-bottom d-inline'>
                      Sản phẩm liên quan
                  </h4>
                    <RelateItem
                      products={product.productSuggestion.slice(0, 4)}
                      category={product.category}
                    />
                  </div>
                ) : null}

            </div>
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

ProductDetail.getInitialProps = async (ctx) => {
  const { slug } = ctx.query

  const id = getIdByUrl(slug)

  let product = null
  if (id) {
    const query = ` _id: "${id}" `
    product = await getProductById(query)
  }

  return {
    product: product,
  }
}

export default ProductDetail
