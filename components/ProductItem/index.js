import Link from 'next/link';
import React from 'react';
import ConvertVnd from '../../helpers/convertVnd';
function ProductItem({ product }) {
  return (
    <div className="product-item">
      <div className="product-item__img">
        <img
          src={product.productImage[0].img}
          alt="123456"

        />
        <img
          src={product.productImage[1].img}
          alt=""

        />
        {
          product.sale ?
            <div className="sale">
              GIẢM {product.sale}%
        </div>
            : null
        }
        <ul className="product-button">
          <li className="product-button__item">
            <i className='bx bx-cart'></i>
          </li>
          <Link
            href={`/san-pham/${product.slug}`}
            className="product-button__item"
          // onClick={() => scrollToTop()}
          >
            <i className='bx bx-search-alt-2' ></i>
          </Link>
          <li className="product-button__item">
            <i className='bx bx-refresh' ></i>
          </li>
          <li className="product-button__item">
            <i className='bx bx-heart' ></i>
          </li>
        </ul>
      </div>
      <Link
        href={`/product/${product.slug}`}
        className="product-item__title"
      >
        {product.title}
      </Link>
      <div className="product-item__rating">
        <i className="star-gold fas fa-star"></i>
        <i className="star-gold fas fa-star"></i>
        <i className="star-gold fas fa-star"></i>
        <i className=" star-gold fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p className="product-item__price">
        {ConvertVnd(product.price)}
      </p>
      <ul className="product-item__button">
        <li className="button__item"
        >
          <i className='bx bx-cart'></i>
        </li>
        <li className="button__item">
          <i className='bx bx-refresh' ></i>
        </li>
        <li className="button__item">
          <i className='bx bx-heart' ></i>
        </li>
      </ul>
    </div>
    // </div>
  )
}

export default ProductItem
