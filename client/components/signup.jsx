import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogIn from './logIn'
import { connect } from 'react-redux'

// const mapDispatchToProps = dispatch => ({
//     submitUser: (signUpInfo, navigate) => {
//         const thunkFunc = fetchUserLogin(signUpInfo, navigate)
//         dispatch(thunkFunc)
//     }
// })

const SignUp = (props) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')

    
    const handleClick = (e) => {
        e.preventDefault()

        if (password != passwordConfirm) {
            return window.alert('Passwords must match!')

    }

        
        const signUpInfo = {
            username: username,
            password: password,
            email: email,
        }
        fetch('/auth/signUp', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(signUpInfo)
        })
        .then(response => {
            response.json()
            if (response.status === 200){
                return window.alert('account creation successful')
            } else return window.alert('account creation unsuccessful, please try again')
        })
        .catch((err) => {
            console.log('err', err)
        })
    
    }

    return (
        <div id='signUp'>
            <h3 id='signUpTitleText'>Sign up for GameBoxd :D</h3>
            <div id='inputs'>
            <p>Username</p>
            <input id='signUpUsernameInput' onChange={(e) => setUsername(e.target.value)} required></input>
            <p>Password</p>
            <input id='signUpPasswordInput' type='password' onChange={(e) => setPassword(e.target.value)} required></input>
            <p>Confirm Password</p>
            <input id='signUpPasswordConfirmInput' type='password' onChange={(e) => setPasswordConfirm(e.target.value)} required></input>
            <p>Email Address</p>
            <input id='signUpEmailInput' onChange={(e) => setEmail(e.target.value)} required></input>
            <br></br>
            </div>
            <button onClick={handleClick} id='signUpBtn'>Submit</button>
        </div>
    )
}


export default SignUp