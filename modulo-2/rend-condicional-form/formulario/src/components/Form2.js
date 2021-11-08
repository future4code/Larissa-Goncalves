import React from "react";
import styled from "styled-components";

const Div2 = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap: 20px;
`

class Form2 extends React.Component{
    state = {
        pagina:"form1"
    }
    render(){
        
        return(
            <Div2>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p>Qual curso?</p>
                <input></input>
                <p>Qual unidade de ensino?</p>
                <input></input>
            </Div2>
        )
    }
}

export default Form2;