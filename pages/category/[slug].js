import { Pagination } from 'antd'
import { useRouter } from 'next/dist/client/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Filter from '../../components/Filter'
import Layout from '../../components/Layout'
import ProductItem from '../../components/ProductItem'
import Sidebar from '../../components/Sidebar'
import { URL_API } from '../../constants'
import filterSearch from '../../helpers/filterSearch'
import productApi from '../../lib/productApi'
const Category = ({ products, total }) => {
  const router = useRouter()
  const [sidebar, setSidebar] = useState(false)
  const [sort, setSort] = useState(router.query.sort)
  const [page, setPage] = useState(router.query.page)
  const [totalPage, setTotalPage] = useState(total)
  const timeRef = useRef(null)
  const [value, setValue] = useState({
    min: router.query.minPrice ? router.query.minPrice : 200000,
    max: router.query.maxPrice ? router.query.maxPrice : 1500000
  })
  useEffect(() => {
    if (total) {
      setTotalPage(total)
    }
    if (total < page || !total) {
      console.log("Hi");
      filterSearch({ router, page: 1 })
      setPage(1)
    }
    if (!total) {
      setTotalPage(0)
    }
  }, [total])
  const onClickPagination = useCallback((page) => {

    console.log(page);
    setPage(page)
    filterSearch({ router, page: page })
  })
  const handlePrice = (e) => {
    const { min, max } = e
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
    timeRef.current = setTimeout(() => {
      filterSearch({ router, minPrice: min, maxPrice: max })

    }, 500)

    setValue({
      min, max
    })
  }
  return (
    <Layout title="Category Detail">
      <div className="shop">
        <div className="container">
          <div className="shop__heading">
            <Filter
              sidebar={sidebar}
              setSidebar={setSidebar}
              setSort={setSort}
              sort={sort}
              products={products}
            />
            <Sidebar
              sidebar={sidebar}
              handlePrice={handlePrice}
              value={value}
            />
            {
              products.length ? <div className="shop__content">
                <div className="row">
                  {
                    products.map((product, index) => {
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
                    })
                  }
                </div>
              </div>
                : <div>Không có sản phẩm nào phù hợp</div>
            }
            {totalPage > 1 &&
              <div className="pagination-antd">
                <Pagination
                  onChange={(page) => onClickPagination(page)}
                  defaultCurrent={page}
                  total={totalPage * 10} />
              </div>
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Category



export const getServerSideProps = async (context) => {
  const { slug } = context.params
  const { query } = context
  const limit = 8
  const sort = query.sort || ''
  const page = query.page || 1
  const minPrice = query.minPrice || 200000
  const maxPrice = query.maxPrice || 1500000
  const url = `${URL_API}/products/${slug}?limit=${limit}&page=${page}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}`
  let products = [], totalPage = 1
  try {
    const res = await productApi.getProductCategorySlug(url)
    products = res.data.products
    totalPage = res.data.totalPage
    return {
      props: { products, total: totalPage }
    }
  }
  catch (err) {
    return {
      props: {
        products: [],
        totalPage: 1
      }
    }
  }

}

