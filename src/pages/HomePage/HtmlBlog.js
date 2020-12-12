import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// actions
import { getHtmlBlock } from '../../actions/homeAction'
// extensions
import { htmlContentWithBBCode } from '../../extensions/html'
// constants
import { enumType } from '../../constants'
// utils
import { imageUtils } from '../../utils'

const HtmlBlock = () => {

  const dispatch = useDispatch()

  const blockHomePage = useSelector(state => state.homes && state.homes.htmlBlock ? state.homes.htmlBlock : null)

  const loadHtmlBlock = async () => {
    const htmlBlock = await getHtmlBlock()
    dispatch.homes.getHtmlBlock(htmlBlock)
  }

  useEffect(() => {
    loadHtmlBlock()
  }, [])

  return (
    <div className="background-color-gray pt-2">

      {/* Block  */}
      {
        blockHomePage && blockHomePage.block
          ? <div className="container">
            <div className="row">
              <div className="col-lg-6 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                <div className="about_section pl-lg-3 py-5">
                  <div className="heading_s1">
                    <h2 className="mb-5">{blockHomePage.block?.title}</h2>
                  </div>
                  <p className="font-size-14 line-height-20">{htmlContentWithBBCode(blockHomePage.block?.description)}</p>
                  <a className="btn btn-dark" >Tìm hiểu thêm</a>
                </div>
              </div>
              <div className="col-lg-6 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                <img src={imageUtils.getBlockUrl(blockHomePage.block.image, enumType.imagePath.HtmlBlock)} alt="about_img3" />
              </div>
            </div>
          </div>
          : null
      }
      {/* Block Second */}
      {
        blockHomePage && blockHomePage.blockSecond
          ? < div className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <div className="heading_s1 text-center">
                    <h2>{blockHomePage.blockSecond?.title}</h2>
                  </div>
                  <p className="text-center leads">{htmlContentWithBBCode(blockHomePage.blockSecond?.description)}</p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 background-color-primary-blue p-4 block-second">
                  {
                    htmlContentWithBBCode(blockHomePage.blockSecond.content)
                  }
                  {/* <h2 className="text-color-white">Hành trình của sự chinh phục</h2>
                  <p className="line-height-15 text-color-white">Từ 1997, khi tình yêu với cà phê không chỉ còn là để thỏa mãn vị giác mỗi ngày,
                  sự đam mê khám phá và mong muốn thành quả tạo ra những gói cà phê tinh nguyên, đắng đậm lại dịu nhẹ từ những hạt ngọc đen tinh khiết.
              Chúng tôi hình thành "Đào Nguyên", một thương hiệu mở đầu cho hành trình chinh phục “mỹ vị” người dân Việt.</p>
                  <p className="line-height-15 text-color-white">Với mong muốn mang giấc mơ cà phê đi xa, chúng tôi tin rằng khát vọng được uống cà phê ngon- sạch
                  của chính quê hương mình sẽ trở thành niềm vui mang đầy sức lan tỏa trong cộng đồng cũng như bạn bè quốc tế. Và, Mystery Bean - một
                  thương hiệu của Cà phê Đào Nguyên, đã đặt cho mình sứ mệnh nhận dạng và tôn vinh giá trị cà phê Việt, mang một hình ảnh mới về sự năng
              động và hội nhập xu thế mới của ngành công nghiệp sản xuất và chế biến cà phê trên toàn thế giới.</p> */}
                </div>
                <div className="col-lg-6 px-0" style={{ backgroundImage: `url(${imageUtils.getBlockUrl(blockHomePage.blockSecond.image, enumType.imagePath.HtmlBlock)})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  {/* <img src="http://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-from-farm-to-cup.jpg?id=7465" /> */}
                </div>
              </div>
            </div>
          </div>
          : null
      }


    </div >

  )
}

export default HtmlBlock
