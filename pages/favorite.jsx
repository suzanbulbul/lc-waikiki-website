import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

//Slice
import {favoriteList} from '../store/Slice/FavoriteSlice'

//Components
import EmptyContent from '../components/common/EmptyContent';
import Loading from '../components/loading';

//LottieFiles
import EmptyFavorite from "../public/animations/empty-favorite.json";

//Icons
import { Dustbin } from "../public/icons/index";

const Favorite = () => {
  const selectedFavorites = useSelector(favoriteList);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!selectedFavorites) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [selectedFavorites]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {selectedFavorites.length > 0 ? (
        <div className="favorite">
          <div className="row">
            {selectedFavorites &&
              selectedFavorites.map((product) => (
                <div className="col-sm-12 col-md-6 col-lg-4" key={product.id}>
                  <div className="card">
                    <Link href={product.url}>
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt="favori product img"
                      />
                      <Dustbin className="card-icon" />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-desc">{product.desc}</p>
                        <b className="card-price blue">{product.price}</b>
                        <div className="primary-button mt-4">SEPETE EKLE</div>
                      </div>
                    </Link>
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