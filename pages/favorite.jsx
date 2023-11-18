import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Slice
import { favoriteList } from '../store/Slice/FavoriteSlice'
import { removeToFavorite } from '../store/Slice/FavoriteSlice'

//Components
import EmptyContent from '../components/common/EmptyContent';
import Loading from '../components/loading';

//LottieFiles
import EmptyFavorite from "../public/animations/empty-favorite.json";

//Icons
import { Dustbin } from "../public/icons/index";

const Favorite = () => {
  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState();
  const [loading, setLoading] = useState(true);

  const selectedFavorites = useSelector(favoriteList);

  useEffect(() => {
    setFavorite(selectedFavorites);
    setLoading(selectedFavorites.length === 0);
  }, [selectedFavorites]);

  const handleRemoveFavorite = (event, product) => {
    event.preventDefault();
    dispatch(removeToFavorite(product.id));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {favorite.length > 0 ? (
        <div className="favorite">
          <div className="row">
            {selectedFavorites &&
              selectedFavorites.map((product) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={product.id}>
                    <div className="card">
                      <Link href={`${product.url}`}>
                        <img
                          className="card-img-top"
                          src={product.product.image.data[0]?.attributes?.url}
                          alt="favori ürün resmi"
                        />
                        <button
                          onClick={(event) =>
                            handleRemoveFavorite(event, product)
                          }
                          className="card-icon me-2"
                        >
                          <Dustbin />
                        </button>
                        <div className="card-body">
                          <h5 className="card-title">
                            {product.productContent.brandDesc}
                          </h5>
                          <p className="card-desc">
                            {product.productContent.brandName}
                          </p>
                          <b className="card-price blue">
                            {product.product.price}
                          </b>
                          <button className="primary-button mt-4">
                            SEPETE EKLE
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <EmptyContent
          title="Favori Ürününüz Yok."
          desc="Favorilerinize ürün eklemediniz, tek yapmanız gereken ürün görsellerinin üzerindeki küçük kalp ikonuna tıklamak."
          animationData={EmptyFavorite}
        />
      )}
    </div>
  );
}

export default Favorite