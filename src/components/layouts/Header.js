import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadDataPager } from "../../actions/categoryAction"
import { enumType } from "../../constants"
import Link from "next/link"

const addField = (data) => {
  return data.map((item) =>
    Object.assign(item, {
      cate: [],
      parent: item.parentId ? item.parentId._id : null,
    })
  )
}
// hi hi

const generateCate = (data) => {
  let result = data.filter((item) => !item.parent)
  const child = data.filter((item) => !!item.parent)
  child.map((item) => {
    const parentIndex = result.findIndex((el) => item.parent === el._id)
    result[parentIndex].cate.push(item)
  })

  return result
}

const renderSubMenu = (data, isMega, parentData) => {
  if (!isMega) {
    return (
      <ul className='sub-menu normal-sub'>
        {data.map((subItem) => (
          <li>
            <Link href={`/${parentData.slug}/${subItem.slug}`}>
              <a>{subItem.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    )
  } else {
    return (
      <ul className='sub-menu mega-sub'>
        <li className='sub-menu-cate'>
          <Link href={`/${parentData.slug}`}>
            <a className='sub-menu-cate__title'>{parentData.name}</a>
          </Link>
          <ul className='sub-menu-cate__link'>
            {/* <li>
              <a href='#'>Cà phê rang xay</a>
            </li> */}
            {data.map((subItem) => (
              <li>
                <Link href={`/${parentData.slug}/${subItem.slug}`}>
                  <a>{subItem.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className='sub-menu-gallery'>
          <ul>
            <li>
              <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
              </a>
            </li>
            <li>
              <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
              </a>
            </li>
            <li>
              <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    )
  }
}

const renderMenu = (initMenu) => {
  return initMenu.map((menu) => (
    <li className='mega-menu-item'>
      <Link href=''>
        <a className='mega-menu-link'>
          {menu.name}
          {menu.cate.length > 0 ? (
            <i className='fas fa-angle-down ml-1'></i>
          ) : null}
        </a>
      </Link>
      {menu.cate.length > 0
        ? menu.isMega
          ? renderSubMenu(menu.cate, true, menu)
          : renderSubMenu(menu.cate, false, menu)
        : null}
    </li>
  ))
}

const Header = ({ children, isMobile }) => {
  console.log("isMobile.......", isMobile)
  const dispatch = useDispatch()
  const [dataMenu, setDataMenu] = useState([])

  const categoriesData = useSelector((state) =>
    state.categories && state.categories.menu ? state.categories.menu : []
  )

  const loadCategoryData = async (queryClause) => {
    const categories = await loadDataPager(queryClause)
    dispatch.categories.getMenu(
      categories && categories.length ? categories : []
    )
  }

  useEffect(() => {
    const queryClause = `filter: {status: ${enumType.status.PUBLISHED}}, skip: 0, sort:INDEX_ASC`
    loadCategoryData(queryClause)
  }, [])

  useEffect(() => {
    const initMenu = generateCate(addField(categoriesData))
    setDataMenu(initMenu)
  }, [categoriesData])

  console.log("category............", generateCate(addField(categoriesData)))

  return (
    <React.Fragment>
      <div className='header-top-container'>
        <div className='row align-items-center header-top'>
          <div className='col-md-6 '>
            <div className='header-top-left'>
              <span className='header-top__icon'>
                <i className='fab fa-facebook-f'></i>
              </span>
              <span className='header-top__icon'>
                <i className='fab fa-instagram'></i>
              </span>
            </div>
          </div>
          <div className='col-md-6 '>
            <ul className='contact_detail font-size-12 text-center text-lg-right float-right header-top-right'>
              <li className='text-color-black'>
                <i class='fas fa-phone-alt'></i>
                123-456-7890
              </li>
              <li className='text-color-black'>
                <i class='far fa-envelope'></i>
                duongth@vgroup.vn
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='menu-container sticky-top'>
        <div className='menu'>
          <Link href='/'>
            <a className='logo '>
              <img src='https://mysterybean.vn/wp-content/uploads/2020/10/Mytery-bean-Logo-Org.png' />
            </a>
          </Link>
          <a href='#' class='menu-mobile'>
            &nbsp;
          </a>
          <ul className='clearfix mega-menu'>
            {renderMenu(dataMenu)}
            {/* <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Trang chủ
              </a>
            </li>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Giới thiệu<i className='fas fa-angle-down ml-1'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='#'>Today</a>
                </li>
                <li>
                  <a href='#'>Calendar</a>
                </li>
                <li>
                  <a href='#'>Sport</a>
                </li>
              </ul>
            </li>
            <li className='mega-menu-item'>
              <a href='#' className='mega-menu-link'>
                Sản phẩm<i className='fas fa-angle-down ml-1'></i>
              </a>
              <ul className='sub-menu'>
                <li className='sub-menu-cate'>
                  <a href='#' className='sub-menu-cate__title'>
                    Coffee
                  </a>
                  <ul className='sub-menu-cate__link'>
                    <li>
                      <a href='#'>Cà phê rang xay</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê hoà tan</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê viên nén</a>
                    </li>
                    <li>
                      <a href='#'>Cà phê túi lọc</a>
                    </li>
                  </ul>
                </li>
                <li className='sub-menu-gallery'>
                  <ul>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                    <li>
                      <a href='https://mysterybean.vn/product-category/ca-phe-rang-xay/'>
                        <img src='https://mysterybean.vn/wp-content/uploads/2020/10/mystery-bean-lover.jpg' />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
  </li> */}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
