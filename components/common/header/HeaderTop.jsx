import React from 'react'
import Link from 'next/link';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

//Icons
import {  CreditCard, OrderTrack } from "../../../public/icons"

const HeaderTop = () => {
  return (
    <div className="header_top bg-body-tertiary">
    <div className="container-fluid">
      <div className="d-flex justify-content-md-between justify-content-sm-center align-items-center">
        <section className="header-marketing-management">
          <Swiper
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide key="1">
              <p>Binlerce Marka Tek Tıkla LC Waikiki’de</p>
            </SwiperSlide>
            <SwiperSlide key="2">
              <p>
                LC Waikiki Kalite ve Güvencesi - 100 Bine Varan Ürün
                Üzerinde 275 Farklı Kalite ve Güvenlik Testi
              </p>
            </SwiperSlide>
            <SwiperSlide key="3">
              <p>
                İlk Siparişini Mobil Uygulamadan Ver, 185 TL İndirim Kazan.
                Detaylar Yardım Sayfasında!
              </p>
            </SwiperSlide>
          </Swiper>
        </section>
        <div className="d-none d-lg-block">
          <ul className="d-flex justify-content-between align-items-center">
            <li className="nav-link-item">
              <Link
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <CreditCard className="icon" />
                Hediye Kartı Satın Al
              </Link>
            </li>
            <li className="nav-link-item  ">
              <Link
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <OrderTrack className="icon" />
                Sipariş Takip
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeaderTop