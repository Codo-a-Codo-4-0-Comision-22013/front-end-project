import React from "react";
import MediaCard from "./MediaCard";
import { data } from "../../data";

const ItemList = () => {
    return(
        data.map(item => (
            <MediaCard
            key={item.id}
            item={item}/>
        ))
    )
}

export default ItemList;