import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/LoadingHistory';
import OrderItem from '../components/OrderItem';
import { actionGetOrders } from '../store/actions/OrderAction';
import Layout from '../components/Layout'
const { TabPane } = Tabs;
const HistoryCart = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.order.orders)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const action = actionGetOrders()
    setLoading(true)
    dispatch(action)
      .then((res) => {
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])
  return (
    <Layout title="History ">
      <div className="history">
        <div className="container">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tất Cả"
              key="1">
              {orders.length ? orders.map((order, index) => {
                return (
                  <OrderItem
                    key={index}
                    order={order}
                  />
                )
              })
                : null
              }
              {
                loading ? <Loading /> : null
              }
              {
                !loading && !orders.length && (
                  // <Empty title="Không có đơn hàng nào" />
                  <h1>Không có đơn hàng nào</h1>
                )
              }
            </TabPane>
            <TabPane tab="Chờ Duyệt"
              key="2">
              {orders ? orders.map((order, index) => {
                return (
                  <OrderItem
                    key={index}
                    order={order}
                  />
                )
              })
                : null
              }
              {
                loading ? <Loading /> : null
              }
              {
                !loading && !orders.length && (
                  // <Empty title="Không có đơn hàng nào" />
                  <h1>Không có đơn hàng nào</h1>
                )
              }
            </TabPane>
            <TabPane tab="Đã Xét Duyệt"
              key="3" >
              {/* <Empty title="Không có đơn hàng nào" /> */}
              <h1>Không có đơn hàng nào</h1>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

export default HistoryCart
