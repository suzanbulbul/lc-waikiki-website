import React from 'react'
import Link from 'next/link';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation } from 'swiper/modules';

const Card = ({data, pages}) => {
  return (
    <div className="card">
      {data &&
        pages &&
        data.attributes.color.map(
          (color) =>
            color.enable && (
              <Link href={`/${pages}/${data.id}`} key={color.id}>
                <div className="form-check form-check-inline p-0 m-0 w-100">
                  <div className="row">
                    <Swiper
                      centeredSlides={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={false}
                      modules={[ Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {color.image.data.map((image, index) => (
                        <SwiperSlide
                          key={index}
                          className="col-md-6 col-sm-12 mb-3"
                        >
                          <img
                            className="card-img-top"
                            src={image.attributes.url}
                            alt={image.attributes.name}
                            key={image.id}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.attributes.title}</h5>
                  <p className="card-desc">{data.attributes.desc}</p>
                  <b className="card-price">{color.price}</b>
                  {data.attributes.color.length > 1 && (
                    <div className="colors-area">
                      <span>{data.attributes.color.length} Renk</span>
                    </div>
                  )}
                </div>
              </Link>
            )
        )}
    </div>
  );
};

export default Card