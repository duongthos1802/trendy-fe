import React from 'react'
import { htmlContentWithBBCode } from '../../extensions/html'

const Information = ({ product }) => {
  return (
    <div className="tab-style4 mt-5">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="Packing-tab" data-toggle="tab" href="#Packing" role="tab" aria-controls="Packing" aria-selected="true"> <span className="text-transform-none font-weight-bold">Quy cách đóng gói</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="Preservation-tab" data-toggle="tab" href="#Preservation" role="tab" aria-controls="Preservation" aria-selected="false"> <span className="text-transform-none font-weight-bold">Cách bảo quản</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="Application-tab" data-toggle="tab" href="#Application" role="tab" aria-controls="Application" aria-selected="false"> <span className="text-transform-none font-weight-bold">Ứng dụng</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="Suggestion-tab" data-toggle="tab" href="#Suggestion" role="tab" aria-controls="Suggestion" aria-selected="false"> <span className="text-transform-none font-weight-bold">Công thức gợi ý</span></a>
        </li>
      </ul>
      <div className="tab-content shop_info_tab">
        <div className="tab-pane fade show active" id="Packing" role="tabpanel" aria-labelledby="Packing-tab">
          {htmlContentWithBBCode(product?.packing)}
        </div>
        <div className="tab-pane fade" id="Preservation" role="tabpanel" aria-labelledby="Preservation-tab">
          {htmlContentWithBBCode(product?.preservation)}
        </div>
        <div className="tab-pane fade" id="Application" role="tabpanel" aria-labelledby="Application-tab">
          {htmlContentWithBBCode(product?.application)}
        </div>
        <div className="tab-pane fade" id="Suggestion" role="tabpanel" aria-labelledby="Suggestion-tab">
          {htmlContentWithBBCode(product?.recipeSuggestion)}
        </div>
      </div>
    </div>

  )
}

export default Information