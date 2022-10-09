import { useState } from "react"

export default function CardProduct({product, addItemToCart}) {

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.price.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</p>
            <button onClick={() => addItemToCart(product.id, product.name, product.price, product.qty)}>Adicionar ao carrinho</button>
        </div>
    )
}