import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {receive} from '../features/receiveShipmentSlice'

export default function ReceiveShipment () {
    const currentInventory = useSelector(state => {
        return state.inventory
    })
    const dispatch = useDispatch()
    const [inputInventoryItems, setInputInventoryItems] = useState({itemName:'', quantity:0})

    const onNewInventorySubmit = (e) => {
        e.preventDefault()
        
        console.log(inputInventoryItems)
        dispatch(receive(inputInventoryItems))
        e.target.reset()
    }

    

    return <div>
        <p>Receive Shipment page</p>
        <form onSubmit={onNewInventorySubmit}>
            <label htmlFor='itemName'>Item Name:</label>
            <input onChange={(e) => {
                setInputInventoryItems({...inputInventoryItems, itemName:e.target.value})
                }} type="text" name='itemName' required/>
            <label htmlFor='quantity'>Quantity:</label>
            <input onChange={(e) => {
                setInputInventoryItems({...inputInventoryItems, quantity:Number(e.target.value) })
            }
            } type="number" name='quantity' required/>
            <button type='submit'>Submit</button>
        </form>
    </div>
}