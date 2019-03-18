import React from 'react';

import classes from './NavigationItems.css';
import NavigatiomItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigatiomItem link='/' active>Burger Builder</NavigatiomItem>
        <NavigatiomItem link='/'>Checkout</NavigatiomItem>
    </ul>
);

export default navigationItems