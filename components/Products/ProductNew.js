import React from 'react'
import ProductItem from '../ProductItem'
function ProductNew({ productList }) {

  return (
    <div className="product-new">
      <div className="container">
        <div className="product-new__heading">
          <h3>SẢN PHẨM MỚI NHẤT</h3>
        </div>
        <div className="row">
          {productList.map((product, index) => {
            return (
              <div
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
                key={index}
              >
                <ProductItem
                  product={product}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductNew
