import React from 'react';
import '../App.css'
const Item = props =>{
    return(
        <div className="item"
        onClick={props.onClick}
        >
        <img src={props.src} alt={props.alt}/>
        <div className="item-desc">
        <h1>{props.desc}</h1>
        <h1>{props.price}</h1>
        </div>
        </div>
    );
}

export default Item;