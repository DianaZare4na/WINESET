import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {FilterItem} from "./Filter.item";


export function Filter (){
    //let params = useParams();
    //console.log(params);


    const [fields, setFields] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    useEffect( () => {
            fetch("/api/product/getfields/")
                .then(res => {
                    // console.log(res);
                    return res.json();
                })
                .then(res => {
                    setFields(res);
                    setIsLoad(true);
                    console.log(res);
                })
                .catch(err =>
                    console.log(err))
        },
        []);

    if (!isLoad) return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Загрузка...</span>
        </div>
    );

    let key = 0;

    return (
        <form name="filter">
            {fields.map ( f=>
                <FilterItem key={"filterItemKey_" + (key++)} item={f}></FilterItem>
            )}
        </form>
    );
}