// import React, {useState, useEffect} from "react";
import {AutocompleteItem} from "./Autocomplete.item";
import './autocompliteCollection.css';

export function AutocompleteCollection (props){

    const items = props.items;


   
    return (
        <ul className="ulautocompletecollection" id="ulautocompletecollection">
            {
                items.map( item => 
                <AutocompleteItem key={item._id} item={item}></AutocompleteItem>
           )}
        </ul>
)

}