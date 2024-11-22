import React, { Component } from 'react'
import { IoAlarmSharp } from "react-icons/io5";


export class Order extends Component {
    render () {
        return (
            <div className='item'>
                <img src = {this.props.item.image} width = {160} height = {160}></img>
                <p>{this.props.item.title}</p>
                <b>{this.props.item.price}$</b>
                <IoAlarmSharp  className = 'delete-cart' onClick={() => {this.props.onDelete(this.props.item.id); this.props.onCount(this.props.item.id)}}/>
            </div>
        )
    }
}

export default Order