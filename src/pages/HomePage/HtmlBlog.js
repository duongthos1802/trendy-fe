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
            <div className="col-lg-6 background-color-primary-blue p-4">
              <h2 className="text-color-white">Hành trình của sự chinh phục</h2>
              <p className="line-height-15">Từ 1997, khi tình yêu với cà phê không chỉ còn là để thỏa mãn vị giác mỗi ngày,
              sự đam mê khám phá và mong muốn thành quả tạo ra những gói cà phê tinh nguyên, đắng đậm lại dịu nhẹ từ những hạt ngọc đen tinh khiết.
              Chúng tôi hình thành "Đào Nguyên", một thương hiệu mở đầu cho hành trình chinh phục “mỹ vị” người dân Việt.</p>
              <p className="line-height-15">Với mong muốn mang giấc mơ cà phê đi xa, chúng tôi tin rằng khát vọng được uống cà phê ngon- sạch
              của chính quê hương mình sẽ trở thành niềm vui mang đầy sức lan tỏa trong cộng đồng cũng như bạn bè quốc tế. Và, Mystery Bean - một
              thương hiệu của Cà phê Đào Nguyên, đã đặt cho mình sứ mệnh nhận dạng và tôn vinh giá trị cà phê Việt, mang một hình ảnh mới về sự năng
              động và hội nhập xu thế mới của ngành công nghiệp sản xuất và chế biến cà phê trên toàn thế giới.</p>
            </div>
            <div className="col-lg-6 px-0" style={{ backgroundImage: "url(http://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-from-farm-to-cup.jpg?id=7465)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
              {/* <img src="http://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-from-farm-to-cup.jpg?id=7465" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HtmlBlock
