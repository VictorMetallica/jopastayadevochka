import React, {useState} from 'react'
import { TfiBrushAlt } from "react-icons/tfi";
import Order from './Order'


const showOrders = (props) => {
    return (
        <div>
            {props.orders.map(el => (
               <Order key = {el.id} item = {el} onDelete = {props.onDelete} /> 
            ))}
        </div>
    )
}

const showNothing = () => {
    return (
        <div>
            <h2>POKUPAI!!!!!</h2>
        </div>
    )
}


export default function Header(props) {

    let [cartOpen,setCartOpen] = useState(false)
  
    return(
        <header >
            <div className = "logo"> Shop</div>
            <ul className = "nav">  
            <li> <a href ="https://www.half-life.com/ru/home/">My own game</a></li>
            <li><a href ="https://weezer.com/">my children</a> </li>
            <li><a href ="https://www.arizona.edu">Arizona</a></li>
            <li className = {`shopcart ${cartOpen && 'active'}`}><TfiBrushAlt onClick = {() => setCartOpen(cartOpen=!cartOpen)}/></li>
            </ul>
             
                {cartOpen && (  
                    <div className="basket">
                        {props.orders.length >0 ? showOrders(props) :showNothing()}
                        
                        
                    </div>
                )}
        
            <div className = "presentation"></div>
        </header>
        
        
    )

}