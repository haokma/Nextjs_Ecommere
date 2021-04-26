import React from 'react'
import SaleImage from '../../public/images/sale1.jpg'
import SaleImage2 from '../../public/images/sale2.jpg'
import SaleImage3 from '../../public/images/sale3.jpg'
const Sale = () => {
  return (
    <div className="sale">
      <div href="/" className="sale-item">
        <img src={SaleImage} alt="" />
        <div className="sale-item__overlay sale-item__overlay--red">

        </div>
      </div>
      <div href="/" className="sale-item">
        <img src={SaleImage2} alt="" />
        <div className="sale-item__border">

        </div>
      </div>
      <div href="/" className="sale-item">
        <img src={SaleImage3} alt="" />
        <div className="sale-item__overlay sale-item__overlay--black">

        </div>
      </div>
    </div>
  )
}

export default Sale
