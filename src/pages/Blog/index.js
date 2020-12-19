import React, { useState, useEffect } from 'react'
import Router, { withRouter } from 'next/router'
import Link from 'next/link'
// actions
import { getBlogBySlugId, getBlogs } from '../../actions/blogAction'
// components
import Layout from '../../components/layouts/Layout'
import Loader from '../../components/Loader'
// coonstants
import { DEFAULT_PAGE_SIZE, enumType } from '../../constants'
import { routers } from '../../server/routers'
// extensions
import { imageUtils } from '../../utils'
import { truncateHtmlContent } from '../../extensions/html'

const Blog = (props) => {
  const { blogs, category } = props.props
  const [isLoading, setLoading] = useState(false)
  //State for the loading indicator
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)


  useEffect(() => {
    //After the component is mounted set router event handlers
    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
    }
  }, [])

  return (
    <Layout>
      <div className="section pt-4">
        <div className="container-fluid container-fluid-custom">
          <div className="row">
            {
              isLoading
                ? <Loader />
                : blogs.map(
                  (blog, index) => (
                    <Link href={`/tin-tuc/chi-tiet/${blog.slug}-${blog._id}`}>
                      <div className="col-lg-4 col-md-6 pb-4" key={index}>
                        <div className="blog_post blog_style1 box_shadow1">
                          <div className="blog_img">
                            <a>
                              <img src={imageUtils.getUrlImageProduct(blog.pictures[0], enumType.imagePath.Blog)} alt="blog_img" />
                            </a>
                          </div>
                          <div className="blog_content">
                            <div className="blog_text">
                              <h5 className="blog_title text-center font-size-18 text-color-primary-blue"><a >{blog && blog.name ? truncateHtmlContent(blog.name, 75) : null}</a></h5>
                              <p className="text-center font-size-14 line-height-15 ">{blog && blog.description ? truncateHtmlContent(blog.description, 100) : null}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                )
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

Blog.getInitialProps = async ({ query }) => {

  let blogs = null
  const skip = (query.pageIndex - 1) * query.pageSize
  const limit = query.pageSize || DEFAULT_PAGE_SIZE

  const { slug } = query
  if (slug) {
    const clause = `where: { slug: "${slug}", skip: ${skip || 0} limit: ${limit}}`
    blogs = await getBlogBySlugId(clause)
  } else {
    const clause = `where: { slug: "tin-tuc" skip: ${skip || 0} limit: ${limit}}`
    blogs = await getBlogs(clause)
  }

  return {
    props: {
      category: blogs?.category,
      blogs: blogs?.blogs,
      currentPage: 1,
      pageCount: blogs?.total
    }
  }
}

export default withRouter(Blog)