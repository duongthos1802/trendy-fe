import React from 'react'
import { imageUtils } from '../utils'
import { enumType } from '../constants'

const BannerHome = ({ banner }) => {

  const handleClick = (e, url) => {
    e.preventDefault()
    if (url) {
      window.open(`${url}`, '_blank')
    }
  }

  return (
    <div className="banner_section staggered-animation-wrap">
      <div id="carouselExampleControls" className="carousel slide carousel-fade carousel_style1 light_arrow" data-ride="carousel">
        <div className="carousel-inner">
          {
            banner
              ? banner.map((item, i) => (
                <div
                  className={"carousel-item background_bg cursor-pointer " + (i === 0 ? " active" : "")}
                  style={{ backgroundImage: `url(${imageUtils.getBlockUrl(item.image, enumType.imagePath.Banner)})` }}
                  onClick={(e) => handleClick(e, item.url)}
                >
                  <div className="banner_slide_content">
                    <div className="container">
                      {/* STRART CONTAINER */}
                      <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-12 col-sm-12 text-center">
                          {/* <div className="banner_content text_white">
                        <h2 className="staggered-animation font_style1" data-animation="fadeInUp" data-animation-delay="0.2s">Delicious food</h2>
                        <p className="staggered-animation" data-animation="fadeInUp" data-animation-delay="0.4s">If you are going to use a passage of Lorem middle of text.</p>
                        <a className="btn btn-default btn-radius staggered-animation" href="#" data-animation="fadeInUp" data-animation-delay="0.6s">Get Started</a>
                        <a className="btn btn-white btn-radius staggered-animation" href="#" data-animation="fadeInUp" data-animation-delay="0.6s">Learn More</a>
                      </div> */}
                        </div>
                      </div>
                    </div>{/* END CONTAINER*/}
                  </div>
                </div>
              ))
              : null

          }

        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><i className="ion-chevron-left" /></a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><i className="ion-chevron-right" /></a>
      </div>
    </div >
  )
}

export default BannerHome 
