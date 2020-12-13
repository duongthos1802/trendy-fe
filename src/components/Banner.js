import React from 'react'
import { generateTitleBreadcrumb, generatePath } from '../extensions/routes'
import { categoryType } from '../constants/enum'
import Link from 'next/link'
import className from 'classnames'

const Banner = ({ category }) => {

  const breadcrumb = [
    {
      name: generateTitleBreadcrumb(categoryType.HOME),
      path: generatePath(categoryType.HOME)
    },
    {
      name: generateTitleBreadcrumb(category?.option),
      path: generatePath(category?.option)
    },
    {
      name: `${category?.name}`,
      path: `${category?.slug}`,
      isActive: true,
    }
  ]

  return (
    // <div className="breadcrumb_section background_bg overlay_bg_50 page_title_light" data-img-src="/static/assets/images/about_bg.jpg">
    <div className="breadcrumb_section background_bg page_title_light" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="page-title">
              <h1 className="text-color-black">{category?.name}</h1>
            </div>
            <ol className="breadcrumb">
              {
                breadcrumb.map(item => (
                  <li
                    className={className(`breadcrumb-item font-weight-bold text-color-white active text-color-black`, {

                    })}
                  >
                    <Link href={item.path}>
                      {item?.name}
                    </Link>
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Banner
