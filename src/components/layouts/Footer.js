import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"

const schema = yup.object({
  name: yup.string().required("Họ tên không được để trống."),
  email: yup.string().required("Email không được để trống."),
  phone: yup.string().required("Số điện thoai không được để trống."),
  address: yup.string().required("Địa chỉ không được để trống."),
  description: yup.string().required("Nội dung yêu cầu không được để trống."),
})

const Footer = ({ children, isMobile }) => {
  return (
    <footer className='background-color-primary-blue background_bg'>
      <div className='footer_top'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-md-8 col-sm-12'>
              <div className='widget'>
                <div className='footer_logo'>
                  <a className='logo '>
                    <img
                      src={`/static/assets/images/logos/logo-trendy-01.png`}
                      alt='logo'
                    />
                  </a>
                </div>
                <p className='font-size-18 text-color-white'>
                  Nguyên liệu chuyên dùng cho pha chế
                </p>
              </div>
              <div className='widget'>
                <ul className='social_icons social_white social_style1 rounded_social'>
                  <li>
                    <a
                      href='https://www.facebook.com/nguyenlieutrendy'
                      target='_blank'
                    >
                      <i class='fab fa-facebook-f' className='font-size-16'></i>
                    </a>
                  </li>
                  {/* <li><a href="#"><i className="ion-social-twitter" /></a></li> */}
                  {/* <li><a href="#"><i className="ion-social-googleplus" /></a></li> */}
                  <li>
                    <a href='#' target='_blank'>
                      <i class='fas fa-phone-alt' className='font-size-16'></i>
                    </a>
                  </li>
                  {/* <li><a href="#"><i className="ion-social-instagram-outline" /></a></li> */}
                </ul>
              </div>
            </div>
            <div className='col-xl-6 col-md-8 col-sm-12'>
              <Formik
                validationSchema={schema}
                // onSubmit={handleSubmit}
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  description: "",
                }}
              >
                {({ handleSubmit, values, touched, errors, isInvalid }) => (
                  <div className='field_form'>
                    <Form>
                      <div className='row'>
                        <div className='mb-3 col-md-6'>
                          <Field
                            name='name'
                            type='text'
                            placeholder='Họ tên'
                            className={
                              "form-control" +
                              (errors.name && touched.name ? " is-invalid" : "")
                            }
                          />
                          <ErrorMessage
                            name='name'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>
                        <div className='mb-3 col-md-6'>
                          <Field
                            name='phone'
                            type='text'
                            placeholder='Số điện thoại'
                            className={
                              "form-control" +
                              (errors.phone && touched.phone
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name='phone'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>

                        <div className='mb-3 col-md-12'>
                          <Field
                            name='email'
                            type='text'
                            placeholder='Email'
                            className={
                              "form-control" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name='email'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>

                        <div className='mb-3 col-md-12'>
                          <Field
                            name='address'
                            type='text'
                            placeholder='Địa chỉ'
                            className={
                              "form-control" +
                              (errors.address && touched.address
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name='address'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>
                        <div className='mb-3 col-md-12'>
                          <Field
                            name='description'
                            type='text'
                            component='textarea'
                            placeholder='Hãy để lại nội dung yêu cầu của bạn'
                            className={
                              "form-control" +
                              (errors.description && touched.description
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name='description'
                            component='div'
                            className='invalid-feedback'
                          />
                        </div>
                        <div className='col-md-12 text-center'>
                          <button
                            type='submit'
                            className='btn btn-default'
                            // onClick={() => {
                            //   window.location.reload(true)
                            // }}
                          >
                            Gửi yêu cầu
                          </button>
                        </div>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
            {/* <div className='col-xl-4 col-md-7 col-sm-7'>
              <div className='widget'>
                <h6 className='widget_title text-color-white font-size-26'>
                  Thông tin liên hệ
                </h6>
                <ul className='contact_info contact_info_light'>
                  <li>
                    <i className='ti-location-pin' />
                    <div>
                      <p className='mb-0 font-size-16 text-color-white'>
                        Tầng 5, Hồng Hà Tower
                      </p>
                      <p className='font-size-16 text-color-white'>
                        89 Thịnh Liệt, Hoàng Mai, Hà Nội
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className='ti-email' />
                    <a href='/cdn-cgi/l/email-protection#deb7b0b8b19eadb7aabbb0bfb3bbf0bdb1b3'>
                      <span
                        className='__cf_email__ font-size-16 text-color-white'
                        data-cfemail='640d0a020b24170d10010a0509014a070b09'
                      >
                        Chuquancafe2018@gmail.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <i className='ti-mobile'></i>
                    <div>
                      <p className='mb-0 font-size-16 text-color-white'>
                        (H) 0848.034.456 - 0842.454.454
                      </p>
                      <p className='font-size-16 text-color-white'>
                        (F) 1800.6308
                      </p>
                    </div>
                  </li>
                  <li>
                  <i className="ti-time"></i>
                  <p>Mon - Sat <strong>8:00AM - 9:30PM</strong> Sunday - <strong>8:00AM - 9:30PM</strong></p>
                </li>
                </ul>
              </div>
            </div> */}
            {/* <div className='col-xl-4 col-md-5 col-sm-12'>
              <div className='widget'>
                <h6 className='widget_title text-color-white font-size-26'>
                  Fanpage
                </h6>
                <div className='w-100'>
                  <iframe
                    className='w-100'
                    src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FChuQuanCafeVietNam&tabs=timeline&width=400&height=210&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=628363134657340'
                    height='200'
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling='no'
                    frameborder='0'
                    allowTransparency='true'
                    allow='encrypted-media'
                  ></iframe>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='bottom_footer border-top-tran'>
              <div className='row'>
                <div className='col-md-12'>
                  <p className='mb-0 text-center text-color-white'>
                    © 2020 nguyenlieutrendy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
