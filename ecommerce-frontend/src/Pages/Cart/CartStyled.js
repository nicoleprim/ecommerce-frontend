import styled from 'styled-components'

export const ContainerItemCart = styled.div `
    display: flex;
    width: 20em;
    height: 20em;
    border: 1px solid rgba(226, 226, 226, 0.38);
    box-shadow: 3px 2px 2px rgba(226, 226, 226, 0.38);
    padding: 1em;
    border-radius: 10px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`

export const ContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`

export const ContainerCart = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        color: rgb(45, 167, 122);
        font-size: 1.8rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }
`

export const Tittle = styled.h2`
    margin: 2rem;
    color: rgb(45, 167, 122);
    width: 40em;
    text-align: center;
    border-radius: 1em;
    padding: 0.6em;
    font-size: 1.8rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    @media screen and (max-width: 600px) {
        width: 15em;
    }
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 3rem;
    h3{
        font-size: 1.2rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        color: rgb(0, 45, 98);
    }
    label{
        font-size: 1rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color: rgb(0, 45, 98);
        padding: 0.7em;
    }
    input{
        width: 40em;
        height: 2em;
        border-radius: 1em;
        padding: 0.6em;
        border: 1px solid rgb(45, 167, 122);
        font-size: 1rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        @media screen and (max-width: 600px) {
        width: 20rem;
        }
    }
`

export const ButtonSubmit = styled.button`
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(45, 167, 122);
        width: 16em;
        border-radius: 50px;
        padding: 6px 12px;
        text-align: center;
        color: rgb(45, 167, 122);
        cursor: pointer;
        height: 40px;
        font-size: 1.2em;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        :hover{
            background-color: rgb(45, 167, 122);
            color: rgb(255, 255, 255);
        }
`

export const ButtonClear = styled.button`
        margin: 2em;
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(184, 1, 7);
        width: 16em;
        border-radius: 50px;
        padding: 6px 12px;
        text-align: center;
        color: rgb(184, 1, 7);
        cursor: pointer;
        height: 40px;
        font-size: 1.2em;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        :hover{
            background-color: rgb(184, 1, 7);
            color: rgb(255, 255, 255);
        }
`

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2{
        color: #666;
        font-size: 1.8rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }
    h3{
        color: rgb(0, 45, 98);
        font-size: 1.5rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }
    h4{
        color: rgb(45, 167, 122);
        font-size: 1.3rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }
    button{
        background-color: rgb(249, 249, 249);
        border: 1px solid rgb(0, 45, 98);
        width: 12em;
        border-radius: 8px;
        padding: 5px 10px;
        text-align: center;
        color: rgb(0, 45, 98);
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        height: 40px;
        font-size: 1.1rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        :hover{
            background-color: rgb(0, 45, 98);
            color: rgb(249, 249, 249);
        }
    }
`