import Head from 'next/head'
import React, { useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Cookie from 'js-cookie'
import { actionGetCart } from '../../store/actions/cartAction'
import { useDispatch } from 'react-redux'
const Layout = ({ children, title = 'Home Page' }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = Cookie.get('token') ? JSON.parse(Cookie.get('token')) : null
    const result = Cookie.get('result') ? JSON.parse(Cookie.get('result')) : null
    if ((token) && Number(result) !== 0 && result !== null) {
      const action = actionGetCart()
      dispatch(action)
    }
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
