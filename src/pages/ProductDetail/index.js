import React from 'react'
import Layout from '../../components/layouts/Layout'
import MenuRight from '../../components/MenuRight'

const ProductDetail = () => {
  return (
    <Layout>
      <div className="section product-detail">
        <div className="container">
          <div className="row">
            <div className="col-4">

            </div>
            <div className="col-4">
              <div className="product-name">
                <h2 className="font-weight-bold">Trà lài</h2>
              </div>
              <div className="description mt-5">
                <p className="text-color-black line-height-15">
                  Trà Lài Túi Lọc được làm bằng nguyên liệu là búp trà non và hoa nhài tự nhiên sấy khô. Tác Dụng Của Trà Lài Túi Lọc giúp giảm stress, các nguy cơ mắc ung thư. Giảm cholesterol, giải nhiệt và ổn định đường huyết, giúp tinh thần tươi tỉnh và sảng khoái.<br /> <br />
                Trà có nước xanh, vị đắng, chát nhẹ khi uống và hương thơm tự nhiên.<br /> <br />
                Qui cách đóng gói: Hộp 25 gói x 2gr
              </p>
              </div>
            </div>
            <div className="col-4">
              <MenuRight />
            </div>

            <div className="col-8">
              <div className="tab-style4 mt-5">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="Description-tab" data-toggle="tab" href="#Description" role="tab" aria-controls="Description" aria-selected="true"> Quy cách đóng gó</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="Additional-info-tab" data-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Cách bảo quản</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="Additional-info-tab" data-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Ứng dụng</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="Additional-info-tab" data-toggle="tab" href="#Additional-info" role="tab" aria-controls="Additional-info" aria-selected="false">Công thức gợi ý</a>
                  </li>
                </ul>
                <div className="tab-content shop_info_tab">
                  <div className="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Vivamus bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                  </div>
                  <div className="tab-pane fade" id="Additional-info" role="tabpanel" aria-labelledby="Additional-info-tab">
                    <table className="table table-bordered">
                      <tbody><tr>
                        <td>Weight</td>
                        <td>0.5 Kg</td>
                      </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td>16 x 22 x 123 cm</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail