import React, { useEffect, useState } from 'react';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//API
import { getHome } from '../pages/api/home';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headerData = await getHome();
        if (headerData) {
          setData(headerData);
        }
      } catch (error) {
        console.error("API verileri alınırken hata oluştu:", error);
      }
    };

    fetchData();
  }, [getHome]);

  return (
    <div>
      {data && (
        <>
          <div className="row">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {data.marketplace1.map((item, index) => (
                <SwiperSlide key={index} className="col-md-6 col-sm-12 mb-3">
                  <a href={item.url}>
                    <img
                      src={item.img.data.attributes.url}
                      alt={item.altText}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="row mt-1">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {data.marketplace2.map((item, index) => (
                <SwiperSlide key={index} className="col-md-6 col-sm-12 mb-3">
                  <a href={item.url}>
                    <img
                      src={item.img.data.attributes.url}
                      alt={item.altText}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="row mt-5">
            {data.banner.map((item, index) => (
              <div key={index} className="col-md-6 col-sm-12 mb-3">
                <a href={item.url}>
                  <img src={item.img.data.attributes.url} alt={item.altText} />
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
