import React from "react";
import styled from "styled-components";

const Div3 = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap: 20px;
`

class Form3 extends React.Component{
    state = {
        pagina:"form1"
    }
    render(){
        
        return(
            <Div3>
               <h3>ETAPA 3 - INFORMAÇOES GERAIS DE ENSINO</h3>
               <p>5. Por que você não terminou um curso de graduação?</p>
               <input></input>
               <p>6. Você fez algum curso complementar?</p>
               <input></input>
            </Div3>
        )
    }
    
}
export default Form3;