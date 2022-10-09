export default function CartItems({productsCart}) {


    return (
        <div>
            {productsCart.map((cartItem, index) => <p>item</p>)}
        </div>
    )
}