import { message } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ImageItem from '../../components/ImageItem'
import Layout from '../../components/Layout'
import LoadingButton from '../../components/LoadingButton'
import ProductRelate from '../../components/ProductRelate'
import SizeItem from '../../components/SizeItem'
import ConvertVnd from '../../helpers/convertVnd'
import productApi from '../../lib/productApi'
import { useRouter } from 'next/router'
import { actionAddToCart, actionGetCart } from '../../store/actions/cartAction'
import { actionGetProductSlug } from '../../store/actions/productAction'
function ProductDetailsPage({ products, relatedProducts }) {
  const dispatch = useDispatch()
  const [product, setProduct] = useState(products)
  const [indexSize, setIndexSize] = useState(0)
  const [indexImage, setIndexImage] = useState(0)
  const [style, setStyle] = useState('')
  const [disable, setDisable] = useState(false)
  const router = useRouter()
  const { slug } = router.query
  console.log(slug)
  const [productRelate, setProductRelate] = useState(relatedProducts.relatedProducts)
  const onMouseMoveImages = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setStyle(`${x}% ${y}%`)
  }
  const addToCart = (product, indexSize) => {
    const cartItem = {
      cartItemId: product._id,
      quantity: 1,
      size: product.sizeProduct[indexSize].size
    }
    setDisable(true)
    const action = actionAddToCart(cartItem)
    const actionGet = actionGetCart()
    dispatch(action)
      .then((res) => {
        console.log(res);
        setDisable(false)
        dispatch(actionGet)
        message.success("Thêm sản phẩm thành công")
      })
      .catch(err => {
        message.error('Vui lòng đăng nhập')
        setDisable(false)

      })
  }
  useEffect(() => {
    const action = actionGetProductSlug(slug)
    setIndexSize(0)
    setIndexImage(0)
    dispatch(action)
      .then((res) => {
        const { product, relatedProducts } = res.data
        setProduct(product)
        setRelatedProducts(relatedProducts.relatedProducts)
      })
      .catch((err) => {

      })
  }, [dispatch, slug])
  return (
    <Layout>
      <div className="product-details">
        <div className="container-fluid responsive">
          {/* <Breadcrumb pathname={pathname.split('/')} /> */}
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="product-details__left">
                <ul className="product-slider">
                  {
                    product.productImage.map((productImage, index) => {
                      return (
                        <ImageItem
                          key={index}
                          productImage={productImage}
                          setIndexImage={setIndexImage}
                          index={index}
                          indexImage={indexImage}
                        />
                      )
                    })
                  }
                </ul>
                {
                  product.productImage ?
                    <div
                      className="product-img"
                      style={{
                        backgroundImage: `url(${product.productImage[indexImage].img})`,
                        backgroundPosition: style
                      }}
                      onMouseMove={onMouseMoveImages}
                    >
                      <img
                        src={product.productImage[indexImage].img}
                        alt=""
                        className="hi"
                      />
                    </div>
                    :
                    <div className="product-img">
                    </div>
                }
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="product-details__right">
                <h3 className="product-title">
                  {product.title ? product.title : <>
                    <Skeleton type="title-details" />
                    <Skeleton type="title-details" />
                  </>
                  }
                </h3>
                <div className="product-desc">
                  {product.description}
                </div>
                <div className="product-status">
                  <span>Trạng thái:</span>
                  {
                    <>
                      {
                        product.quantity ?
                          <span className="stock">
                            <i className='bx bx-check-circle'></i>
                            Còn hàng
                        </span> :
                          <span className=" stock out-stock">
                            <i className='bx bx-check-circle'></i>
                            Hết hàng
                        </span>
                      }
                    </>
                  }

                </div>
                <div className="product-price">
                  {ConvertVnd(product.price)}
                </div>
                <div className="product-size">
                  <h3 className="product-size__title">
                    Size:
                </h3>
                  <ul className="product-size__list">
                    {
                      (product.sizeProduct.map((productSize, index) => {
                        return (
                          <SizeItem
                            key={index}
                            setIndexSize={setIndexSize}
                            productSize={productSize}
                            index={index}
                            indexSize={indexSize}
                          />
                        )
                      }))
                    }
                  </ul>
                </div>
                <div className="product-button">
                  {
                    disable ? <LoadingButton /> : <button
                      className="product-button__add"
                      onClick={() => addToCart(product, indexSize)}
                    >
                      <i className='bx bx-cart' ></i>
                      <span>MUA HÀNG</span>
                    </button>
                  }
                </div>
                <div className="sale-product">
                  <h4 className="sale-product__title">
                    KHUYẾN MÃI KHI MUA HÀNG
                </h4>
                  <ul className="sale-list">
                    <li className="sale-list__item">
                      <i className="fas fa-check-circle"></i>
                      <span>Miễn phí ship hàng toàn quốc cho đơn hàng trên 2 triệu.</span>
                    </li>
                    <li className="sale-list__item">
                      <i className="fas fa-check-circle"></i>
                      <span>Với đơn hàng dưới 2 triệu, phí ship đồng giá 30k.</span>
                    </li>
                    <li className="sale-list__item">
                      <i className="fas fa-check-circle"></i>
                      <span>Nhận hàng và kiểm tra trước khi thanh toán.</span>
                    </li>
                    <li className="sale-list__item">
                      <i className="fas fa-check-circle"></i>
                      <span>Giao hàng nhanh 60 phút trong nội thành Hà Nội. Tp HCM.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product-details__bottom">
            <div className="title">
              Hình ảnh chi tiết<Link href={`/product/${product.slug}`}>{product.title}</Link>được chụp tại Shop giày Hào Nguyễn.
            </div>
            {
              product.productImage &&
              <ul className="product-images__list">
                {
                  product.productImage.map((product, index) => {
                    return (
                      <li
                        className="product-images__item"
                        key={index}
                      >
                        <img className="details" src={product.img} alt="" />
                      </li>
                    )
                  })
                }
              </ul>
            }
          </div>
        </div>
        <ProductRelate productList={productRelate} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const res = await productApi.getProductSlug(slug)
  const { product, relatedProducts } = res.data
  return {
    props: { products: product, relatedProducts }
  }
}


export default React.memo(ProductDetailsPage)
