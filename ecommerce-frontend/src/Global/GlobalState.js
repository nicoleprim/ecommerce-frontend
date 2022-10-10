import React, { useState } from 'react'
import GlobalContext from './GlobalContext'
import Swal from 'sweetalert2'

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const addToCart = (productToAdd) => {
        const productFoundIndex = cart.findIndex((productInCart) => {
            return productInCart.name === productToAdd.name
        })
        if (productFoundIndex >= 0) {
            const newCart = [...cart]
            newCart[productFoundIndex].quantity += 1
            setCart(newCart)
            Toast.fire({
                icon: 'success',
                title: 'Produto adicionado ao carrinho'
              })
        } else {
            const newCart = [...cart]
            const newProduct = {
                name: productToAdd.name,
                price: productToAdd.price,
                quantity: 1
            }
            newCart.push(newProduct)
            setCart(newCart)
            Toast.fire({
                icon: 'success',
                title: 'Produto adicionado ao carrinho'
              })
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
            Toast.fire({
                icon: 'success',
                title: 'Produto removido do carrinho'
              })
        } else {
            const newCart = cart.filter((product) => {
                return product.name !== productToRemove.name
            })
            setCart(newCart)
            Toast.fire({
                icon: 'success',
                title: 'Produto removido do carrinho'
              })
        }
    }

    const removeItemToCart = (productRemove) => {
        const newCart = cart.filter((product) => {
            return product.name !== productRemove.name
        })
        setCart(newCart)
        Toast.fire({
            icon: 'success',
            title: 'Produto removido do carrinho'
          })
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