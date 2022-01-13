// import { Fragment } from "react";
import react,{ useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) =>{

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);    
    //using useContext here for updating badge(count of cart items)
    const cartCtx=useContext(CartContext);
    console.log(cartCtx);

    // getting items out of cartCtx using destructuring

    const {items} = cartCtx;

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
        return curNumber + item.amount;
    },0);

    // class to add for animation
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump:''}`;

    // using useeffect for managing btnIsHighlighted for animation

    useEffect(() => {
        if(items.length === 0)
        {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        },100);

        return () => {
            clearTimeout(timer);
        };

    },[items]);

    const setOnClick = () => {
        props.check.onClickingCart();
    }

    return (
        <button className={btnClasses} onClick={setOnClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;