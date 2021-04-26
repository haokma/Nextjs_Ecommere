import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <ul className="footer-list">
            <li className="footer-list__item footer-list__item--title">
              HỆ THỐNG CỬA HÀNG
            </li>
            <li className="footer-list__item">
              <Link href="/">Địa chỉ: Số 16 Ngõ 58 Trần Bình, Mai Dịch, Cầu Giấy, HN</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Số điện thoại: 0964572402</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Email: hao2016vt@gmail.com</Link>
            </li>

          </ul>
          <ul className="footer-list">
            <li className="footer-list__item footer-list__item--title">
              HỖ TRỢ
            </li>
            <li className="footer-list__item">
              <Link href="/">Hướng dẫn chọn cỡ giày</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Chính sách đổi trả/ hoàn tiền</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Chính sách bảo mật thông tin</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Chính sách bảo hành</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Hướng dẫn mua hàng</Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-list__item footer-list__item--title">
              LIÊN HỆ VỚI SHOP
            </li>
            <li className="footer-list__item">
              <Link href="/">Hướng dẫn đặt hàng</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Thông tin thanh toán</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Chính sách giao hàng và nhận hàng</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Liên hệ</Link>
            </li>
            <li className="footer-list__item">
              <Link href="/">Sơ đồ website</Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-list__item footer-list__item--title">
              CONTACT US
            </li>
            <li className="footer-list__item footer-list__item--flex">
              <span>
                <i className='bx bxs-edit-location' ></i>
              </span>
              159/3 Chợ Phùng Khoang Hà Đông Hà Nội
            </li>
            <li className="footer-list__item footer-list__item--flex">
              <span><i className='bx bx-envelope-open'></i></span>
              nguyenchihao2001vt@gmail.com
            </li>
            <li className="footer-list__item footer-list__item--flex">
              <span><i className='bx bxs-phone' ></i></span>
              0964572402
            </li>
            <li className="footer-list__item footer-list__item--flex">
              <span><i className='bx bxs-edit-location' ></i></span>
              Hà Nội, VN
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
