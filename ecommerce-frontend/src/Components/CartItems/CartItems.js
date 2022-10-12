import { Add, AddAndRemove, ButtonRemove, ContainerCard, Remove, Total } from "./CartItemsStyled";
import {MdOutlineAddCircleOutline} from 'react-icons/md'
import {MdOutlineRemoveCircleOutline} from 'react-icons/md'
import {FaRegTrashAlt} from 'react-icons/fa'
import { useEffect, useState } from "react";

export default function CartItems({product, addToCart, removeFromCart, removeItemToCart}) {

    const calculateTotal = product.price * product.quantity

    return (
        <ContainerCard>
            <h4>{product.name}</h4>
            <h5>{product.price.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</h5>
            <Total>Total: {calculateTotal.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}</Total>
            <AddAndRemove>
            <Remove onClick={() => removeFromCart(product) }><MdOutlineRemoveCircleOutline /></Remove>
            <p>x {product.quantity}</p>
            <Add onClick={() => addToCart(product)}><MdOutlineAddCircleOutline /> </Add>
            </AddAndRemove>
            <ButtonRemove onClick={() => removeItemToCart(product)}><FaRegTrashAlt /></ButtonRemove>
        </ContainerCard>
    )
}
