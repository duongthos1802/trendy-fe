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
                  <div className="heading_s1 title-block">
                    <h2 className="mb-5">{blockHomePage.block?.title}</h2>
                  </div>
                  <p className="font-size-14 text-justify">{htmlContentWithBBCode(blockHomePage.block?.description)}</p>
                  <p className="w-100 btn-block">
                    <a className="btn btn-dark" href="/gioi-thieu">Tìm hiểu thêm</a>
                  </p>
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
      <div className="container my-5">
        <hr />
      </div>
      {
        blockHomePage && blockHomePage.blockSecond
          ? <div className="container mb-5">
            <div className="row">
              <div className="col-lg-6 animation" data-animation="fadeInUp" data-animation-delay="0.03s">
                <img src={imageUtils.getBlockUrl(blockHomePage.blockSecond.image, enumType.imagePath.HtmlBlock)} alt="about_img3" />
              </div>
              <div className="col-lg-6 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
                <div className="about_section pl-lg-3 py-5">
                  <div className="heading_s1 title-block">
                    <h2 className="mb-5">{blockHomePage.blockSecond?.title}</h2>
                  </div>
                  <p className="font-size-14 text-justify">{htmlContentWithBBCode(blockHomePage.blockSecond?.description)}</p>
                  <p className="w-100 btn-block">
                    <a className="btn btn-dark" href="/san-pham">Tìm hiểu thêm</a>
                  </p>
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
