import { ContainerCard } from "./CardProductStyled";


export default function CardProduct({product, addToCart}) {

    return (
        <ContainerCard>
            <h4>{product.name}</h4>
            <h5>{product.price.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</h5>
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
        </ContainerCard>
    )
}