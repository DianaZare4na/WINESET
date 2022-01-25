import React from "react";
import {FavoriteItem} from "./FavoriteItem";

export function FavoriteAll ({products, removeFromFavorite}) {



    return (
        <div>
            <h3>избранное </h3>
            <div>
                {products.map((p) => <FavoriteItem key={p.id} product={p} removeFromFavorite={removeFromFavorite} />)}
            </div>

        </div>
    );
}