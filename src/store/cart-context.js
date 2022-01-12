import React from "react";

const CartContext = React.createContext({
    items: [],   // for managing cart items
    totalAmount: 0,  // total amount 

    //function to update the context
    addItem: (item) => {},
    removeItem: (id) => {}

});

export  default CartContext;