import React from "react";
import styled from "styled-components";
import 'styled-components'

const ConteinerDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ConteinerImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const ConteinerP = styled.p`
`

function CardConexao(props){
    return(
        <ConteinerDiv>
            <ConteinerImg src={props.imagem}/>
            <ConteinerP>{props.nome}</ConteinerP>
        </ConteinerDiv>
    )
}

export default CardConexao;