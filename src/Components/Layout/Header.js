import { Fragment } from "react"
import classes from "./Header.module.css"
import mealsImage from '../../assets/meals.jpg'
import HeaderCardButton from "./HeaderCardButton"


const Header=(props)=>{
    return ( <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
           <HeaderCardButton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="food"></img>
        </div>
        </Fragment>
    )
}
export default Header








// if (action.type === 'ADD') {
//     let bool = prevState.items.find((item)=>{
//       if(item.id === action.item.id){
//         return true;
//       }
//     })
//     console.log(bool)
//     let updatedItems = [];
//     if(bool === undefined){
//       updatedItems = prevState.items.concat(action.item);
//     } 
//     else {
//       updatedItems = prevState.items;
//     }