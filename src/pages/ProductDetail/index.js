import React from 'react'
import ImageGallery from 'react-image-gallery'
import Layout from '../../components/layouts/Layout'
import MenuRight from '../../components/MenuRight'
import { getIdByUrl } from '../../extensions/routes'
import { getProductById } from '../../actions/productAction'
import { htmlContentWithBBCode } from '../../extensions/html'
import Information from './Information'
import { enumType } from '../../constants'
import { imageUtils } from '../../utils'

const mapImage = (pictures) => {
  let imagesData = []

  if (pictures && pictures.length) {
    pictures.map((item, index) => {
      const img = imageUtils.getUrlImageProduct(item, enumType.imagePath.Product)
      return imagesData.push({
        original: img,
        thumbnail: img
      })
    })
  }
  return imagesData
}


const ProductDetail = ({ product }) => {

  const imageItem = mapImage(product.pictures)
  return (
    <Layout>
      {
        product
          ? <div className="section product-detail">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="product-image" >
                    <ImageGallery items={imageItem} />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="product-name">
                    <h2 className="font-weight-bold">{product?.name}</h2>
                  </div>
                  <div className="description mt-5">
                    <p className="text-color-black line-height-15">
                      {htmlContentWithBBCode(product?.description)}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <MenuRight />
                </div>

                <div className="col-12 col-md-8">
                  <Information product={product} />
                </div>
              </div>
            </div>
          </div>
          : null
      }

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

  console.log("product..........", product);

  return {
    product: product
  }
}

export default ProductDetail