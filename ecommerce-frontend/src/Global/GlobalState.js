import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../Constants/urls'
import GlobalContext from './GlobalContext'
import useRequestData from '../Hooks/useRequestData'

const GlobalState = (props) => {
    const [cart, setCart] = useState([])

    const Provider = GlobalContext.Provider

    const values = {
        cart,
        setCart, 
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState