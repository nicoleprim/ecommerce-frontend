import { useState } from "react"
import CartItems from "../../Components/CartItems/CartItems"
import useForm from "../../Hooks/useForm"

export default function Cart() {
  //  const { form, handleChange } = useForm({ userName: "", deliveryDate: "", products: [] })


    return (
        <div>
            Carrinho
            <CartItems />
            <h2>Total: R$ </h2>
            <button>Finalizar compra</button>
            <button>Limpar carrinho</button>
        </div>
    )
}