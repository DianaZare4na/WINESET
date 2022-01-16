import React, { useState, useEffect } from "react";
import {AutocompleteCollection} from "../product/Autocomplite/Autocomplete.collection"

import "./SearchBar.css";

function SearchBar() {


	const [searchString, setSearchString] = useState("");

	const [Items, setItems] = useState([]);


	const onCange = function (el) {
		 setSearchString(el.target.value);
	}

	useEffect(() => {
		//  console.log("Состояние_" + searchString);

		 fetch("http://localhost:3001/api/product/autocomplete?searchString=" + searchString)
			  .then(res => {
			//   console.log(res);
			  return res.json()})
			  .then(res => {
			//   console.log(res);
			  setItems(res)})
			  .catch(err =>
			  console.log(err))
	}, [searchString]
)

	return (
		<>
		 
		<label className="inputsearch">
 			<input type="text" onChange={onCange} placeholder="Найти напиток..."/>
		</label>
		<AutocompleteCollection items={Items}></AutocompleteCollection>

	  </>
	);
}

export default SearchBar;
