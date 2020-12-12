import React from 'react'

const BannerHome = () => {
  return (
    <div className="banner_section staggered-animation-wrap">
      <div id="carouselExampleControls" className="carousel slide carousel-fade carousel_style1 light_arrow" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active background_bg" data-img-src="https://api.chuquancafe.com/uploads/banner_pictures/1604464499367-1.jpg">
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

        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><i className="ion-chevron-left" /></a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><i className="ion-chevron-right" /></a>
      </div>
    </div>
  )
}

export default BannerHome 
