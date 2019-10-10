import React from 'react';
import '../App.css'
const Nav = props =>{
    return(
        <div className="nav">
        <form onSubmit={props.onSubmit}>
            <input value={props.value} onChange={props.onChange} type="text"/>
        </form>
        <button onClick ={props.modeChange} className="btn-mode">{props.mode}</button>
        <button onClick = {props.cartClick} className={"btn-cart"}>Cart</button>
        </div>
    );
}

export default Nav;