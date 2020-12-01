
import React from 'react'

const Header = ({ children, isMobile }) => {
  return (
    <header className="header_wrap fixed-top light_skin sticky_dark_skin transparent_header dd_dark_skin background-color-white">
      <div className="top-header bg_dark light_skin d-none d-md-block background-color-white">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <ul className="social_icons text-center text-md-right social_white">
                  <li><a href="#"><i className="ion-social-facebook" /></a></li>
                  <li><a href="#"><i className="ion-social-youtube-outline" /></a></li>
                  <li><a href="#"><i className="ion-social-instagram-outline" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="contact_detail text-center text-lg-right ">
                <li className="text-color-black"><i className="ti-mobile text-color-black" />123-456-7890</li>
                <li className="text-color-black"><i className="ti-email text-color-black" />[email&nbsp;protected]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand">
            <img className="logo_light" width="200" src="https://mysterybean.vn/wp-content/uploads/2020/10/Mytery-bean-Logo-Org.png" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
            <span className="ion-android-menu" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="dropdown">
                <a data-toggle="dropdown" className="nav-link dropdown-toggle active">Home</a>
                <div className="dropdown-menu">
                  <ul>
                    <li><a className="dropdown-item nav-link nav_item active" href>Homepage 1</a></li>
                    <li><a className="dropdown-item nav-link nav_item" >Homepage 2</a>
                    </li>
                    <li><a className="dropdown-item nav-link nav_item">Homepage 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Menu</a>
                <div className="dropdown-menu">
                  <ul>
                    <li><a className="dropdown-item nav-link nav_item" href="menu.html">Menu Style 1</a>
                    </li>
                    <li><a className="dropdown-item nav-link nav_item" href="menu-2.html">Menu Style 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Chef</a>
                <div className="dropdown-menu">
                  <ul>
                    <li><a className="dropdown-item nav-link nav_item" href="chef.html">Chef</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="chef-detail.html">Chef Detail</a></li>
                  </ul>
                </div>
              </li>
              <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Blog</a>
                <div className="dropdown-menu">
                  <ul>
                    <li><a className="dropdown-item nav-link nav_item" href="blog.html">Blog</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="blog-detail.html">Blog Detail</a></li>
                  </ul>
                </div>
              </li>
              <li className="dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" href="#">Shop</a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul>
                    <li><a className="dropdown-item nav-link nav_item" href="shop-product-detail.html">Shop Product Detail</a></li>
                    <li><a className="dropdown-item nav-link nav_item" href="shop-cart.html">Shop Cart</a>
                    </li>
                    <li><a className="dropdown-item nav-link nav_item" href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 