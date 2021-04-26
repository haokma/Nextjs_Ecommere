import Link from 'next/link';
import React from 'react';
import DropdownItem from './DropdownItem';
function NavItem(props) {
  const { category } = props
  return (
    <li className="nav-item">
      <a className="nav-item__link" href={`/category/${category.slug}`}>
        <span>{category.name}</span>
        {category.children.length > 0 && <i className='bx bx-chevron-down'></i>}
      </a>
      {
        category.children.length > 0 ?
          (
            <ul className="dropdown">
              {
                category.children.map((item, index) => {
                  return (
                    <DropdownItem item={item} key={index} />
                  )
                })
              }
            </ul>
          ) : null
      }
    </li>
  )
}

export default NavItem
