import React from "react"

const Header = ({ children, isMobile }) => {
  return (
    <React.Fragment>
      <div className='header-top-container'>
        <div className='row align-items-center header-top'>
          <div className='col-md-6 '>
            <div className='header-top-left'>
              <span className='header-top__icon'>
                <i className='fab fa-facebook-f'></i>
              </span>
              <span className='header-top__icon'>
                <i className='fab fa-instagram'></i>
              </span>
            </div>
          </div>
          <div className='col-md-6 '>
            <ul className='contact_detail font-size-12 text-center text-lg-right float-right header-top-right'>
              <li className='text-color-black'>
                <i class='fas fa-phone-alt'></i>
                123-456-7890
              </li>
              <li className='text-color-black'>
                <i class='far fa-envelope'></i>
                duongth@vgroup.vn
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='menu-container sticky-top'>
        <div className='menu'>
          <a href='#' className='logo '>
            <img src='https://mysterybean.vn/wp-content/uploads/2020/10/Mytery-bean-Logo-Org.png' />
          </a>
          <ul className='clearfix mega-menu'>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Trang chủ
              </a>
            </li>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Giới thiệu<i className='fas fa-angle-down ml-1'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='#'>Today</a>
                </li>
                <li>
                  <a href='#'>Calendar</a>
                </li>
                <li>
                  <a href='#'>Sport</a>
                </li>
              </ul>
            </li>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Sản phẩm<i className='fas fa-angle-down ml-1'></i>
              </a>
              <ul className='sub-menu'>
                <li className='sub-menu-cate'>
                  <a href='#' className='sub-menu-cate__title'>
                    Coffee
                  </a>
                  <ul className='sub-menu-cate__link'>
                    <li>
                      <a href='#'>Cà phê rang xay</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê hoà tan</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê viên nén</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê túi lọc</a>
                    </li>
                  </ul>
                </li>
                <li className='sub-menu-gallery'>
                  <ul>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Công thức<i className='fas fa-angle-down ml-1'></i>
              </a>
              <ul className='sub-menu'>
                <li className='sub-menu-cate'>
                  <a href='#' className='sub-menu-cate__title'>
                    Coffee
                  </a>
                  <ul className='sub-menu-cate__link'>
                    <li>
                      <a href='#'>Cà phê rang xay</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê hoà tan</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê viên nén</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê túi lọc</a>
                    </li>
                  </ul>
                </li>
                <li className='sub-menu-gallery'>
                  <ul>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Tin tức<i className='fas fa-angle-down ml-1'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='#'>Today</a>
                </li>
                <li>
                  <a href='#'>Calendar</a>
                </li>
                <li>
                  <a href='#'>Sport</a>
                </li>
              </ul>
            </li>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Cảm hứng<i className='fas fa-angle-down ml-1'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='#'>Today</a>
                </li>
                <li>
                  <a href='#'>Calendar</a>
                </li>
                <li>
                  <a href='#'>Sport</a>
                </li>
              </ul>
            </li>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Liên hệ<i className='fas fa-angle-down ml-1'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='#'>Today</a>
                </li>
                <li>
                  <a href='#'>Calendar</a>
                </li>
                <li>
                  <a href='#'>Sport</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
