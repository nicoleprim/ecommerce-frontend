import { useContext, useState } from "react"
import { ContainerCard, ContainerItemCard, ContainerStock, Input, Ordination, Select } from "./StockStyled"
import Loading from '../../Assets/gif-loading.gif'
import CardStock from "../../Components/CardStock/CardStock"
import GlobalContext from "../../Global/GlobalContext"

export default function Stock() {
    const [search, setSearch] = useState('')
    const [ordination, setOrdination] = useState('Crescente')
    const { products } = useContext(GlobalContext)

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
            <Ordination>
                <p>Ordene pela quantidade:</p>
                <Select onChange={handleOrdination} value={ordination}>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </Select>
            </Ordination>
            <ContainerCard>
                {products.length > 0 ? showStock : <img src={Loading} alt="gif loading" />}
            </ContainerCard>
        </ContainerStock>
    )
}