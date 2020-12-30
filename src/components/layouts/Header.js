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
              <a href='/'>
                <img
                  src={`/static/assets/images/menu/how-we-make-coffee.jpg`}
                />
              </a>
            </li>
            <li>
              <a href='/'>
                <img
                  src={`/static/assets/images/menu/mystery-bean-lover.jpg`}
                />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={`/static/assets/images/menu/ready-to-mix.jpg`} />
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
      <Link href={`/${menu.slug}`}>
        <a className='mega-menu-link'>{menu.name}</a>
      </Link>
      {menu.cate.length > 0 ? (
        <i className='fas fa-angle-down ml-1 mobile-ddn'></i>
      ) : null}

      {menu.cate.length > 0
        ? menu.isMega
          ? renderSubMenu(menu.cate, true, menu)
          : renderSubMenu(menu.cate, false, menu)
        : null}
    </li>
  ))
}

const Header = ({ children, isMobile }) => {
  const dispatch = useDispatch()
  const [dataMenu, setDataMenu] = useState([])
  const [showOnMobile, setShowOnMobile] = useState(false)

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

  return (
    <React.Fragment>
      <div className='menu-container sticky-top'>
        <div className='menu'>
          <Link href='/'>
            <a className='logo '>
              <img
                src={`/static/assets/images/logos/logo-trendy-01.png`}
                alt='logo'
              />
            </a>
          </Link>
          <span
            class='menu-mobile'
            onClick={() => setShowOnMobile(!showOnMobile)}
          >
            &nbsp;
          </span>
          <ul
            className={`clearfix mega-menu ${
              showOnMobile ? "show-on-mobile" : ""
            }`}
          >
            {renderMenu(dataMenu)}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
