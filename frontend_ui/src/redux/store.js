import {configureStore,applyMiddleware} from "@reduxjs/toolkit"
import contactReducer from './features/contactSlice'
import thunk from 'redux-thunk'

export default  configureStore({
    reducer:{
        contact:contactReducer,
    }},
    applyMiddleware(thunk)
)

