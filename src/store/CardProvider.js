
import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  cart: [],
  totalAmount: 0,
  summa: 0,
};

const cartReducer = (prevState, action) => {

if (action.type === 'ADD') {

   const cartTotal = prevState.cart.concat(action.item);

   const updatedTotalAmount =
     prevState.totalAmount + action.item.price * action.item.amount;

  let title = prevState.items.find((item)=>{
    if(item.id === action.item.id){
      return prevState.items + item.id;
    }

  })
 
  
  let updatedItems = null
     
  if(title === undefined){
    updatedItems = prevState.items.concat(action.item);
  } 
  else {
    updatedItems = prevState.items;
  }
  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
    cart:cartTotal,

  };
}

return defaultCartState;
};


const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };
  const removeItemFromCartHandler = () => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    cart: cartState.cart,
    summa: cartState.summa,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider

