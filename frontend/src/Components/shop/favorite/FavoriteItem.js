import React from "react";

export function FavoriteItem ({product, removeFromFavorite}) {

    const remove = () => {
      removeFromFavorite(product)
    }


    return (
        <div>

            {product.name}
            <span onClick={remove}>-</span>
        </div>
    );
}