import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import { useDispatch, useSelector } from 'react-redux'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation } from 'swiper/modules';

//Slice
import { addToFavorite, favoriteList } from '../store/Slice/FavoriteSlice'

//Helpers
import { isProductAdd } from '../public/helper/isProductAdd'

//Toast
import toast from 'react-hot-toast';

//Icons
import { Favorite } from '../public/icons'

const Card = ({data, id, pages}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const favList = useSelector(favoriteList);

  const handleAddFavorite = (event, product, productFeature) => {
    event.preventDefault();

    const selectedData = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      size: 0,
      amount: 0,
      product: product,
      productContent: productFeature,
      url: `${router.pathname}/${data.id}`,
    };

    if (favList.length > 0 ){

      const compareProduct = isProductAdd(favList, selectedData);

      if (compareProduct) {
        return toast.error("Ürün zaten favorilerde.");
      }else {
        dispatch(addToFavorite(selectedData));
        return toast.success("Ürün favorilere eklendi.");
      }
      }
    else{
      dispatch(addToFavorite(selectedData));
      toast.success("Ürün favorilere eklendi.");
    }

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