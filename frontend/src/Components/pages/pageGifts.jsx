import React from "react";
import {useEffect, useState} from "react";

function PageGifts(){
	const [isLoad, setIsLoad] = useState(true);
	if (!isLoad) return (
		<div className="d-flex justify-content-center">
         <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div>
	);

	return(
		<>
			<div>
            <div className="container"></div>
         </div>
		</>
	)

}
export default PageGifts;
