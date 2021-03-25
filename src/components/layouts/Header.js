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
      <ul className='dropdown-menu' aria-labelledby={parentData.slug}>
        {data.map((subItem) => {
          return (
            <li>
              <Link href={`/${parentData.slug}/${subItem.slug}`}>
                <a className='dropdown-item'>{subItem.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <ul
        className='dropdown-menu mega-dropdown-menu'
        aria-labelledby={parentData.slug}
      >
        <li className='row mega-dropdown__wrapper'>
          <ul className='col-lg-2 col-md-12'>
            <li>
              <Link href={`/${parentData.slug}`}>
                <a className='dropdown-item dropdown-item__title'>
                  {parentData.name}
                </a>
              </Link>
            </li>
            {data.map((subItem) => (
              <li>
                <Link href={`/${parentData.slug}/${subItem.slug}`}>
                  <a className='dropdown-item'>{subItem.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className='col-lg-10 menu-gallery'>
            <li style={{ maxWidth: '40%' }}>
              <Link href={`/san-pham/tra`}>
                <a className='dropdown-item'>
                  <img src={`/static/assets/images/menu/tra.png`} />
                </a>
              </Link>

            </li>
            <li style={{ maxWidth: '40%' }}>
              <Link href={`/san-pham/bot`}>
                <a className='dropdown-item'>
                  <img src={`/static/assets/images/menu/bot.png`} />
                </a>
              </Link>
            </li>
            <li style={{ maxWidth: '40%' }}>
              <Link href={`/san-pham/topping`}>
                <a className='dropdown-item'>
                  <img src={`/static/assets/images/menu/topping.png`} />
                </a>
              </Link>
            </li>
            {/* <li style={{ maxWidth: '25%' }}>
              <Link href={`/san-pham/topping`}>
                <a className='dropdown-item'>
                  <img src={`/static/assets/images/menu/topping.png`} />
                </a>
              </Link>
            </li> */}
          </ul>
        </li>
      </ul>
    )
  }
}

const renderMenu = (initMenu) => {
  return initMenu.map((menu) => {
    if (menu.cate.length === 0) {
      return (
        <li className='nav-item'>
          <Link href={`/${menu.slug}`}>
            <a className='nav-link' href='contact-us.html'>
              {menu.name}
            </a>
          </Link>
        </li>
      )
    } else {
      return (
        <li
          className={`nav-item dropdown ${
            menu.isMega ? "mega-dropdown" : null
            }`}
        >
          <Link href={`/${menu.slug}`}>
            <a
              className='nav-link dropdown-toggle'
              id={menu.slug}
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              {menu.name}
            </a>
          </Link>
          {menu.isMega
            ? renderSubMenu(menu.cate, true, menu)
            : renderSubMenu(menu.cate, false, menu)}
        </li>
      )
    }
  })
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
      <div className='header-classic'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
              <nav className='navbar navbar-expand-lg navbar-classic'>
                <a className='navbar-brand' href='/'>
                  <img
                    src='/static/assets/images/logos/logo-trendy-01.png'
                    alt='Logo'
                    className='logo-brand'
                  />
                </a>
                <button
                  className='navbar-toggler collapsed'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbar-classic'
                  aria-controls='navbar-classic'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='icon-bar top-bar mt-0' />
                  <span className='icon-bar middle-bar' />
                  <span className='icon-bar bottom-bar' />
                </button>
                <div className='collapse navbar-collapse' id='navbar-classic'>
                  <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                    {renderMenu(dataMenu)}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='menu-container sticky-top'>
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
      </div> */}
    </React.Fragment>
  )
}

export default Header
