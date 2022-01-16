import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import '../ProductCard/productcard.css';
export function ProductCard (){
    let params = useParams();
    const [product, setProduct] = useState({});
    const [isLoad, setIsLoad] = useState(false);
    console.log(params);
    useEffect( () => {
            fetch("http://localhost:3001/api/product/byid/" + params.id)
                .then(res => {
                    console.log(res);
                    return res.json()})
                .then(res => {
                    console.log(res);
                    setProduct(res);
                    setIsLoad(true);
                })
                .catch(err =>
                    console.log(err))
        },
        [params]);
		if (!isLoad) return (
			<div className="spinner-border" role="status">
				 <span className="sr-only">Загрузка...</span>
			</div>
	  );
	  let img = "http://localhost:3001" + product.image;
	  let img1 = "http://localhost:3001" + product.imageOne;
	  let img2 = "http://localhost:3001" + product.imageTwo;
	  let img3 = "http://localhost:3001" + product.imageThree;
    return (
		<div className="row">
			<div className="col-12"><a>ВЫБОР ПОКУПАТЕЛЕЙ</a></div>
			<div className="col-12"><h2>{product.name}</h2><div></div></div>
			<div className="col -12">
				<ul>
					<li>
						<ul>
							<li><img src={img1}/></li>
							<li><img src={img2}/></li>
							<li><img src={img3}/></li>
						</ul>
					</li>
					<li><img src={img}/></li>
					<li>
						<ul>
							<li>Рейтинг:</li>
							<li></li>
							<li></li>
							<li>Страна, регион: {product.country}</li>
							<li>Вино: {product.WineType}</li>
							<li>Сахар: {product.sugar}</li>
							<li>Виноград: {product.grape}</li>
							<li>Крепость: {product.fortress}</li>
							<li>Объем: {product.Value[0]}</li>
							<li><a>Смотреть все характеристики</a></li>
						</ul>
					</li>
					<li>
						<ul>
							<li><p></p></li>
							<li><div></div></li>
							<li><div></div></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
      
    )
}