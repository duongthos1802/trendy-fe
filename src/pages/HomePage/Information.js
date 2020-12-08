import React from 'react'

const Information = () => {

  return (
    <div className="section pb_70 information" style={{ background: "#9f863d" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="animation d-flex p-0" data-animation="fadeInUp" data-animation-delay="0.02s">
              <div className="icon mb-0 mr-3">
                <i className="flaticon-shipped" />
              </div>
              <div className="icon_box_content">
                <p className="font-size-18 mb-0 text-color-white">Hỗ trợ thông tin:</p>
                <p className="font-size-18 mb-0 text-color-white">+84 77955 8188</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="animation d-flex" data-animation="fadeInUp" data-animation-delay="0.03s">
              <div className="icon mb-0 mr-3">
                <i className="flaticon-dining-table" />
              </div>
              <div className="icon_box_content">
                <p className="font-size-18 mb-0 text-color-white">32 đường số 1B, P. BT Đông B</p>
                <p className="font-size-18 mb-0 text-color-white">Q. Bình Tân, TP.HCM.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="animation d-flex" data-animation="fadeInUp" data-animation-delay="0.04s">
              <div className="icon mb-0 mr-3">
                <i className="flaticon-destination" />
              </div>
              <div className="icon_box_content">
                <p className="font-size-18 mb-0 text-color-white">Thư điện tử:</p>
                <p className="font-size-18 mb-0 text-color-white">info@mysterybean.vn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Information