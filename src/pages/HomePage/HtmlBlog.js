import React from 'react'

const HtmlBlock = () => {
  return (
    <div className="background-color-gray pt-2">

      <div className="container">
        <div className="row">
          <div className="col-lg-6 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <div className="about_section pl-lg-3 py-5">
              <div className="heading_s1">
                <h2 className="mb-5">Cà phê nhân</h2>
              </div>
              <p className="font-size-14 line-height-20">Các loại cà phê nhân của chúng tôi đại diện cho các lựa chọn tinh tế và độc đáo trong ngành cà phê nhân tại thị trường Việt Nam. Các lô hàng mẫu luôn được kiểm tra nhằm đánh giá chất lượng và tạo nên hương vị tốt nhất cho mỗi cốc cà phê. Bằng các phương pháp sản xuất bền vững, sáng tạo và được lưu trữ trong các nhà kho theo đúng quy trình bảo quản hiện đại thể hiện tính nhất quán trong việc đảm bảo chất lượng cà phê tốt và ngon nhất khi đến với khách hàng.</p>
              <a className="btn btn-dark" >Tìm hiểu thêm</a>
            </div>
          </div>
          <div className="col-lg-6 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
            <img src="http://mysterybean.vn/wp-content/uploads/2020/10/green-bean.jpg?id=7482" alt="about_img3" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              <div className="heading_s1 text-center">
                <h2>Công nghệ rang xay đặc biệt Mystery Bean</h2>
              </div>
              <p className="text-center leads">Chúng tôi luôn giữ qui trình và kỹ thuật rang bí truyền được nghiên cứu và phát triển theo từng loại hạt nhằm mang lại hương vị tốt nhất cho mỗi mẻ cà phê.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 background-color-primary-blue">
              <h2 className="text-color-white">Hành trình<br/>của sự chinh phục</h2>
            </div>

            <div className="col-lg-6">
              
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HtmlBlock
