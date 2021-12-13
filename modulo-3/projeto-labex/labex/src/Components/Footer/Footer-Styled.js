import styled from "styled-components"

export const DivFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    border: solid 1px black;
    background-color: #000000;

    div{
        height: 110px;
        img{
            height: 80px;
            width: 80px;
            margin: 20px;
        }
    }  
`
export const DivIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    
`
