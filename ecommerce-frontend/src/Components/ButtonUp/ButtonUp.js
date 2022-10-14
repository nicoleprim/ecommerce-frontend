import { useState } from "react";
import toTopPng from '../../Assets/totop.png'
import { Button } from "./ButtonUpStyled";

export default function ButtonUp() {
    const [pageYPosition, setPageYPosition] = useState(0);

    window.addEventListener('scroll', toTop);

    function toTop() {
        setPageYPosition(window.scrollY);
    }

    return (
        <>
            {pageYPosition > 400 && <Button onClick={() => setPageYPosition(window.scroll(0, 0))}><img src={toTopPng} alt="botão voltar ao topo"/></Button>}
        </>
    )
}