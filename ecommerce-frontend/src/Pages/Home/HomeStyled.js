import styled from 'styled-components'

export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerCard = styled.div`
    display: flex;
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
    flex-wrap: wrap;
    justify-content: center;
`

export const Input = styled.input`
    margin: 2rem;
    width: 40rem;
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
`