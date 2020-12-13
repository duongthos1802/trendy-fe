import React from 'react'

const MenuRight = () => {
  return (
    <div class="sidebar px-5">
      <div className="widget">
        <h5 className="font-weight-bold">Danh mục</h5>
        <ul className="widget_categories mt-4">
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Cà phê hoà tan</span></a></li>
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Cà phê rang xay</span></a></li>
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Cà phê túi lọc</span></a></li>
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Cà phê viên nén</span></a></li>
          <li><a href="#"><span className="categories_name font-weight-bold font-size-14">Trà túi lọc</span></a></li>
        </ul>
      </div>
    </div>

  )
}

export default MenuRight