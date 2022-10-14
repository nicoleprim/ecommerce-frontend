import { useState } from "react"
import { BASE_URL } from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"
import { ContainerCard, ContainerItemCard, ContainerStock, Input, Select } from "./StockStyled"
import Loading from '../../Assets/gif-loading.gif'
import CardStock from "../../Components/CardStock/CardStock"

export default function Stock() {
    const [search, setSearch] = useState('')
    const [ordination, setOrdination] = useState('Crescente')
    const products = useRequestData([], `${BASE_URL}products`)

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleOrdination = (event) => {
        setOrdination(event.target.value)
    }

    const showStock = products
    .filter((product) => {
        return product.name
            .toLowerCase()
            .includes(search.toLowerCase())
    })
    .sort((productA, productB) =>
            ordination === "Crescente" ? productA.qty_stock - productB.qty_stock : productB.qty_stock - productA.qty_stock)
        .map((product, index) => {
            return (
                <ContainerItemCard key={index}>
                    <CardStock
                    product={product} />
                </ContainerItemCard>
            )
        })
    return (
        <ContainerStock>
            <Input onChange={handleSearch} value={search} placeholder="Busque pelo nome do produto" />
            <Select onChange={handleOrdination} value={ordination}>
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
            </Select>
            <ContainerCard>
            {products.length > 0 ? showStock : <img src={Loading}/>}
            </ContainerCard>
        </ContainerStock>
    )
}