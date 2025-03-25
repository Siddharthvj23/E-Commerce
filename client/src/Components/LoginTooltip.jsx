import React , { useState } from 'react'


const LoginTooltip = ({ children }) => {
    const[isLoggedIn] = useState(false)
    return (
        isLoggedIn ? children :
        children
    )
}

export default LoginTooltip