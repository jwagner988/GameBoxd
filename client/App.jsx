import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const App = (props) => {
    
    const navigate = useNavigate()
useEffect(() => {
        console.log('jfwoeijf')
        navigate('/login')
    
}, [])

return (
    <div>
        <p>this is the homepage</p>
    </div>
)
}

export default App