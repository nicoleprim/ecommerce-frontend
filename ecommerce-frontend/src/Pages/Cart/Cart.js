import { useContext, useState } from "react"
import CartItems from "../../Components/CartItems/CartItems"
import GlobalContext from "../../Global/GlobalContext"
import useForm from "../../Hooks/useForm"

export default function Cart() {
    //  const { form, handleChange } = useForm({ userName: "", deliveryDate: "", products: [] })
    const { cart, setCart, addToCart } = useContext(GlobalContext)

    const calculateTotal = () => {
        const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    return (
        <div>
            Carrinho
            {cart.map((product, index) => {
                return (
                    <CartItems key={index} product={product} addToCart={addToCart}/>
                )
            })}

            <h2>Total: {calculateTotal()} </h2>
            <button>Finalizar compra</button>
            <button>Limpar carrinho</button>
        </div>
    )
}