import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";


export function FilterItem (props){
    //let params = useParams();
    //console.log(params);



    return (
        <div>
        <input type="checkbox" name={props.item.name} /> <label>{props.item.name}</label>
        </div>
    );
}