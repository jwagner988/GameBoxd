import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

const LogIn = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault()

        console.log('input', username, password)
        const logInInfo = {
            username: username,
            password: password
        }

        fetch('/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(logInInfo)
        })
        .then(response => response.json())
        .then(data => {
            console.log('success', data)
        })
        .catch((err) => {
            console.log('err', err)
        })
    }


    return (
        <div id='logInPage'>
            <input required onChange={(e) => setUsername(e.target.value)}></input>
            <p>Username</p>
            <input required onChange={(e) => setPassword(e.target.value)}></input>
            <p>Password</p>

            <button type='button' onClick={handleClick}>Submit</button>
        </div>
    )
}

export default LogIn