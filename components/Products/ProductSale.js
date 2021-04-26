import React from 'react'
import CarouselProvider from '../CarouselProvider'
import ProductItem from '../ProductItem';
const ProductSale = ({ productList }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      ,
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="product-sale">
      <div className="container">
        <div className="product-sale__content">
          <div className="product-sale__heading">
            <h1>SẢN PHẨM SALE</h1>
          </div>
          <div className="product-sale__slider">
            <CarouselProvider settings={settings} >
              {
                productList.map((product, index) => {
                  return (
                    <ProductItem
                      product={product}
                      key={index}
                    />
                  )
                })
              }
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSale
