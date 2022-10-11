import styled from 'styled-components'

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10em;
    width: 95%;
    margin-top: auto;
    img{
        height: 6em;
        cursor: pointer;
    }
    p{
        color: rgb(0, 45, 98);
        font-size: 16px;
        font-weight: bold;
        margin-left: 1em;
        height: 40px;
        font-size: 1.1rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
    }
    a{
        margin-left: 0.2rem;
        svg{
            color: rgb(45, 167, 122);
        }
    }
    @media screen and (max-width: 600px) {
        img{
            height: 4rem;
        }
        p{
            font-size: 13px;
            margin-top: 3rem;
        }
        flex-direction: column;
    }
`