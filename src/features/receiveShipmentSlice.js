import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    error: '',
    cups: {
        quantity: 10
    }
}

export const receiveShipmentSlice = createSlice({
    name:'inventory',
    initialState,
    reducers: {
        receive: (state, action) => {
            const {itemName, quantity} = action.payload
            let newState = state
            /*Object.keys(state).forEach((key) => {
                if( key === itemName) {
                    state[itemName].quantity += quantity
                } else {
                    state[itemName]={quantity}
                }
            })*/
            /*if (state[itemName]) {
                state[itemName].quantity += quantity
            } else {
                state[itemName]={quantity}
            }*/
            if (newState[itemName]) {
                newState[itemName].quantity += quantity
            } else {
                newState[itemName]={quantity}
            }
            return newState
        },
        use: (state, action) => {
            const {itemName, quantity} = action.payload
            let newState = state
            if (newState[itemName] && newState[itemName].quantity >= quantity) {
                newState[itemName].quantity -= quantity
            } else {
                newState.error = `You only have ${newState[itemName].quantity} ${itemName}, you cannot remove more than that from inventory!`
            }
            return newState
        },
        acknowledgeError: (state) => {
            return{...state, error:''}
        }
    }
})

export const {receive, use, acknowledgeError} = receiveShipmentSlice.actions
export default receiveShipmentSlice.reducer