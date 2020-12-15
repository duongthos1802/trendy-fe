import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
// Actions
import { loadData, categoryBlogFeatures } from '../../actions/blogAction'
// Extensions
import { getIdByUrl } from '../../extensions/routes'
import { htmlContentWithBBCode, truncateHtmlContent } from '../../extensions/html'
import dateTime from '../../extensions/dateTime'
// Utils
import { imageUtils } from '../../utils'
import { enumType } from '../../constants'
// Components
import Layout from '../../components/layouts/Layout'
// constant
import { routers } from '../../server/routers'

const BlogDetail = (props) => {

  const dispatch = useDispatch()

  const router = useRouter();

  const { asPath } = router

  const blog = useSelector(state => state.blogs && state.blogs.blog ? state.blogs.blog : null)

  const blogsFeatures = useSelector(state => state.blogs && state.blogs.blogsFeatures ? state.blogs.blogsFeatures : [])

  const categoryFeatures = useSelector(state => state.blogs && state.blogs.categoryBlogFeatures ? state.blogs.categoryBlogFeatures : [])

  const loadBlog = async (url) => {
    const _id = getIdByUrl(url)
    const clause = `_id: "${_id}"`

    // call list blog
    if (_id) {
      const blog = await loadData(clause)
      dispatch.blogs.getBlogById(blog ? blog : null)
    }
  }

  const loadCategories = async (blog) => {
    if (blog && blog._id) {
      const queryCategory = `where: {_id: "${blog._id}", slug: "${routers.defined.blog}" }`
      const blogFeaturesData = await categoryBlogFeatures(queryCategory)

      console.log(blogFeaturesData);

      if (blogFeaturesData) {
        dispatch.blogs.getBlogsFeatures(blogFeaturesData.blogFeatures ? blogFeaturesData.blogFeatures : [])
        dispatch.blogs.getCategoryBlogFeatures(blogFeaturesData.categoryBlog ? blogFeaturesData.categoryBlog : [])
      }
    }
  }

  useEffect(() => {
    loadCategories(blog)
  }, [blog])


  useEffect(() => {
    loadBlog(asPath)
  }, [asPath])

  return (
    <Layout
      isMobile={props.isMobile}
    >
      {/* <Breadcrumb breadcrumb={BreadcrumbData} /> */}
      <div className="section pt-4 banner-fixed">
        <div className="container-fluid container-fluid-custom">
          <div className="row">
            <div className="col-lg-8">
              {
                blog && <img src={imageUtils.getUrlImageProduct(blog.pictures[0], enumType.imagePath.Blog)} alt="blog_img" />
                  ? <div className="single_post">
                    <div className="blog_img blog_img-detail">
                      <img src={imageUtils.getUrlImageProduct(blog.pictures[0], enumType.imagePath.Blog)} alt="blog_img" />
                    </div>
                    <div className="blog_content">
                      <div className="blog_text">
                        <h2 className="blog_title text-color-primary-blue">{blog?.name ?? null}</h2>
                        <ul className="list_none blog_meta">
                          <li><a href="#"><i className="ti-calendar"></i>{dateTime.formatTimeStampToUtcTime(blog.createdAt)}</a></li>
                        </ul>
                        <div className="row">
                          <div className="col-md-12">
                            {
                              blog.content
                                ? htmlContentWithBBCode(blog.content)
                                : null
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  : <div>
                    <p>Không tồn tại bài viết</p>
                  </div>
              }

            </div>
            <div className="col-lg-4 mt-3 mt-lg-0">
              <div className="sidebar">
                <div className="widget">
                  <h5 className="widget_title text-color-primary-blue">Bài viết mới</h5>
                  <ul className="widget_recent_post">
                    {
                      blogsFeatures && blogsFeatures.length
                        ? blogsFeatures.map((item, index) => (
                          // <Link href={`/${routes.BLOG_DETAIL}/${item.slug}-${item._id}`}>
                          <Link href={`/tin-tuc/chi-tiet/${item.slug}-${item._id}`}>
                            <li key={index}>
                              <div className="post_footer">
                                <div className="post_img post_img_feature">
                                  <img className="custom-img-blog" src={imageUtils.getUrlImageProduct(item.pictures[0], enumType.imagePath.Blog)} alt="letest_post1" />
                                </div>

                                <div className="post_content">
                                  <h6 classNameName="text-color-primary-blue"> {item && item.name ? truncateHtmlContent(item.name, 80) : null}</h6>
                                  <p className="small m-0 d-xs-none">{dateTime.formatTimeStampToUtcTime(blog.createdAt)}</p>
                                </div>
                              </div>
                            </li>
                          </Link>
                        ))
                        : null
                    }
                  </ul>
                </div>
                <div className="widget">
                  <h5 className="widget_title text-color-primary-blue">Blogs</h5>
                  <ul className="widget_categories">
                    {
                      categoryFeatures && categoryFeatures.length
                        ? categoryFeatures.map((item, index) => <Link href={`/chi-tiet/123`}><li><a className="text-color-primary-blue"><span className="categories_name">{item.name}</span></a></li></Link>)
                        : null
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default BlogDetail