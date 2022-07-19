import {  applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index.js'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore({
    reducer: reducers,
    composedEnhancer
})

export default store