import React from "react";
import { Link } from "react-router-dom";
import './styleError.css';
import coc from "./cocktail.png";
 export default class PageError extends React.Component {

     constructor(props) {
         super(props); //


         this.state = {
             error: null,
             isLoaded: true,
             items: []
         }

     }

     render(){
         if(this.state.error) return this.renderError(); //   -
         if(!this.state.isLoaded) return this.renderLoading(); //
         return this.renderData();
     }

     //
     renderData(){
         return (
             <div className ="row">
                 <div className="col-10 offset-1 bg-error">
                    <div className ="img-error-div"><img src={coc}/></div>
                    <div className ="text-error-div">
                       <h2>404</h2>
                       <h3>Упссс, похоже, <br/>страничка не найдена</h3>
                       <button className ="btn btn-primary" type="button"><Link to="/">на главную</Link></button>
                    </div>
                 </div>
             </div>
         );
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


    renderError(){
         return (
             <div className="alert alert-danger" role="alert">
                 Error: {this.state.error.message}
             </div>
         );
     }
 }
