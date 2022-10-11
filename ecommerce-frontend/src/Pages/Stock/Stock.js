import { useState } from "react"
import { BASE_URL } from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"
import { ContainerCard, ContainerItemCard, ContainerStock, Input } from "./StockStyled"
import Loading from '../../Assets/gif-loading.gif'

export default function Stock() {
    const [search, setSearch] = useState('')
    const products = useRequestData([], `${BASE_URL}products`)

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const showStock = products.filter((product) => {
        return product.name
            .toLowerCase()
            .includes(search.toLowerCase())
    })
        .map((product, index) => {
            return (
                <ContainerItemCard key={index}>
                    <h3>{product.name}</h3>
                    {product.qty_stock > 0 ? <h4>Quantidade em estoque: {product.qty_stock}</h4> : <p>Produto sem estoque</p>}
                </ContainerItemCard>
            )
        })
    return (
        <ContainerStock>
            <Input onChange={handleSearch} value={search} placeholder="Busque pelo nome do produto" />
            <ContainerCard>
            {products.length > 0 ? showStock : <img src={Loading}/>}
            {showStock}
            </ContainerCard>
        </ContainerStock>
    )
}