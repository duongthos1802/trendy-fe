import React, { useEffect } from 'react'
import classNames from 'classnames'
import Slider from "react-slick"
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProduct } from '../../actions/homeAction';
import { htmlContentWithBBCode } from '../../extensions/html';
import Link from 'next/link';
import { enumType } from '../../constants';
import { imageUtils } from '../../utils';


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

const PrevArrow = (props) => {
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

const CategoryProduct = () => {

  const dispatch = useDispatch()

  const categoryProduct = useSelector(state => state.homes && state.homes.categoryProduct ? state.homes.categoryProduct : [])

  const loadCategoryProduct = async () => {
    const cateProduct = await getCategoryProduct()
    dispatch.homes.getCategoryProduct(cateProduct)
  }

  useEffect(() => {
    loadCategoryProduct()
  }, [])

  return categoryProduct && categoryProduct.length && (
    <div className="background-color-gray ">
      <div className="container feature-category-product py-5">
        < Slider {...settings}>
          {
            categoryProduct.map(category => (
              <div>
                <Link href={`/san-pham/${category?.slug}`}>
                  <a>
                    <div className="kd-photobox kd-animated fadeInUp kd-animate">
                      <a className="full-pbox-link" href="https://mysterybean.vn/product-category/ca-phe-hoa-tan/?lang=vi" title="">
                        <div className="photobox-img">
                          {/* <img src="https://mysterybean.vn/wp-content/uploads/2020/10/Salted-Caramel.jpg" /> */}
                          <img src={imageUtils.getBlockUrl(category.image, enumType.imagePath.Category)} />
                        </div>
                        <div className="phb-content text-left ">
                          <h5 className="mb-3 text-color-primary-blue font-weight-bold">{category?.name}</h5>
                          <p className="font-size-14 line-height-20">{htmlContentWithBBCode(category?.description)}</p>
                        </div>
                      </a>
                    </div>
                  </a>
                </Link>
              </div>
            ))
          }

        </Slider >
      </div>
    </div>
  )
}

export default CategoryProduct