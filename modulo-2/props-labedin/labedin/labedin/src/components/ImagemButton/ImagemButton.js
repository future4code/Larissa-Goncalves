import React from 'react';
import 'styled-components'
import styled from 'styled-components';

const ContainerDoBotao = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const ImageButtonContainer = styled.img`
    width: 30px;
    margin-right:10px;
`

function ImagemButton(props) {
    return (
        <ContainerDoBotao>
            <ImageButtonContainer src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerDoBotao>

    )
}

export default ImagemButton;