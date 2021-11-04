import React from 'react';
import 'styled-components'
import styled from 'styled-components';

const ConteinerGlobal = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ContainerImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const ContainerH4 = styled.h4`
    margin-bottom: 15px;
`
const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <ConteinerGlobal>
            <ContainerImg src={ props.imagem } />
            <ContainerDiv>
                <ContainerH4>{ props.nome }</ContainerH4>
                <p>{ props.descricao }</p>
            </ContainerDiv>
        </ConteinerGlobal>
    )
}

export default CardGrande;