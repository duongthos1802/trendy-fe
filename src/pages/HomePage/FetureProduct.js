import React from 'react'
import classNames from 'classnames'
import Slider from "react-slick"


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const  PrevArrow = (props) =>{
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}
      className={className}
      style={{ ...style, display: "block", background: "red" }}>
      <i className="fa fa-arrow-left text-color-primar" />
    </div>
  );
}

const settings = {
  className: "slide-feature-product",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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
    <div className="background-color-gray">
      <div className="container feture-product py-5">
        < Slider {...settings}>
          <div>
            <div className="kd-photobox kd-animated fadeInUp kd-animate">
              <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                <div className="photobox-img">
                  <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" />
                </div>
                <div className="phb-content text-left ">
                  <h5 className="mb-3">Cà phê hoà tan</h5>
                  <p className="font-size-14 line-height-20">Với tình yêu, niềm đam mê nhiệt huyết, chúng tôi nghiên cứu để tạo ra dòng sản phẩm cà phê hòa tan 100% nguyên chất mang đậm vị Cao Nguyên.</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="kd-photobox kd-animated fadeInUp  kd-animate">
              <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                <div className="photobox-img">
                  <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" />
                </div>
                <div className="phb-content text-left ">
                  <h5 className="mb-3">Cà phê hoà tan</h5>
                  <p className="font-size-14 line-height-20">Với tình yêu, niềm đam mê nhiệt huyết, chúng tôi nghiên cứu để tạo ra dòng sản phẩm cà phê hòa tan 100% nguyên chất mang đậm vị Cao Nguyên.</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="kd-photobox kd-animated fadeInUp  kd-animate">
              <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                <div className="photobox-img">
                  <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" />
                </div>
                <div className="phb-content text-left ">
                  <h5 className="mb-3">Cà phê hoà tan</h5>
                  <p className="font-size-14 line-height-20">Với tình yêu, niềm đam mê nhiệt huyết, chúng tôi nghiên cứu để tạo ra dòng sản phẩm cà phê hòa tan 100% nguyên chất mang đậm vị Cao Nguyên.</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="kd-photobox kd-animated fadeInUp  kd-animate">
              <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                <div className="photobox-img">
                  <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" />
                </div>
                <div className="phb-content text-left ">
                  <h5 className="mb-3">Cà phê hoà tan</h5>
                  <p className="font-size-14 line-height-20">Với tình yêu, niềm đam mê nhiệt huyết, chúng tôi nghiên cứu để tạo ra dòng sản phẩm cà phê hòa tan 100% nguyên chất mang đậm vị Cao Nguyên.</p>
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