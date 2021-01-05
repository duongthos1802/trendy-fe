import React from "react"
import Layout from "../../components/layouts/Layout"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"
import GenerateSeo from "../../components/GenerateSeo"

const schema = yup.object({
  name: yup.string().required("Họ tên không được để trống."),
  email: yup.string().required("Email không được để trống."),
  phone: yup.string().required("Số điện thoai không được để trống."),
  address: yup.string().required("Địa chỉ không được để trống."),
  description: yup.string().required("Nội dung yêu cầu không được để trống."),
})

const ContactUs = (props) => {
  const handleSubmit = () => {
    console.log("hihi")
  }
  return (
    <Layout>
      <GenerateSeo />
      <div className='row container-wrap contact-us'>
        <div className='col-md-7 contact-us-left'>
          <h2>
            Chúng tôi nỗ lực vào việc cung cấp cho khách hàng chất lượng sản
            phẩm và sự hỗ trợ cao nhất có thể.
          </h2>
          <div className='address'>
            <h4>Thành Phố Hà Nội – Việt Nam</h4>
            <p>Tầng 5, Hồng Hà Tower 89 Thịnh Liệt, Hoàng Mai, Hà Nội</p>
            <p>0848.034.456</p>
            <p>chuquancafe.com</p>
          </div>
        </div>
        <div className='col-md-5 contact-us-right'>
          <div className='form-card'>
            <p className='contact-message'>
              Để biết thêm thông tin chi tiết về thương hiệu Trendy và sản phẩm,
              vui lòng liên hệ:{" "}
              <span className='contact-phone'>0848.034.456</span> hoặc điền form
              dưới đây:
            </p>
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
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
                      <div className='mb-3 col-md-12'>
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

                      <div className='mb-3 col-md-12'>
                        <Field
                          name='email'
                          type='text'
                          placeholder='Email'
                          className={
                            "form-control" +
                            (errors.email && touched.email ? " is-invalid" : "")
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
                          name='phone'
                          type='text'
                          placeholder='Số điện thoại'
                          className={
                            "form-control" +
                            (errors.phone && touched.phone ? " is-invalid" : "")
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
                      <p className='contact-message mb-3 col-md-12'>
                        Trendy cam kết bảo vệ sự riêng tư của bạn và đảm bảo
                        rằng thông tin cá nhân của bạn được bảo vệ.
                      </p>
                      <div className='col-md-12 text-center'>
                        <button
                          type='submit'
                          className='btn btn-default background-color-primary'
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
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
