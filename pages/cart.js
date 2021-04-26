import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import Layout from '../components/Layout'
import Empty from '../components/Empty'
import ConvertVnd from '../helpers/convertVnd'
const CartPage = () => {
  const cart = useSelector(state => state.cart)

  if (cart.result === 0 || cart.result === null) return (
    <Layout>
      <Empty title="Không có sản phẩm nào" />
    </Layout>
  )
  return (
    <Layout title="Cart Page">
      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="cart__content">
                <h2 className="cart__title">
                  Giỏ hàng({cart.result} sản phẩm)
            </h2>
                <div className="cart-list">
                  {
                    cart.cartItems ?
                      cart.cartItems.map((product, index) => {
                        return (
                          <CartItem
                            key={index}
                            product={product}
                          />
                        )
                      })
                      : null
                  }
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="cart-total">
                <h4 className="cart-total__title">
                  Cộng giỏ hàng
              </h4>
                <div className="cart-amount">
                  <span className="cart-amount__title">
                    Tạm tính
                </span>
                  <span className="cart-amount__price">
                    {cart.totalPrice && ConvertVnd(cart.totalPrice)}
                  </span>
                </div>
                <div className="cart-amount">
                  <span className="cart-amount__title">
                    Phí ship
                </span>
                  <span className="cart-amount__price">
                    {ConvertVnd(30000)}
                  </span>
                </div>
                <div className="cart-total__button">
                  <Link href="/payment"
                  >
                    TIẾN HÀNH THANH TOÁN
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
