import styled from "styled-components";

export const DivFlow = styled.div`
    border:solid 1px pink;
    height:50vh;
    display: flex;
    justify-content:center;

    div{
        display: flex;
        flex-direction: column;
        margin: 30px;
        margin-top: 90px;
        height:300px;
        width: 400px;
        border: solid 1px red;
        

    }
    `