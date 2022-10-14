import CardProduct from "../../Components/CardProduct/CardProduct"
import { useContext, useState } from "react"
import GlobalContext from "../../Global/GlobalContext"
import { ContainerCard, ContainerHome, ContainerItemCard, Input, Ordination, Select } from "./HomeStyled"
import Loading from '../../Assets/gif-loading.gif'

export default function Home() {
    const [search, setSearch] = useState('')
    const [ordination, setOrdination] = useState('Crescente')
    const { products, addToCart } = useContext(GlobalContext)

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleOrdination = (event) => {
        setOrdination(event.target.value)
    }

    const showProducts = products
        .filter((product) => {
            return product.name
                .toLowerCase()
                .includes(search.toLowerCase())
        })
        .sort((productA, productB) =>
            ordination === "Crescente" ? productA.price - productB.price : productB.price - productA.price)
        .map((product, index) => {
            return (
                <ContainerItemCard key={index} >
                    <CardProduct
                        product={product}
                        addToCart={addToCart} />
                </ContainerItemCard>
            )
        })

    return (
        <ContainerHome>
            <Input onChange={handleSearch} value={search} placeholder="Busque pelo nome do produto" />
            <Ordination>
                <p>Ordene pelo valor:</p>
                <Select onChange={handleOrdination} value={ordination}>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </Select>
            </Ordination>
            <ContainerCard>
                {products.length > 0 ? showProducts : <img src={Loading} alt="gif loading"/>}
            </ContainerCard>
        </ContainerHome>
    )
}