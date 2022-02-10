//import React,{useEffect, useState} from "react";
//import "./wineCatalog.css";
//import {ProductCatalogItem} from "../../shop/products/ProductCatalogItem";

//function WineCategory({categories}){
  
//   const [category, setCategory] = useState({});
//   const [isLoad, setIsLoad] = useState(false);

  
//   useEffect( () => {
//         fetch("http://localhost:3001/api/category/getcategory")
//               .then(res => {
//                  console.log(res);
//                  return res.json()})
//               .then(res => {
//                  console.log(res);
//                  setCategory(res); 
//                  setIsLoad(true); 
//               })
//               .catch(err =>
//                  console.log(err))
//      },
//      []);
//      if (!isLoad) return (
//         <div className="spinner-border" role="status">
//               <span className="sr-only">Загрузка...</span>
//         </div>
//   );
   
//      return(
//         <>
//            <div>{category.name}</div>
//              <div className=" col-12 offset-0 col-sm-12 offset-sm-0 col-md-12 offset-md-0 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 product-catalog">
//                 {categories.map((category) => <li
//                 key={category.id} 
//                 category={category}
//                 ></li>)}
//               </div> 
//         </>
//      )
   
//   }
//export default WineCategory;

