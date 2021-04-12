import React from 'react'
import { imageUtils } from '../utils'
import { enumType } from '../constants'
import className from 'classnames'

const BannerHome = ({ banner }) => {

  const handleClick = (e, url) => {
    e.preventDefault()
    if (url) {
      window.open(`${url}`, '_blank')
    }
  }
  // .cursor-pointer 
  return banner && (
    <div className="banner_section-mobile staggered-animation-wrap banner-fixed">
      <div id="carouselExampleControls" className="carousel slide carousel-fade carousel_style2 light_arrow" data-ride="carousel">
        <div className="carousel-inner">
          {banner.banner.map((item, i) =>
            <div
              className={className({
                'carousel-item background_bg image-banner cursor-pointer': true,
                'active': i === 0,
                // 'cursor-pointer': item?.url
              })}
              onClick={(e) => handleClick(e, item.url)}>
              <img src={`${imageUtils.getBannerUrl(item.image, enumType.imagePath.Banner)}`} />
            </div>
          )}
        </div>
        <a className="carousel-control-prev border-radius-100" href="#carouselExampleControls" role="button" data-slide="prev"><i className="ion-chevron-left" /></a>
        <a className="carousel-control-next border-radius-100" href="#carouselExampleControls" role="button" data-slide="next"><i className="ion-chevron-right" /></a>
      </div >
    </div >
  )
}

export default BannerHome