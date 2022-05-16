
import { Fragment, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './store/CardProvider';



function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCardHandler =()=>{
    setCartIsShown(true)
  }
  const hideCardHandler =()=>{
    setCartIsShown(false)
    let a = document.getElementById('arty')
    document.body.append(a)
    a.className='red'
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCardHandler}/>}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
