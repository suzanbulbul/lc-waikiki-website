import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import { useDispatch } from 'react-redux'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation } from 'swiper/modules';

//Slice
import { addToFavorite } from '../store/Slice/FavoriteSlice'

//Toast
import toast from 'react-hot-toast';

//Icons
import { Favorite } from '../public/icons'

const Card = ({data, pages}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddFavorite = (event, product, productFeature) => {
    event.preventDefault();

    const selectedData = {
      id: '_' + Math.random().toString(36).substr(2, 9),
      title: productFeature.brandName,
      desc: productFeature.brandDesc,
      price: product.price,
      code: productFeature.features.productCode,
      image: product.image.data[0].attributes.url,
      url: `${router.pathname}/${(data.id)}`,
    };
    dispatch(addToFavorite(selectedData));
    toast.success("Sepete eklendi");
  };

  return (
    <div className="card">
      {data &&
        pages &&
        data.attributes.color.map(
          (color) =>
            color.enable && (
              <Link href={`${pages}/${data.id}`} key={color.id}>
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
                  <button
                    onClick={(event) =>
                      handleAddFavorite(event, color, data.attributes.attribute)
                    }
                    className="card-icon"
                  >
                    <Favorite />
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {data.attributes.attribute.brandName}
                  </h5>
                  <p className="card-desc">
                    {data.attributes.attribute.brandDesc}
                  </p>
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