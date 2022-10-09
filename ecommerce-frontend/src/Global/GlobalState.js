import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import useRequestData from '../Hooks/useRequestData'

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (productToAdd) => {
        const productFoundIndex = cart.findIndex((productInCart) => {
            return productInCart.name === productToAdd.name
        })
        if (productFoundIndex >= 0) {
            const newCart = [...cart]
            newCart[productFoundIndex].quantity += 1
            setCart(newCart)
        } else {
            const newCart = [...cart]
            const newProduct = {
                name: productToAdd.name,
                price: productToAdd.price,
                quantity: 1
            }
            newCart.push(newProduct)
            setCart(newCart)
        }
    }

    const removeFromCart = (productToRemove) => {
        if (productToRemove.quantity > 1) {
            const newCart = cart.map((product) => {
                if (product.name === productToRemove.name) {
                    product.quantity -= 1
                }
                return product
            })
            setCart(newCart)
        } else {
            const newCart = cart.filter((product) => {
                return product.name !== productToRemove.name
            })
            setCart(newCart)
        }
    }

    const removeItemToCart = (productRemove) => {
        const newCart = cart.filter((product) => {
            return product.name !== productRemove.name
        })
        setCart(newCart)
    }

    const calculateTotal = () => {
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        setTotal(total)
    }

    const clearCart = () => {
        setCart([])
    }

    const Provider = GlobalContext.Provider

    const values = {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        removeItemToCart,
        calculateTotal,
        clearCart,
        total,
        setTotal
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState