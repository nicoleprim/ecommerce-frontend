import { useState } from "react"

export default function CardProduct({product, addToCart}) {

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
        </div>
    )
}