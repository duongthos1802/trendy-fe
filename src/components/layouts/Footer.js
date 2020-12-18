
import React from 'react'

const Footer = ({ children, isMobile }) => {
  return (
    <footer className="background-color-primary-blue background_bg">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-8 col-sm-12">
              <div className="widget">
                <div className="footer_logo">
                  <a className="text-color-white" href="/">CÔNG TY CÀ PHÊ ĐÀO NGUYÊN</a>
                </div>
                <p className="font-size-22 text-color-white">Sản xuất, nhập khẩu, phân phối nguyên liệu ngành đồ uống</p>
              </div>
              <div className="widget">
                <ul className="social_icons social_white social_style1 rounded_social">
                  <li><a href="https://www.facebook.com/ChuQuanCafeVietNam" target="_blank"><i className="ion-social-facebook" /></a></li>
                  {/* <li><a href="#"><i className="ion-social-twitter" /></a></li> */}
                  {/* <li><a href="#"><i className="ion-social-googleplus" /></a></li> */}
                  <li><a href="https://www.youtube.com/channel/UCyFIUL7x0zSgm9pk3JZEaEQ/featured" target="_blank"><i className="ion-social-youtube-outline" /></a></li>
                  {/* <li><a href="#"><i className="ion-social-instagram-outline" /></a></li> */}
                </ul>
              </div>
            </div >
            <div className="col-xl-4 col-md-7 col-sm-7">
              <div className="widget">
                <h6 className="widget_title text-color-white font-size-26">Thông tin liên hệ</h6>
                <ul className="contact_info contact_info_light">
                  <li>
                    <i className="ti-location-pin" />
                    <div>
                      <p className="mb-0 font-size-16 text-color-white">Tầng 5, Hồng Hà Tower</p>
                      <p className="font-size-16 text-color-white">89 Thịnh Liệt, Hoàng Mai, Hà Nội</p>
                    </div>

                  </li>
                  <li>
                    <i className="ti-email" />
                    <a href="/cdn-cgi/l/email-protection#deb7b0b8b19eadb7aabbb0bfb3bbf0bdb1b3"><span className="__cf_email__ font-size-16 text-color-white" data-cfemail="640d0a020b24170d10010a0509014a070b09">Chuquancafe2018@gmail.com</span></a>
                  </li>
                  <li>
                    <i className="ti-mobile"></i>
                    <div>
                      <p className="mb-0 font-size-16 text-color-white">(H) 0848.034.456 - 0842.454.454</p>
                      <p className="font-size-16 text-color-white">(F) 1800.6308</p>
                    </div>

                  </li>
                  {/* <li>
                  <i className="ti-time"></i>
                  <p>Mon - Sat <strong>8:00AM - 9:30PM</strong> Sunday - <strong>8:00AM - 9:30PM</strong></p>
                </li> */}
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-5 col-sm-12">
              <div className="widget">
                <h6 className="widget_title text-color-white font-size-26">Fanpage</h6>
                <div className="w-100">
                  <iframe className="w-100" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FChuQuanCafeVietNam&tabs=timeline&width=400&height=210&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=628363134657340" height="200" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bottom_footer border-top-tran">
              <div className="row">
                <div className="col-md-12">
                  <p className="mb-0 text-center text-color-white">© 2020 nguyenlieutrendy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer 