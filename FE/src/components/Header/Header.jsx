import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { HeartOutlined, LockOutlined, PhoneOutlined, SearchOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from "antd";
import Search from "antd/es/input/Search";
import { Link } from 'react-router-dom';
export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [showSubNav, setShowSubNav] = useState({ laptop: false, phone: false, accessories: false });
  const toggleSubNav = (category, state) => {
    setShowSubNav((prevState) => ({
      ...prevState,
      [category]: state,
    }));
  };
  const handleScroll = () => {
    if (window.scrollY > 350) {
      console.log(window.scrollY);
      setSticky(true);
    } else {
      if(window.scrollY == 0){
        setSticky(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div>
      <div className={`${styles.Navbar}`}>
        <div className={`${styles.First_Navbar} animate__animated  animate__fadeInDown`}>
          <div className={styles.Item}><UserOutlined />Tài khoản của tôi</div>
          <div className={styles.Item}><HeartOutlined />Danh sách yêu thích</div>
          <div className={styles.Item}><ShoppingOutlined />Thanh toán</div>
          <div className={styles.Item}><LockOutlined />Đăng nhập</div>
        </div>


        <div className={sticky ? `${styles.sticky}` : `${styles.stickydefaut}`}>
          <div className={styles.Mid_Navbar}>
            <div style={{ width: "25%" }} className='fw-bold fs-4'>
              {/* <img style={{ maxWidth: "100%" }} src={''} alt="logo" /> */}
              TL ELECTRONIC
            </div>

            <div className={styles.search_container}>
              <input type="text" className={styles.search_input} placeholder="Tìm kiếm..." />
              <button className={styles.search_button}><SearchOutlined /></button>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: '25%',
              }}
            >
              <div className='text-dark'>
                <PhoneOutlined
                  style={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    padding: "10px",
                    background: "#91caff",
                    marginRight: "10px",
                  }}
                  className={styles.Reverse}
                />
                <span>HN: 076 922 0162 - SG: 1900 636 648
                </span>
              </div>

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    background: "red",
                    textAlign: "center",
                    borderRadius: "50%",
                    width: 20,
                    height: 24,
                    position: "absolute",
                    top: -14,
                    right: -8,
                  }}
                >
                  2
                </div>
                <div>
                  <ShoppingCartOutlined className='fs-2' />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.Bottom_Navbar}>
            <div className={styles.nav_container}>
              <div className={styles.nav_item}>Trang chủ</div>
              <div
                className={styles.nav_item}
                onMouseEnter={() => toggleSubNav('laptop', true)}
                onMouseLeave={() => toggleSubNav('laptop', false)}
              >
                Laptop
                {showSubNav.laptop && (
                  <div className={styles.sub_nav}>
                    <div className={styles.sub_nav_item}>MacBook</div>
                    <div className={styles.sub_nav_item}>Dell</div>
                    <div className={styles.sub_nav_item}>HP</div>
                  </div>
                )}
              </div>
              <div
                className={styles.nav_item}
                onMouseEnter={() => toggleSubNav('phone', true)}
                onMouseLeave={() => toggleSubNav('phone', false)}
              >
                Điện thoại
                {showSubNav.phone && (
                  <div className={styles.sub_nav}>
                    <div className={styles.sub_nav_item}>iPhone</div>
                    <div className={styles.sub_nav_item}>Samsung</div>
                    <div className={styles.sub_nav_item}>Xiaomi</div>
                  </div>
                )}
              </div>
              <div
                className={styles.nav_item}
                onMouseEnter={() => toggleSubNav('accessories', true)}
                onMouseLeave={() => toggleSubNav('accessories', false)}
              >
                Phụ kiện
                {showSubNav.accessories && (
                  <div className={styles.sub_nav}>
                    <div className={styles.sub_nav_item}>Tai nghe</div>
                    <div className={styles.sub_nav_item}>Sạc</div>
                    <div className={styles.sub_nav_item}>Cáp</div>
                  </div>
                )}
              </div>
              <div className={styles.nav_item}>Liên hệ</div>
              <div className={styles.nav_item}>Hệ thống cửa hàng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
