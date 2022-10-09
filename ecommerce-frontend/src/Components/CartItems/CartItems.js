export default function CartItems({product, addToCart}) {


    return (
        <div>
            Itens do carrinho
            <p>{product.name}</p>
            <p>{product.price.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</p>
            <p>x {product.quantity}</p>
            <button onClick={() => addToCart(product)}>+</button>
            <button>Remover item</button>
        </div>
    )
}