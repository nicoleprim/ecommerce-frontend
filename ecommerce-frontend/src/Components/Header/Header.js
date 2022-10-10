import { useNavigate } from "react-router-dom"
import { goToCart, goToHome, goToStock } from "../../Routes/Coordinator"
import Logo from '../../Assets/logo shopper.png'
import { ContainerButton, ContainerHeader } from "./HeaderStyled"

export default function Header() {
    const navigate = useNavigate()

    const renderButtons = () => {
        if (window.location.pathname === "/cart") {
            return (
                <ContainerHeader>
                    <img src={Logo} alt="logo shopper" onClick={() => goToHome(navigate)} />
                    <ContainerButton>
                    <button onClick={() => goToHome(navigate)}>Home</button>
                    <button onClick={() => goToStock(navigate)}>Ver estoque</button>
                    </ContainerButton>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/stock") {
            return (
                <ContainerHeader>
                    <img src={Logo} alt="logo shopper" onClick={() => goToHome(navigate)} />
                    <ContainerButton>
                    <button onClick={() => goToHome(navigate)}>Home</button>
                    <button onClick={() => goToCart(navigate)}>Carrinho</button>
                    </ContainerButton>
                </ContainerHeader>
            )
        } else {
            return (
                <ContainerHeader>
                    <img src={Logo} alt="logo shopper" onClick={() => goToHome(navigate)} />
                    <ContainerButton>
                    <button onClick={() => goToCart(navigate)}>Carrinho</button>
                    <button onClick={() => goToStock(navigate)}>Ver estoque</button>
                    </ContainerButton>
                </ContainerHeader>
            )
        }
    }
    return (
        <>
            {renderButtons()}
        </>
    )
}