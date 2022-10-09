import { useState } from "react"
import { BASE_URL } from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"

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
                <div key={index}>
                    <p>{product.name}</p>
                    <p>Quantidade em estoque: {product.qty_stock}</p>
                </div>
            )
        })
    return (
        <div>
            <input onChange={handleSearch} value={search} placeholder="Busque pelo nome do produto" />
            {showStock}
        </div>
    )
}