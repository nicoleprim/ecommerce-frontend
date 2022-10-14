import { ContainerCard } from "./CardStockStyled";

export default function CardStock({product}) {

    return (
        <ContainerCard>
            <h3>{product.name}</h3>
            {product.qty_stock > 0 ? <h4>Quantidade em estoque: {product.qty_stock}</h4> : <p>Produto sem estoque</p>}
        </ContainerCard>
    )
}