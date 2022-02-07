import React, {useState} from 'react';
import './modalBasket.css';
export default function ModalBasket({product}){
   const [active, setActive] = useState(true)
   return(
      <>
         <div className='modal-basket' className={active ? "modal-basket active" : "modal-basket"}>
            <div className="modal-content-basket">
               <header className='render-modal-basket-header'>
                  <h3 className='render-modal-basket-header-h3'>Добавлено в корзину</h3>
                  <button type="button" className="render-modal-basket-header-close" onClick={() => setActive(false)}>
                     <span>&times;</span>
                  </button>
               </header>
               <div className="render-modal-basket-body">
                  <p className="render-modal-basket-p">Товар<span>{product.name}</span><br/>успешно добавлен в список покупок</p>
                  <footer className="foote-buttons">
                     <button className="foote-buttons-in-basket" type="button">В корзину</button>
                     <button className="foote-buttons-in-checkout" type="button">оформить заказ</button>
                  </footer>
               </div>
            </div>
         </div>
      </>
   )
}