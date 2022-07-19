import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogIn from './logIn'
import { connect } from 'react-redux'

const SignUp = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')

    
    const handleClick = (e) => {
        e.preventDefault()

        if (password != passwordConfirm) window.alert('Passwords must match!')
        
        const signUpInfo = {
            username: username,
            password: password,
            email: email,
            date: date
        }
        console.log(signUpInfo)
    
    }

    return (
        <div>
            <h3>Sign up for GameBoxd :D</h3>
            <p>Username</p>
            <input id='signUpUsernameInput' onChange={(e) => setUsername(e.target.value)} required></input>
            <p>Password</p>
            <input id='signUpPasswordInput' onChange={(e) => setPassword(e.target.value)} required></input>
            <p>Confirm Password</p>
            <input id='signUpPasswordConfirmInput' onChange={(e) => setPasswordConfirm(e.target.value)} required></input>
            <p>Email Address</p>
            <input id='signUpEmailInput' onChange={(e) => setEmail(e.target.value)} required></input>
            <br></br>
            <br></br>

            <input type='date' id='signUpDateInput' onChange={(e) => setDate(e.target.value)} required></input>

            <button onClick={handleClick}>Submit</button>
        </div>
    )
}


export default SignUp