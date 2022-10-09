import { useState } from "react"

export default function CardProduct({product, addItemToCart}) {

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</p>
            <button>Adicionar ao carrinho</button>
        </div>
    )
}