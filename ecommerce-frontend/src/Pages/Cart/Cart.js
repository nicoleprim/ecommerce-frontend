import { useState } from "react"
import CartItems from "../../Components/CartItems/CartItems"

export default function Cart() {
    const [productsCart, setProductsCart] = useState([])

    const addToCart = (id) => {
        const arrayProductsCart = [...productsCart]
        const item = arrayProductsCart.find((product) => product.id === id)
        if (!item) {
            arrayProductsCart.push({ id: id, qty: 1 })
        } else {
            item.qty = item.qty + 1
        }
        setProductsCart(arrayProductsCart)
    }

    const removeCart = (id) => {
        const arrayProductsCart = [...productsCart]
        const item = arrayProductsCart.find((product) => product.id === id)

        if (item && item.qty > 1) {
            item.qty = item.qty - 1
            setProductsCart(arrayProductsCart)
        } else {
            const arrayFiltered = arrayProductsCart.filter(product => product.id !== id)
            setProductsCart(arrayFiltered)
        }
    }

    const clearCart = () => {
        setProductsCart([])
    }


    return (
        <div>
            Cart
            <CartItems productsCart={productsCart} />
            <button onClick={clearCart}>Limpar carrinho</button>
        </div>
    )
}