import Link from 'next/link';
import React, { useEffect, useState } from 'react'

//API
import { getSkirts } from '../pages/api/skirts'; 

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation } from 'swiper/modules';

//Components
import EmptyContent from '../components/common/EmptyContent';

//LottieFiles
import EmptyFavorite from "../public/animations/empty-favorite.json";

//Icons
import { Dustbin } from "../public/icons/index";

const Favorite = () => {
  const [favorite, setFavorite] = useState(true);

  const [favorites, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const apiData = await getSkirts();

      if (apiData) {
        setData(apiData);
      }
    };

    fetchDataFromApi();
  }, [favorites]);

  return (
    <div>
      {favorite === false ? (
        <EmptyContent
          title="Favori Ürününüz Yok."
          desc="Favorilerinize ürün eklemediniz, tek yapmanız gereken ürün görsellerinin üzerindeki küçük kalp ikonuna tıklamak."
          animationData={EmptyFavorite}
        />
      ) : (
        <div className="favorite">
          <div className="row">
            {favorites &&
              favorites.map((data) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4 bg-white" key={data.id}>
                    <div className="card">
                      {data &&
                        data.attributes.color.map(
                          (color) =>
                            color.enable && (
                              <Link href="/" key={data.id}>
                                <div className="form-check form-check-inline p-0 m-0 w-100">
                                  <div className="row">
                                    <Swiper
                                      centeredSlides={true}
                                      pagination={{
                                        clickable: true,
                                      }}
                                      navigation={false}
                                      modules={[Pagination, Navigation]}
                                      className="mySwiper swiper-pagination_line"
                                    >
                                      {color.image.data.map((image, index) => (
                                        <SwiperSlide
                                          key={index}
                                          className="col-md-6 col-6 mb-3"
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
                                  <Dustbin className="card-icon" />
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {data.attributes.attribute.brandName}
                                  </h5>
                                  <p className="card-desc">
                                    {data.attributes.attribute.brandDesc}
                                  </p>
                                  <b className="card-price blue">{color.price}</b>
                                  <div className="primary-button mt-4">
                                    SEPETE EKLE
                                  </div>
                                </div>
                              </Link>
                            )
                        )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorite