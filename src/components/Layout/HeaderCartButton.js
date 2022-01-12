// import { Fragment } from "react";
import react,{ useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) =>{

    //using useContext here for updating badge(count of cart items)
    const cartCtx=useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
        return curNumber + item.amount;
    },0);



    const setOnClick = () => {
        props.check.onClickingCart();
    }

    return (
        <button className={classes.button} onClick={setOnClick}>
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