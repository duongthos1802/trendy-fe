import React from 'react'
import classNames from 'classnames'
import Slider from "react-slick"

const settings = {
  className: "slide-feature-product",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const FetureProduct = () => {
  return (
    <div className="">
      <div className="container feture-product">
        < Slider {...settings}>
          <div className="background-color-white p-3">
            <div className="kd-photobox kd-animated fadeInUp  kd-animate">
              <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                <div className="photobox-img">
                  <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" />
                </div>
                <div className="phb-content text-left ">
                  <h5>Cà phê hoà tan</h5>
                  <p>Với tình yêu, niềm đam mê nhiệt huyết, chúng tôi nghiên cứu để tạo ra dòng sản phẩm cà phê hòa tan 100% nguyên chất mang đậm vị Cao Nguyên.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="background-color-white p-3">
            <div className="kd-photobox kd-animated fadeInUp  kd-animate">
              <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                <div className="photobox-img">
                  <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" />
                </div>
                <div className="phb-content text-left ">
                  <h5>Cà phê hoà tan</h5>
                  <p>Với tình yêu, niềm đam mê nhiệt huyết, chúng tôi nghiên cứu để tạo ra dòng sản phẩm cà phê hòa tan 100% nguyên chất mang đậm vị Cao Nguyên.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="background-color-white p-3">
            <div className="kd-photobox kd-animated fadeInUp  kd-animate">
              <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                <div className="photobox-img">
                  <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" />
                </div>
                <div className="phb-content text-left ">
                  <h5>Cà phê hoà tan</h5>
                  <p>Với tình yêu, niềm đam mê nhiệt huyết, chúng tôi nghiên cứu để tạo ra dòng sản phẩm cà phê hòa tan 100% nguyên chất mang đậm vị Cao Nguyên.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="background-color-white p-3">
            <div className="kd-photobox kd-animated fadeInUp  kd-animate">
              <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                <div className="photobox-img">
                  <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" />
                </div>
                <div className="phb-content text-left ">
                  <h5>Cà phê hoà tan</h5>
                  <p>Với tình yêu, niềm đam mê nhiệt huyết, chúng tôi nghiên cứu để tạo ra dòng sản phẩm cà phê hòa tan 100% nguyên chất mang đậm vị Cao Nguyên.</p>
                </div>
              </a>
            </div>
          </div>
        </Slider >
      </div>
    </div>
  )
}

export default FetureProduct