import { configureStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers.index.js'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore(
    reducers,
    composedEnhancer
)

export default store