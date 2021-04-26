import { message } from 'antd'

import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { actionClearCart, actionRemoveCart } from '../../../store/actions/cartAction'


const Top = () => {
  const dispatch = useDispatch()
  const result = useSelector(state => state.cart.result)
  const [token, setToken] = useState(Cookies.get('token') ? JSON.parse(Cookies.get('token')) : null)
  const [user, setUser] = useState(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null)
  const logout = () => {
    Cookies.remove('token')
    Cookies.remove('user')
    Cookies.remove('result')
    setToken(null)
    setUser(null)
    message.success('Đăng xuất thành công')
    const action = actionClearCart()
    dispatch(action)
  }
  return (
    <div className="header-top">
      <div className="container">
        <div className="top">
          <div className="top-left">
            <div className="top-left__button" >
              <i className='bx bx-menu' ></i>
            </div>
            <div className="top-left__phone">
              <i className='bx bx-phone'></i>
              <span>+189 284 5679</span>
            </div>
          </div>
          <ul className="top-right">
            {
              !token ?
                (< li className="top-item">
                  <i className='bx bx-user'></i>
                  <Link href="/login">Đăng nhập</Link>
                  <span> / </span>
                  <Link href="/register">Đăng ký</Link>
                </li>)
                :
                (
                  <>
                    <li className="top-item">
                      {/* <i className='bx bx-border-all'></i> */}
                      <Link href="/history">Đơn hàng</Link>
                    </li>
                    <li className="top-item">
                      <i className='bx bx-user'></i>
                      <Link href="/login">Nguyễn Hào</Link>
                      <span> / </span>
                      <span onClick={() => logout()}>Đăng xuất</span>
                    </li>
                  </>
                )

            }
            <a href="/cart" className="top-item top-item--cart">
              <i className='bx bx-cart' ></i>
              <p> {result ? result : 0} sản phẩm </p>
            </a>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Top
