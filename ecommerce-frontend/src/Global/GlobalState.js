import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import useRequestData from '../Hooks/useRequestData'

const GlobalState = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (productToAdd) => {
        const productFoundIndex = cart.findIndex((productInCart) => {
            return productInCart.name === productToAdd.name})
        if (productFoundIndex >= 0) {
            const newCart =  [...cart ]
            newCart[productFoundIndex].quantity += 1
            setCart(newCart)
        } else {
            const newCart = [...cart ]
            const newProduct = {
                name: productToAdd.name,
                price: productToAdd.price,
                quantity: 1
            }
            newCart.push(newProduct)
            setCart(newCart)
        }
    }

    const Provider = GlobalContext.Provider

    const values = {
        cart,
        setCart,
        addToCart
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState