import React from "react";

class Storage extends React.Component {

      constructor(props) {
         super(props);
         this.state = {
            products: [],
            basket:[],
            favorite:[],
            isLoaded: false,
            user: {}
         }

         if(localStorage.getItem("basket")){
            this.state.basket = JSON.parse(localStorage.getItem("basket"));
         }
         else if(localStorage.getItem("favorite")){
           this.state.favorite = JSON.parse(localStorage.getItem("favorite"));
         }
      }
      renderLoading(){
         return (
               <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                     <span className="sr-only">Loading...</span>
                  </div>
               </div>
         )
      }

      // Загрузка данных с сервера
      fetchProducts(){
      fetch("/api/product")
      .then(response => response.json())
      .then (products => {
            this.setState({
               isLoaded: true,
               products: products
            });
      })
      .catch(err => {
            this.setState({error: err});
      });
      }


      // Положить в корзину
      putToBasket(product){
         const basket = this.state.basket;
         basket.push(product);
         this.setState({basket: basket});
         localStorage.setItem("basket", JSON.stringify(basket))
      }

      removeFromBasket(product){
         const basket = this.state.basket;
         basket.splice(basket.findIndex(p => p===product), 1);
         this.setState({basket: basket});
         localStorage.setItem("basket", JSON.stringify(basket))
      
      }

      // Проверить наличие в корзине
      inBasket(product){
         if( this.state.basket.find(product)  ) return true;
         return false;
      }

      //Положить в избранное
      putToFavorite(product){
         const favorite = this.state.favorite;
         favorite.push(product);
         this.setState({favorite: favorite});
         localStorage.setItem("favorite", JSON.stringify(favorite))
      }
      //удалить из избранного
      removeFromFavorite(product){
      const favorite = this.state.favorite;
      favorite.splice(favorite.findIndex(p => p===product), 1);
      this.setState({favorite: favorite});
      localStorage.setItem("favorite", JSON.stringify(favorite))
      }
      
      // Проверить наличие в избранном
      inFavorite(product){
      if( this.state.favorite.find(product)  ) return true;
      return false;
      }

   }

export default Storage;