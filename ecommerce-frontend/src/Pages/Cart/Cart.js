import axios from "axios"
import { useContext, useEffect } from "react"
import CartItems from "../../Components/CartItems/CartItems"
import { BASE_URL } from "../../Constants/url"
import GlobalContext from "../../Global/GlobalContext"
import useForm from "../../Hooks/useForm"
import Swal from 'sweetalert2'
import { goToHome } from "../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"

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
        } catch(err) {
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
            <CartItems
                key={index}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                removeItemToCart={removeItemToCart} />
        )
    })

    return (
        <div>
            Carrinho

            {cart.length ?
                <>
                    {showCart}
                    <h2>Total: {total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </h2>

                    <form>
                        <label>Nome</label>
                        <input name="userName" type="text" onChange={handleChange} value={form.userName} placeholder="Digite seu nome" required />
                        <label>Data de entrega</label>
                        <input name="deliveryDate" type="date" onChange={handleChange} value={form.deliveryDate} required />
                    </form>

                    <button onClick={submitOrder}> Finalizar compra</button>

                    <button onClick={clearCart}>Limpar carrinho</button>
                </>
                :
                <>
                <p>O seu carrinho está vazio</p>
                <p>Confira os nossos produtos e agende sua entrega</p>
                <p>Ficaremos felizes em te atender</p>
                <button onClick={() => goToHome(navigate)}>Conferir produtos</button>
                </>
            }



        </div>
    )
}