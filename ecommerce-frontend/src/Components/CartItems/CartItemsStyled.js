import styled from 'styled-components'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    h4{
        color: #666;
        font-size: 1.1rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }
    h5{
        color: rgb(45, 167, 122);
        font-size: 1.1rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
`

export const AddAndRemove = styled.div`
    display: flex;
    p{
        padding: 1em;
        font-size: 1.2rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
`

export const Remove = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
        color: rgb(184, 1, 7);
        font-size: 1.6rem;
    }
`

export const Add = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
        color: rgb(45, 167, 122);
        font-size: 1.6rem;
    }
`

export const ButtonRemove = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    svg {
        color: rgb(184, 1, 7);
        font-size: 1.6rem;
    }
`

export const Total = styled.p`
        color: #666;
        font-size: 1rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        padding: 0;
`