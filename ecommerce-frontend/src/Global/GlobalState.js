import React, { useEffect, useState } from 'react'
import GlobalContext from './GlobalContext'
import Swal from 'sweetalert2'
import useRequestData from '../Hooks/useRequestData'
import { BASE_URL } from '../Constants/url'

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const products = useRequestData([], `${BASE_URL}products`)

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
            return productInCart.id === productToAdd.id
        })
        if (productFoundIndex >= 0) {
            const newCart = [...cart]
            if (productToAdd.qty_stock > newCart[productFoundIndex].quantity) {
                newCart[productFoundIndex].quantity += 1
                setCart(newCart)
                Toast.fire({
                    icon: 'success',
                    title: 'Produto adicionado ao carrinho'
                })
                localStorage.setItem("cart", JSON.stringify(newCart))
            } else {
                Toast.fire({
                    icon: 'error',
                    title: 'Quantidade máxima para este item atingida'
                })
            }
        } else {
            const newCart = [...cart]
            const newProduct = {
                id: productToAdd.id,
                name: productToAdd.name,
                price: productToAdd.price,
                quantity: 1,
                qty_stock: productToAdd.qty_stock
            }
            newCart.push(newProduct)
            setCart(newCart)
            Toast.fire({
                icon: 'success',
                title: 'Produto adicionado ao carrinho'
            })
            localStorage.setItem("cart", JSON.stringify(newCart))
        }
    }

    const removeFromCart = (productToRemove) => {
        if (productToRemove.quantity > 1) {
            const newCart = cart.map((product) => {
                if (product.id === productToRemove.id) {
                    product.quantity -= 1
                }
                return product
            })
            setCart(newCart)
            Toast.fire({
                icon: 'success',
                title: 'Produto removido do carrinho'
            })
            localStorage.setItem("cart", JSON.stringify(newCart))
        } else {
            const newCart = cart.filter((product) => {
                return product.id !== productToRemove.id
            })
            setCart(newCart)
            Toast.fire({
                icon: 'success',
                title: 'Produto removido do carrinho'
            })
            localStorage.setItem("cart", JSON.stringify(newCart))
        }
    }

    const removeItemToCart = (productRemove) => {
        const newCart = cart.filter((product) => {
            return product.id !== productRemove.id
        })
        setCart(newCart)
        Toast.fire({
            icon: 'success',
            title: 'Produto removido do carrinho'
        })
        localStorage.setItem("cart", JSON.stringify(newCart))
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart")
    }

    useEffect(() => {
        const renderCart = localStorage.getItem("cart")
        const renderCartConvert = JSON.parse(renderCart)
        renderCartConvert && setCart(renderCartConvert)
    }, [])

    const calculateTotal = () => {
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        setTotal(total)
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
        setTotal,
        products
    }

    return (
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState