import CardProduct from "../../Components/CardProduct/CardProduct"
import { BASE_URL } from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"
import { useContext, useState } from "react"
import GlobalContext from "../../Global/GlobalContext"

export default function Home() {
    const [search, setSearch] = useState('')
    const { cart, setCart, addToCart } = useContext(GlobalContext)
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
                <div key={index} >
                    <CardProduct 
                    product={product} 
                    addToCart={addToCart} />
                </div>
            )
        })
    return (
        <div>
            <input onChange={handleSearch} value={search} placeholder="Busque pelo nome do produto" />
            {showProducts}
        </div>
    )
}