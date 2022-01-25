export function ProductCatalogItem ({product, putToBasket, putToFavorite}) {
   const putFavorite = function () {
      putToFavorite(product)
   }
    const put = function () {
        putToBasket(product)
    }
    

    return (
        <div>
            Элемент продукта
            <div>{product.name}</div>
            <img src={product.image}/>
            <span onClick={put}> put </span>
            <span onClick={putFavorite}> puttofavorite </span>
        </div>

    )
}