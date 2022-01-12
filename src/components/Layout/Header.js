import React from 'react';
import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {

    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton check={props}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A place where where your tommy thrive'></img>
        </div>
    </Fragment>
    
};

export default Header;
