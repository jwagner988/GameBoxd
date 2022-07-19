import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUserLogin } from '../reducers/userReducer'



const mapDispatchToProps = dispatch => ({
    verifyUser: (logInInfo, navigate) => {
        const thunkFunc = fetchUserLogin(logInInfo, navigate)
        dispatch(thunkFunc)
    }
})

const LogIn = (props) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault()

        console.log('input', username, password)
        const logInInfo = {
            username: username,
            password: password
        }

        props.verifyUser(logInInfo, navigate)
    }


    return (
        <div id='logInPage'>
            <input required onChange={(e) => setUsername(e.target.value)}></input>
            <p>Username</p>
            <input required type='password' onChange={(e) => setPassword(e.target.value)}></input>
            <p>Password</p>

            <button type='button' onClick={handleClick}>Submit</button>
            <p>Don't have an account yet? Click <Link to='../signUp'>here</Link> to sign up</p>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(LogIn)