import styled from 'styled-components'

export const ContainerHeader = styled.div`
    display: flex;
    width: 95%;
    height: 7em;
    align-items: center;
    justify-content: space-between;
    img{
        height: 6em;
        cursor: pointer;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    gap: 1rem;
    button{
        background-color: rgb(249, 249, 249);
        border: 1px solid rgb(0, 45, 98);
        width: 8em;
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