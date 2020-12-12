import React from 'react'

const Banner = () => {
  return (
    <div className="breadcrumb_section background_bg overlay_bg_50 page_title_light" data-img-src="/static/assets/images/about_bg.jpg">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="page-title">
              <h1>About Us</h1>
            </div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">About Us</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner
