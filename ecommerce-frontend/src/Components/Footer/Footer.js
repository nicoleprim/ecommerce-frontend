import { ContainerFooter } from "./FooterStyled";
import Logo from '../../Assets/logo shopper.png'
import { goToHome } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {BsLinkedin} from 'react-icons/bs'

export default function Footer() {
    const navigate = useNavigate()

    return (
        <ContainerFooter>
            <p>Desenvolvido por Nicole Prim <a href="https://www.linkedin.com/in/nicole-prim-478b6822b/"><BsLinkedin /> </a></p>
            <img src={Logo} alt="logo shopper" onClick={() => goToHome(navigate)} />
        </ContainerFooter>
    )
}