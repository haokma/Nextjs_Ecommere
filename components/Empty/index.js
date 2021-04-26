import React from 'react'
import Link from 'next/link'
const Empty = ({ title }) => {
  return (
    <div className="empty">
      <h2 className="empty__title">
        {title}
      </h2>
      <Link href="/"

      > Tiếp tục mua sắm</Link>
    </div>
  )
}

export default Empty
