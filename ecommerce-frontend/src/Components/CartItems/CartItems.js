export default function CartItems({product, addToCart, removeFromCart, removeItemToCart}) {

    return (
        <div>
            Itens do carrinho
            <p>{product.name}</p>
            <p>{product.price.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</p>
            <button onClick={() => removeFromCart(product) }> -</button>
            <p>x {product.quantity}</p>
            <button onClick={() => addToCart(product)}>+</button>
            <button onClick={() => removeItemToCart(product)}>Remover item</button>
        </div>
    )
}
