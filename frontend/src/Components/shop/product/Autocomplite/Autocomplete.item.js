import {Link} from "react-router-dom";

export function AutocompleteItem (props){

    // Строю SEO ссылку на основе того, что дают мне сеошники
    // если там пусто - строю ее по совему
    let slug;
    if (props.item.slug !== undefined && props.item.slug !== null)
        slug = props.item.slug;
    else {
        slug = encodeURI(props.item.name +"_" + props.item.vendor);
    }

    // Построенная ссылка
    let url = "/product/" + slug + "/" + props.item._id;

    return (
        <li>
            <Link to={url}>{props.item.name}</Link>
        </li>
    )

}