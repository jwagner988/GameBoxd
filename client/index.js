import React from 'react'
import ReactDOM from 'react-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
  } from 'react-router-dom'
  import LogIn from './components/logIn.jsx'
  import SignUp from './components/signup.jsx'
  import App from './App.jsx'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        {/* <Outlet /> */}

            <Routes>
                <Route path='/' element={<App />}/>
                <Route path="logIn" element={<LogIn />}/>
                <Route path="signUp" element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)