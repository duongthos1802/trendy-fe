import React from "react"
import Layout from "../../components/layouts/Layout"

const Introduce = () => {
  return (
    <Layout>
      <div className='intro'>
        <div className='row container-wrap'>
          <div className='col-sm-12 col-md-6 '>
            <div className='main-content'>
              <h2>Trendy - Nguyên liệu pha chế được tin dùng bởi Baristas</h2>
              <p>
                Ngành công nghiệp pha chế đồ uống ngày càng phát triển, đòi hỏi
                sự ra đời của những hương vị mới và sáng tạo hơn nữa trong
                nguyên liệu và cách pha chế. Bằng cách lắng nghe và thấu hiểu
                nhu cầu của khách hàng, Trendy ra đời với sứ mệnh đem lại những
                sản phẩm phù hợp với việc kinh doanh và pha chế đồ uống, đặc
                biệt được tin dùng bởi các Baristas đầu ngành. Mỗi sản phẩm của
                Trendy đều được tỉ mỉ và cẩn thận trong từng khâu thiết kế, chế
                biến, đóng gói và vận chuyển, mang đến hương vị của thiên nhiên
                cùng sự tin tưởng về những ly đồ uống ngon sắp được ra đời.
                Chúng tôi tin rằng, với năng lượng tích cực mà Trendy mang lại,
                mỗi ngày pha chế sẽ là một ngày vui cùng đam mê của các
                Baristas, mỗi sản phẩm từ nguyên liệu của Trendy sẽ là một món
                quà tới người thưởng thức.
              </p>
              <p>
                Trendy tự hào mang đến các dòng nguyên liệu pha chế bao gồm:
                Syrup, Bột, Topping,...
              </p>
            </div>
          </div>
          {/* <div className='media-content col-sm-12 col-md-6'>
            <img src='https://mysterybean.vn/wp-content/uploads/2020/11/Mystery-Bean-coffee-and-tea-1024x682.jpg' />
          </div> */}
        </div>
      </div>
      <div className='content-para'>
        <h2>Giá trị cốt lõi của chúng tôi</h2>
        <p>
          Sự bền vững trong chuỗi giá trị liên kết toàn cầu giữa người nông dân
          với đơn vị sản xuất và phân phối, cùng chiến lược kinh doanh có hiệu
          quả mang lại chất lượng thực cho khách hàng và người tiêu dùng là điều
          mà chúng tôi luôn tin tưởng và phát triển trong suốt hành trình kinh
          doanh của mình.
        </p>
      </div>
    </Layout>
  )
}

export default Introduce
