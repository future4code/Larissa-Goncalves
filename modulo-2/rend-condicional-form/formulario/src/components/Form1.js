import React from "react";
import styled from "styled-components";

const Div1 = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap: 20px;
`

class Form1 extends React.Component{
    state = {
        pagina:"form1"
    }
    render(){
        
        return(
            <Div1 >
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <p>1. Qual o seu nome?</p>
                <input></input>
                <p>2. Qual a sua idade?</p>
                <input></input>
                <p>3. Qual o seu Email?</p>
                <input></input>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option value={"Ensino medio imcompleto"}>Ensino medio incompleto</option>
                    <option value={"Ensino medio completo"}>Ensino medio completo</option>
                    <option value={"Ensino superior imcompleto"}>Ensino superio incompleto</option>
                    <option value={"Ensino superior copleto"}>Ensino superior completo</option>
                </select>
            </Div1 >
        )
    } 
}

export default Form1;