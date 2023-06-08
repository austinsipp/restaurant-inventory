import { configureStore } from "@reduxjs/toolkit"
import inventoryReducer from '../features/receiveShipmentSlice'

export const store = configureStore({
    reducer: {
        inventory: inventoryReducer
    }
})