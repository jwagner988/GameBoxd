import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const mapStateToProps = (state) => ({
    user: state.user,
})

const App = (props) => {
    
    const navigate = useNavigate()
useEffect(() => {
    if (props.user.isAuthenticated !== true){
        navigate('/login')

    }
    
}, [])

return (
    <div>
        <p>this is the homepage</p>
    </div>
)
}

export default connect(mapStateToProps, null)(App)