import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {use, acknowledgeError} from '../features/receiveShipmentSlice'




export default function UseInventory () {
    const currentInventory = useSelector(state => {
        return state.inventory
    })
    const dispatch = useDispatch()
    const [useInventoryItems, setUseInventoryItems] = useState({itemName:'', quantity:0})
    const onUseInventorySubmit = (e) => {
        e.preventDefault()
        console.log(useInventoryItems)
        dispatch(use(useInventoryItems))
        e.target.reset()
    }
    const onErrorAcknowledge = (e) => {
        console.log(`User acknowledged error message: ${currentInventory.error}`)
        dispatch(acknowledgeError())
    }
    return currentInventory.error !== '' ? 
        <div>
            <p>{currentInventory.error}</p>
            <button onClick={onErrorAcknowledge}>Acknowledge</button>
        </div>
        :
        <div>
        <p>Use Inventory page</p>
        <form onSubmit={onUseInventorySubmit}>
            <label htmlFor='itemName'>Item Name:</label>
            <input onChange={(e) => {
                setUseInventoryItems({...useInventoryItems, itemName:e.target.value})
                }} type="text" name='itemName' required/>
            <label htmlFor='quantity'>Quantity:</label>
            <input onChange={(e) => {
                setUseInventoryItems({...useInventoryItems, quantity:Number(e.target.value) })
            }
            } type="number" name='quantity' required/>
            <button type='submit'>Submit</button>
        </form>
    </div>
}