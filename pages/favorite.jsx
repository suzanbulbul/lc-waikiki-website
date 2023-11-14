import React from 'react'

//Components
import EmptyContent from '../components/common/EmptyContent';

//LottieFiles
import EmptyFavorite from "../public/animations/empty-favorite.json";

const Favorite = () => {
  return (
    <div>
        <EmptyContent
            title="Favori Ürününüz Yok."
            desc="Favorilerinize ürün eklemediniz, tek yapmanız gereken ürün görsellerinin üzerindeki küçük kalp ikonuna tıklamak."
            animationData={EmptyFavorite}
        />
    </div>
  )
}

export default Favorite