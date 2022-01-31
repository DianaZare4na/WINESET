import React, {useState} from "react";

function Count (){
   
   //const product = ProductCard(props.product.name);

   const [count, setCount] = useState(1);

   const handleIncrement = () => {
      setCount(prevCount => prevCount + 1);
   };

   const handleDecrement = () => {
      setCount(prevCount => prevCount - 1);
   };
   
   return(
      <div className="div-count">
         <button className="decrement-increment" onClick={handleDecrement}>-</button>
         <div className="div-count-h5">{count}</div>
         {/*<input type="number" className="div-count-h5" value={count}/>*/}
         <button className="decrement-increment" onClick={handleIncrement}>+</button>
      </div>
   );
}
export default Count;