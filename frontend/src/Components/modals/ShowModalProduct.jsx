import React, {useEffect} from 'react';

export default function ShowModalProduct(props) {
   useEffect(() => {
      const timeoutId = setTimeout(props.hideAlert, 3000);
      return () => clearTimeout(timeoutId);
   }, [props.text]);

   return (
      <div className="show-alert">{props.text}</div>
   );
}