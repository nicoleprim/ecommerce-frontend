import CardProduct from "../../Components/CardProduct/CardProduct"
import { BASE_URL } from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"
import { useState } from "react"

export default function Home() {
    const [search, setSearch] = useState('')
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
            <CardProduct key={index} product={product} />
        )
    })
    return (
        <div>
            <input onChange={handleSearch} value={search} />
            {showProducts}
        </div>
    )
}