import React, { useEffect } from "react";

import {ProductCatalogItem} from "./ProductCatalogItem";

export function ProductCatalog ({products, putToBasket, putToFavorite}) {

    //const products = props.products;

    useEffect(() => {
    }, []);

    return (
        <div>
            {products.map((p) => <ProductCatalogItem key={p.id} product={p} putToBasket={putToBasket} putToFavorite={putToFavorite}/>)}
        </div>
    );
}