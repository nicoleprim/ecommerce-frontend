import styled from 'styled-components'

export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerCard = styled.div`
    display: flex;
    width: 100em;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`

export const ContainerItemCard = styled.div`
    display: flex;
    width: 20em;
    border: 0.3px solid rgb(0, 45, 98);
    box-shadow: 3px 2px 1px rgb(0, 45, 98);
    padding: 2em;
    border-radius: 10px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
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