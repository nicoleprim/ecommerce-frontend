import axios from "axios"
import { useContext, useEffect, useState } from "react"
import CartItems from "../../Components/CartItems/CartItems"
import { BASE_URL } from "../../Constants/url"
import GlobalContext from "../../Global/GlobalContext"
import useForm from "../../Hooks/useForm"

export default function Cart() {
    const { cart, setCart, addToCart, removeFromCart, removeItemToCart, calculateTotal, clearCart, total } = useContext(GlobalContext)
    const { form, handleChange, cleanFields } = useForm({ userName: '', deliveryDate: '' })

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
            console.log("entrou no try")

            const res = await axios.post(`${BASE_URL}orders/createorder`, body)
            alert(res.data.message)
            console.log(res.data.orders)
        } catch (err) {
            console.log(err)
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
                <p>Ainda não foram adicionados produtos ao carrinho</p>
            }



        </div>
    )
}