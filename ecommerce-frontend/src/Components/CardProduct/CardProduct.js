export default function CardProduct(props) {
    return (
        <div>
            <p>{props.product.name}</p>
            <p>{props.product.price}</p>
            <button>Adicionar ao carrinho</button>
        </div>
    )
}