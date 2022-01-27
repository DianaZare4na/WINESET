import React from "react";
import {FavoriteItem} from "./FavoriteItem";

export function FavoriteAll ({products, removeFromFavorite}) {



   return (
      <div className="modal fade" id="FavoriteAll" tabindex="-1" aria-labelledby="FavoriteAllLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content ">
         <div className="modal-header">
            <h5 className="modal-title">Ваш список желаний</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
         {products.length ? (
            <>
                  <div className="modal-body " >
                  <div>
                     {products.map((p) => <FavoriteItem key={p.id} product={p} removeFromFavorite={removeFromFavorite} />)}
                  </div>
               </div>
               <div className="modal-footer modal-futer-div">
                  <hr/>
                  <div className="">
                     <button type="button" className="btn btn-primary" onClick={close}><Link to="/checkout">Оформить заказ</Link></button>
                  </div>
               </div>
               </>
            ) : (
                  <p>Вы пока ничего не выбрали</p>
            )}
      </div>
      </div>
      </div>
   );
}