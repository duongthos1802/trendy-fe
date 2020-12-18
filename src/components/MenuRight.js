import React from 'react'
import Link from 'next/link';

const MenuRight = ({ menu }) => {

  const cateParent = menu.find(item => !item.parentId)

  console.log("menu....", menu);
  return (
    <div class="sidebar px-5 d-none d-md-block">
      <div className="widget">
        <h5 className="font-weight-bold">Danh mục</h5>
        <ul className="widget_categories mt-4">
          {
            menu && menu.length
              ? menu.map((item) => {
                if (item.parentId) {
                  return <li><Link href={`/${cateParent.slug}/${item.slug}`}><a><span className="categories_name font-weight-bold font-size-14">{item?.name}</span></a></Link></li>
                }
              })
              : null
          }
          {/* <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Cà phê hoà tan</span></a></li>
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Cà phê rang xay</span></a></li>
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Cà phê túi lọc</span></a></li>
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Cà phê viên nén</span></a></li>
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Trà túi lọc</span></a></li> */}
        </ul>
      </div>
    </div>

  )
}

export default MenuRight