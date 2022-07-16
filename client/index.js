import React from 'react'
import ReactDOM from 'react-dom'
import store from './store.js'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <div>
            <p>here be an app :)</p>
            <h1>its gunna be such a good app :)</h1>
        </div>
    </Provider>,
    document.getElementById('root')
)