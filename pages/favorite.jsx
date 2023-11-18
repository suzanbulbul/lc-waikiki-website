import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Slice
import { favoriteList } from '../store/Slice/FavoriteSlice'
import { removeToFavorite, removeAllFavorite } from '../store/Slice/FavoriteSlice'

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
  }, [selectedFavorites]);

  const handleRemoveFavorite = (event, product) => {
    event.preventDefault();
    dispatch(removeToFavorite(product.id));
  };

  useEffect(() => {
    if (!favorite) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [favorite]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <button onClick={() => dispatch(removeAllFavorite())}>
        Favorileri sil
      </button>
      {favorite.length > 0 ? (
        <div className="favorite">
          <div className="row">
            {selectedFavorites &&
              selectedFavorites.map((product) => (
                <div className="col-sm-12 col-md-6 col-lg-4" key={product.id}>
                  <div className="card">
                    <div
                      className="col-sm-12 col-md-6 col-lg-4"
                      key={product.id}
                    >
                      <div className="card">
                        <h1>test {product.id}</h1>
                        {/* <div>
                          {product.product.image?.data[0]?.attributes?.url ? (
                            <Link href="/">
                              <img
                                className="card-img-top"
                                src={
                                  product.product.image.data[0].attributes.url
                                }
                                alt="favori ürün resmi"
                              />
                            </Link>
                          ) : (
                            <div>Resim Yok</div>
                          )}
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
                        </div> */}
                      </div>
                    </div>
                    <div>
                      {product.product.image?.data[0]?.attributes?.url ? (
                        <Link href="/">
                          <img
                            className="card-img-top"
                            src={product.product.image.data[0].attributes.url}
                            alt="favori ürün resmi"
                          />
                        </Link>
                      ) : (
                        <div>Resim Yok</div>
                      )}
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
                    </div>
                  </div>
                </div>
              ))}
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