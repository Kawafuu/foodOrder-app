import React from 'react';

const Cart = props =>{
    return(
        <div className={props.className}>
            {props.children}
        </div>
    );
}
export default Cart;