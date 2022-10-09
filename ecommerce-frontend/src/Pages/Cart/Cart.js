import { useState } from "react"
import CartItems from "../../Components/CartItems/CartItems"

export default function Cart() {
    

    return (
        <div>
            Carrinho
            <CartItems />
            
            <button>Finalizar compra</button>
            <button>Limpar carrinho</button>
        </div>
    )
}