import React, {useState} from 'react';
import './age.css';
const Age = () => {
   const [active, setActive] = useState(true)
   return(
      <>
         <div  className='modal-age' className={active ? "modal-age active" : "modal-age"}>
            <div className="modal-content-age">
               <div className="modal-content-age-div">
                  <h2 className="modal-content-age-div-h2">Для доступа на сайт необходимо<br/> подтвердить возраст</h2>
                  <p className="modal-content-age-div-p">Сайт содержит информацию, не рекомендованную для лиц,
                     не достигших совершеннолетнего возраста. Сведения,
                     размещенные на сайте носят исключительно информационный
                     характр и предназначены только для личного использования.</p>
                  <button type='button'  onClick={() => setActive(false)}>мне исполнилось 18 лет</button>
               </div>
            </div>
         </div>
      </>
   )
}
export default Age;