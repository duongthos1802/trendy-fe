import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIntroduceBlock } from '../../actions/homeAction'
import { htmlContentWithBBCode } from '../../extensions/html'
import { imageUtils } from '../../utils'
import { enumType } from '../../constants'


const Introduce = () => {

  const dispatch = useDispatch()

  const introduceHomePage = useSelector(state => state.homes && state.homes.introduceBlock ? state.homes.introduceBlock : null)

  const loadIntroduceBlock = async () => {
    const introduceBlock = await getIntroduceBlock()
    dispatch.homes.getIntroduceBlock(introduceBlock)
  }

  useEffect(() => {
    loadIntroduceBlock()
  }, [])

  return introduceHomePage && (
    <div className="section background_bg introduce" style={{ backgroundImage: `url(${imageUtils.getBlockUrl(introduceHomePage.image, enumType.imagePath.HtmlBlock)})` }}>
      <div className="bg-overlay">
        <div className="container" >
          <div className="row">
            <div className="col-lg-6 col-md-8 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
              <div className="heading_s1 heading_light">
                <h2 className="text-color-white">{introduceHomePage?.title}</h2>
              </div>
              <p className="text-white text-justify">{htmlContentWithBBCode(introduceHomePage?.description)}</p>
              <a className="btn btn-white" target="_blank" href="/cam-hung-sang-tao">Tìm hiểu thêm</a>
            </div>
          </div>
        </div >
      </div>
    </div>
  )
}

export default Introduce