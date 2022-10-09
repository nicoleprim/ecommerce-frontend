import CardProduct from "../../Components/CardProduct/CardProduct"
import { BASE_URL } from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"

export default function Home() {
    const products = useRequestData([], `${BASE_URL}products`)

    const showProducts = products.map((product, index) => {
        return (
            <CardProduct key={index} product={product} />
        )
    })
    return (
        <div>
            {showProducts}
        </div>
    )
}