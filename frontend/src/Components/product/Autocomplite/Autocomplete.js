import React, {useState, useEffect} from "react";
import {AutocompleteCollection} from "./Autocomplete.collection";


export function Autocomplete(){

    const [searchString, setSearchString] = useState("");

    const [Items, setItems] = useState([]);


    const onChange = function (el) {
        setSearchString(el.target.value);
    }

    useEffect(() => {
        //console.log("Состояние_" + searchString);
        if (searchString.length < 2) return;
        fetch("http://localhost:3001/api/product/autocomplete?searchString=" + searchString)
            .then(res => {
            // console.log(res);
            return res.json()})
            .then(res => {
            // console.log(res)
            setItems(res)})
            .catch(err =>
            console.log(err))
    }, [searchString]
)

    return (
        <div>
            <input type="text" onChange={onChange}/>
            <AutocompleteCollection items={Items}></AutocompleteCollection>
        </div>
    )

}   