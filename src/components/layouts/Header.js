import React from "react"

const Header = ({ children, isMobile }) => {
  return (
    <div className='menu-container'>
      <div className='menu'>
        <a href='#' className='logo'>
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
              Giới thiệu<i class='fas fa-angle-down ml-1'></i>
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
              Sản phẩm<i class='fas fa-angle-down ml-1'></i>
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
              Công thức<i class='fas fa-angle-down ml-1'></i>
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
              Tin tức<i class='fas fa-angle-down ml-1'></i>
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
              Cảm hứng<i class='fas fa-angle-down ml-1'></i>
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
              Liên hệ
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
