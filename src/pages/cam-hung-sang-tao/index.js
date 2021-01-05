import React, { useState, useEffect } from "react"
import Router, { withRouter } from "next/router"
import Link from "next/link"
// actions
import { getInspired, getInspiredBySlug } from "../../actions/InspiredAction"
// components
import Layout from "../../components/layouts/Layout"
import Loader from "../../components/Loader"
// coonstants
import { DEFAULT_HTTP_SITE, DEFAULT_PAGE_SIZE, enumType } from "../../constants"
import { routers } from "../../server/routers"
// extensions
import { imageUtils } from "../../utils"
import {
  htmlContentWithBBCode,
  truncateHtmlContent,
} from "../../extensions/html"
import GenerateSeo from "../../components/GenerateSeo"

const Inspired = (props) => {
  const { inspired, category } = props.props
  const [isLoading, setLoading] = useState(false)
  //State for the loading indicator
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    //After the component is mounted set router event handlers
    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", stopLoading)

    return () => {
      Router.events.off("routeChangeStart", startLoading)
      Router.events.off("routeChangeComplete", stopLoading)
    }
  }, [])

  return (
    <Layout>
      <GenerateSeo
        title={`Cảm hứng sáng tạo mới nhất`}
        description={`Các Cảm hứng - sáng tạo - xu hướng mới nhất`}
        image={imageUtils.getBannerUrl(
          category?.banner,
          enumType.imagePath.Banner
        )}
        url={`${DEFAULT_HTTP_SITE}/cam-hung-sang-tao`}
      />
      <div className='section pt-4'>
        <div className='container-fluid container-fluid-custom'>
          <div className='row'>
            {isLoading ? (
              <Loader />
            ) : (
              inspired.map((inspired, index) => (
                <Link
                  href={`/cam-hung/chi-tiet/${inspired.slug}-${inspired._id}`}
                >
                  <div className='col-lg-4 col-md-6 pb-4' key={index}>
                    <div className='blog_post blog_style1 box_shadow1'>
                      <div className='blog_img'>
                        <a>
                          <img
                            src={imageUtils.getUrlImageProduct(
                              inspired.pictures[0],
                              enumType.imagePath.Blog
                            )}
                            alt='blog_img'
                          />
                        </a>
                      </div>
                      <div className='blog_content'>
                        <div className='blog_text'>
                          <h5 className='blog_title text-center font-size-18 text-color-primary-blue'>
                            <a>{inspired?.name}</a>
                          </h5>
                          <p className='blog_description text-center font-size-14 line-height-15 '>
                            {htmlContentWithBBCode(inspired?.description)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

Inspired.getInitialProps = async ({ query }) => {
  let inspired = null
  const skip = (query.pageIndex - 1) * query.pageSize
  const limit = query.pageSize || DEFAULT_PAGE_SIZE

  const { slug } = query
  if (slug) {
    const clause = `where: { slug: "${slug}", skip: ${
      skip || 0
    } limit: ${limit}}`
    inspired = await getInspiredBySlug(clause)
  } else {
    const clause = `where: { skip: ${skip || 0} limit: ${limit}}`
    inspired = await getInspired(clause)
  }

  return {
    props: {
      category: inspired?.category,
      inspired: inspired?.blogs,
      currentPage: 1,
      pageCount: inspired?.total,
    },
  }
}

export default withRouter(Inspired)
