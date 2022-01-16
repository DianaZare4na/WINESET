// import React from "react";
// // import HeaderPage from "../design/headerPage";

// export default class PageError extends React.Component {

//     constructor(props) {
//         super(props); //


//         this.state = {
//             error: null,
//             isLoaded: true,
//             items: []
//         }

//     }

//     render(){
//         if(this.state.error) return this.renderError(); //   -
//         if(!this.state.isLoaded) return this.renderLoading(); //
//         return this.renderData();
//     }

//     //
//     renderData(){
//         return (
//             <div>
//                 <HeaderPage title={"Error" + this.props.error}></HeaderPage>
//             </div>
//         );
//     }

//    renderLoading(){
//         return (
//             <div className="d-flex justify-content-center">
//                 <div className="spinner-border" role="status">
//                     <span className="sr-only">Loading...</span>
//                 </div>
//             </div>
//         )
//     }


//    renderError(){
//         return (
//             <div className="alert alert-danger" role="alert">
//                 Error: {this.state.error.message}
//             </div>
//         );
//     }
// }
