import React, {useState} from "react";
import { ProductCard } from "./ProductCard";
import { useParams } from "react-router-dom";
const ProductInBasket = props =>{
   
   const product = ProductCard(props.product.name);

   const [count, setCount] = useState(0);

   const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
   };

   const handleDecrement = () => {
      setCount(prevCount => prevCount - 1);
   };
   
   return(
      <div className="col-4">
         <p >{product} <span>-15%</span></p>
         <div>
         <div>
            <button onClick={handleDecrement}>-</button>
            <h5>Count is {count}</h5>
            <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={() => setCount(0)}>Reset</button>
         </div>
      </div>
   );
}
export default ProductInBasket;