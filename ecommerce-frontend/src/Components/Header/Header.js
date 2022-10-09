import { useNavigate } from "react-router-dom"
import { goToCart, goToStock } from "../../Routes/Coordinator"

export default function Header() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => goToCart(navigate)}>Carrinho</button>
            <button onClick={() => goToStock(navigate)}>Ver estoque</button>
            Header
        </div>
    )
}