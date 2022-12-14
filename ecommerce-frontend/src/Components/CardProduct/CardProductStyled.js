import styled from 'styled-components'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    h4{
        height: 3rem;
        color: #666;
        font-size: 1.2rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }
    h5{
        height: 2rem;
        color: rgb(45, 167, 122);
        font-size: 1.5rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
    button{
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(45, 167, 122);
        width: 13em;
        border-radius: 50px;
        padding: 6px 12px;
        text-align: center;
        color: rgb(45, 167, 122);
        font-weight: bold;
        cursor: pointer;
        height: 2.5rem;
        font-size: 1.1em;
        font-family: 'Lato', sans-serif;
        :hover{
            background-color: rgb(45, 167, 122);
            color: rgb(255, 255, 255);
        }
    }
    p{
        color: rgb(184, 1, 7);
        font-weight: 700;
        font-size: 1.1em;
        font-family: 'Lato', sans-serif;
        width: 13em;
        height: 0.7rem;
    }
`