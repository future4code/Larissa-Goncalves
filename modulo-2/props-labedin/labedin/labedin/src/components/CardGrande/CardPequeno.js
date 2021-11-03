import React from "react"; 
import 'styled-components'
import styled from 'styled-components'

const BigCardConteinerDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const BigCardConteinerImg = styled.img`
    width: 60px;
    margin-right: 20px;
    border-radius: 50%;
`
const BigCardConteinerH4 = styled.h4`
margin-bottom: 2px;
`
const DivConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
 `

function CardPequeno(props) {
    return (
        <BigCardConteinerDiv>
            <BigCardConteinerImg src={ props.imagem } />
            <DivConteiner>
                <BigCardConteinerH4>{ props.titulo }</BigCardConteinerH4>
            </DivConteiner>
        </BigCardConteinerDiv>
    )
}

export default CardPequeno;