import React from 'react'

const Banner = ({ category }) => {

  const breadcrumb = [
    {
      name: "Nguyên liệu Trendy",
      path: "/",
    },
    {
      name: "Sản phẩm",
      path: "/san-pham"
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
                  <li className="breadcrumb-item active text-color-black font-weight-bold">{item?.name}</li>
                ))
              }
              {/* <li className="breadcrumb-item text-color-black font-weight-bold">Nguyên liệu Trendy</li>
              <li className="breadcrumb-item active text-color-black font-weight-bold">Sản phẩm</li> */}
            </ol>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Banner
