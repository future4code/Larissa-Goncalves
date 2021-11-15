import React from "react";
import styled from "styled-components";

const Div4 = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap: 20px;
`

class PagFinal extends React.Component{
    render(){
        
        return(
            <Div4>
                <h3>O FORMULÁRIO ACABOU </h3>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Div4>
        )
    }
}
export default PagFinal;