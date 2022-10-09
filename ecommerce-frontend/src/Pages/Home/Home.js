import CardProduct from "../../Components/CardProduct/CardProduct"
import { BASE_URL } from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"
import { useState } from "react"

export default function Home() {
    const [search, setSearch] = useState('')
    const [cart, setCart] = useState([])
    const products = useRequestData([], `${BASE_URL}products`)

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const showProducts = products.filter((product) => {
        return product.name
            .toLowerCase()
            .includes(search.toLowerCase())
    })
        .map((product, index) => {
            return (
                <>
                    <CardProduct key={index} product={product} addItemToCart={addItemToCart} />
                </>
            )
        })
    return (
        <div>
            <input onChange={handleSearch} value={search} placeholder="Busque pelo nome do produto" />
            {showProducts}
        </div>
    )
}