import React from 'react';
import './modalBasket.css';
export default function Modalfavorite({product}){
   return(
      <>
         <div className='modal-favorite'>
            <div className="modal-content-basket-favorite">
               <div className="render-modal-basket-body">
                  <p className="render-modal-basket-p">Товар<span>{product.name}</span><br/>успешно добавлен в Добавлено в избранное</p>
               </div>
            </div>
         </div>
      </>
   )
}