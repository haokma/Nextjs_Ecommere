import {
  CloseOutlined, EditOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Button, message } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actionGetOrders, actionRemoveOrder } from '../../store/actions/OrderAction';
import HistoryItem from '../HistoryItem';
const OrderItem = ({ order }) => {
  const dispatch = useDispatch()
  const removeOrder = (id) => {
    const action = actionRemoveOrder(id)
    dispatch(action)
      .then(() => {
        message.success('Bạn đã hủy đơn hàng thành công')
        const action = actionGetOrders()
        dispatch(action)
      })
      .catch(() => {
        message.error("Bạn đã hủy đơn hàng thất bại")
      })
  }
  return (
    <div className="order">
      {
        order && order.items.map((order, index) => {
          return (
            <HistoryItem
              product={order}
              key={index}
            />
          )
        })
      }
      <Button
        type="primary"
        className="btn-cancel-order-call btn-cancel-order-call--delete"
        onClick={() => removeOrder(order._id)}
      >
        <CloseOutlined /> Hủy đơn hàng
      </Button>
      <Button
        type="primary"
        className="btn-cancel-order-call btn-cancel-order-call--status"
      >
        <LoadingOutlined /> Trạng thái :Chờ xét duyệt
      </Button>
      <Button
        onClick={() => message.info("Chức năng này chưa được hỗ trợ")}
        type="primary"
        className="btn-cancel-order-call btn-cancel-order-call--edit"
      >
        <EditOutlined />  Chỉnh sửa
      </Button>
    </div>
  )
}

export default OrderItem
