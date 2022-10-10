import styled from 'styled-components'

export const ContainerStock = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    margin: 2rem;
    width: 40em;
    height: 2em;
    border-radius: 1em;
    padding: 0.6em;
    border: 1px solid rgb(45, 167, 122);
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
`

export const ContainerCard = styled.div`
    display: flex;
    width: 90em;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`

export const ContainerItemCard = styled.div`
    display: flex;
    width: 20em;
    border: 1px solid rgba(226, 226, 226, 0.38);
    box-shadow: 3px 2px 2px rgba(226, 226, 226, 0.38);
    padding: 2em;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    h3{
        color: #666;
        font-size: 1.3rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
    h4{
        color: rgb(45, 167, 122);
        font-size: 1.3rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
`