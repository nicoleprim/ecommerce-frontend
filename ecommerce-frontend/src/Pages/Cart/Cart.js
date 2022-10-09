import { useContext, useState } from "react"
import CartItems from "../../Components/CartItems/CartItems"
import GlobalContext from "../../Global/GlobalContext"
import useForm from "../../Hooks/useForm"

export default function Cart() {
    //  const { form, handleChange } = useForm({ userName: "", deliveryDate: "", products: [] })
    const { cart, setCart, addToCart, removeFromCart, removeItemToCart } = useContext(GlobalContext)

    const calculateTotal = () => {
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <div>
            Carrinho
            {cart.map((product, index) => {
                return (
                    <CartItems key={index} product={product} addToCart={addToCart} removeFromCart={removeFromCart} removeItemToCart={removeItemToCart}/>
                )
            })}

            <h2>Total: {calculateTotal()} </h2>
            <button>Finalizar compra</button>
            <button onClick={clearCart}>Limpar carrinho</button>
        </div>
    )
}