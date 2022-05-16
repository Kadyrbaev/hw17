
import { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart=(props)=>{
    
    const context = useContext(CartContext)
    const sum = context.totalAmount.toFixed(2)


    return <Modal onCloseCart={props.onCloseCart}>
       
        <div className={classes.total}>
            <span>Total Amount
            </span>
            <div>
            <b>Total price:</b>
            <span className={classes.pricecard}>{sum}</span>  
            </div>
        </div>
        <div className={classes.rendtotal}>
            <div>
            {context.items.length === 0 ? (
                <h2 className={classes.svet}>Сиздин карта пустой. Товар танданыз.!</h2>
            ) : context.items.map((el)=>(
                <div className={classes.rendtitle}>
                    <h2 className={classes.svet}>{el.name}</h2>
                    <div  className={classes.price}>
                    <h3>Price:</h3>
                    <h4> ${el.price}</h4>
                    </div>
                </div>
            ))}
            </div>
        
        </div>
        <div className={classes.actions}>
            <button onClick={props.onCloseCart} className={classes["button--alt"]}>Close</button>
            <button className={classes.button}>Open</button>
        </div>
    </Modal>
}
export default Cart