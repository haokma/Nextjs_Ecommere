import React from 'react'
import { Select } from 'antd';
const { Option } = Select;
import filterSearch from '../../helpers/filterSearch'
import { useRouter } from 'next/dist/client/router';
const Filter = ({ sidebar, setSidebar, setSort, products, sort }) => {
  const router = useRouter()
  function handleChange(value) {
    setSort(value)
    filterSearch({ router, sort: value })
  }
  console.log(sort);
  return (
    <div className="filter">
      <div className="filter-left">
        <Select
          className="filter-left__select"
          onChange={handleChange}
          value={sort}
          defaultValue="''"
          showArrow={false}
          style={{
            minWidth: "180px"
          }}
        >
          <Option value="''">Sắp xếp theo giá tiền </Option>
          <Option value="price">Giá từ thấp đến cao</Option>
          <Option value="-price">Giá từ cao đến thấp</Option>
        </Select>
      </div>
      <div className="filter-right">
        <div className="filter-right__result">
          <span>Hiển thị tất cả {products.length} kết quả</span>
        </div>
        <div className="filter-right__button" onClick={() => setSidebar(!sidebar)}>
          <span>Tìm kiếm</span>
          <i className='bx bx-menu'></i>
        </div>
      </div>
    </div>
  )
}

export default Filter
