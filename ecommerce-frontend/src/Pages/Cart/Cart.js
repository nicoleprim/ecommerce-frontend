import axios from "axios"
import { useContext, useEffect } from "react"
import CartItems from "../../Components/CartItems/CartItems"
import { BASE_URL } from "../../Constants/url"
import GlobalContext from "../../Global/GlobalContext"
import useForm from "../../Hooks/useForm"
import Swal from 'sweetalert2'
import { goToHome } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import { ButtonClear, ButtonSubmit, ContainerCard, ContainerCart, ContainerForm, ContainerItemCart, EmptyCart, Tittle } from "./CartStyled"

export default function Cart() {
    const { cart, setCart, addToCart, removeFromCart, removeItemToCart, calculateTotal, clearCart, total } = useContext(GlobalContext)
    const { form, handleChange } = useForm({ userName: '', deliveryDate: '' })
    const navigate = useNavigate()

    useEffect(() => {
        calculateTotal()
    }, [cart])

    const submitOrder = async () => {
        const body = {
            userName: form.userName,
            deliveryDate: form.deliveryDate,
            products: cart
        }
        try {
            const res = await axios.post(`${BASE_URL}orders/createorder`, body)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 2000
            })
            setCart([])
            localStorage.removeItem("cart")
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Parece que algo deu errado:',
                text: err.response.data.message,
                showConfirmButton: true,
                confirmButtonColor: '#960018'
            })
        }
    }

    const showCart = cart.map((product, index) => {
        return (
            <ContainerItemCart key={index}>
                <CartItems
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    removeItemToCart={removeItemToCart} />
            </ContainerItemCart>
        )
    })

    return (
        <ContainerCart>
            <Tittle>Carrinho de Compras</Tittle>

            {cart.length ?
                <>
                    <ContainerForm>
                        <h3>Preencha o formulário para prosseguir:</h3>
                        <label>Nome *</label>
                        <input name="userName" type="text" onChange={handleChange} value={form.userName} placeholder="Digite seu nome" required />
                        <label>Data de entrega *</label>
                        <input name="deliveryDate" type="date" onChange={handleChange} value={form.deliveryDate} required />
                    </ContainerForm>

                    <ContainerCard>
                        {showCart}
                    </ContainerCard>

                    <h3>Total: {total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </h3>

                    <ButtonSubmit onClick={submitOrder}> Finalizar compra</ButtonSubmit>

                    <ButtonClear onClick={clearCart}>Limpar carrinho</ButtonClear>
                </>
                :
                <EmptyCart>
                    <h2>O seu carrinho está vazio!</h2>
                    <h3>Confira os nossos produtos e agende sua entrega</h3>
                    <h3>Qualquer dúvida, entre em contato conosco</h3>
                    <h4>Ficaremos felizes em te atender =)</h4>
                    <button onClick={() => goToHome(navigate)}>Conferir produtos</button>
                </EmptyCart>
            }
        </ContainerCart>
    )
}