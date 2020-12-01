
import React from 'react'

const Header = ({ children, isMobile }) => {
  return (
    <header className="header_wrap fixed-top light_skin sticky_dark_skin transparent_header dd_dark_skin background-color-white">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand">
            <img className="logo_light" width="200" src="https://mysterybean.vn/wp-content/uploads/2020/10/Mytery-bean-Logo-Org.png" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false">
            <span className="ion-android-menu" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
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