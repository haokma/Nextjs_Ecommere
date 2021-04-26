import React, { useEffect } from 'react'
import HeaderTop from './HeaderTop'
import NavItem from './HeaderNav'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionGetAllCategories } from '../../store/actions/categoriesAction'
const Header = () => {
  const categories = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    const action = actionGetAllCategories()
    dispatch(action)
  }, [])
  return (
    <div className="header">
      <HeaderTop
      />
      <div className="header-mid">
        <div className="container">
          <nav className="nav">
            <a href="/" className="nav__logo">
              <span>H</span>
              <span>a</span>
              <span>o</span>
              <span>L</span>
              <span>u</span>
              <span>x</span>
            </a>
            <div className="nav-right">
              <ul className="nav-menu">
                {
                  categories.map((category, index) => {
                    return (
                      <NavItem
                        category={category}
                        key={index}
                      />
                    )
                  })
                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div >
  )
}

export default Header
